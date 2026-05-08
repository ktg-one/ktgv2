import { streamText, tool, convertToModelMessages, stepCountIs, smoothStream } from "ai";
import { z } from "zod";

export const runtime = "nodejs";

// All models route through Vercel AI Gateway. Auth is OIDC (VERCEL_OIDC_TOKEN
// in dev via `vercel env pull`, auto-refreshed in prod). No provider keys.
// UI key → Gateway "provider/model" slug.
const MODEL_REGISTRY = {
  // Google
  "gemini-2.5-flash": "google/gemini-2.5-flash",
  "gemini-2.5-pro": "google/gemini-2.5-pro",
  "gemini-2.0-flash": "google/gemini-2.0-flash",
  // Anthropic
  "claude-sonnet-4": "anthropic/claude-sonnet-4",
  "claude-haiku-3.5": "anthropic/claude-3.5-haiku",
  "claude-opus-4": "anthropic/claude-opus-4.6",
  // OpenAI
  "gpt-4.1": "openai/gpt-4.1",
  "gpt-4.1-mini": "openai/gpt-4.1-mini",
  "o3-mini": "openai/o3-mini",
  // DeepSeek
  "deepseek-chat": "deepseek/deepseek-v3.2",
  "deepseek-reasoner": "deepseek/deepseek-r1",
  // Mistral
  "mistral-large": "mistral/mistral-large-latest",
  "codestral": "mistral/codestral",
  // Meta Llama
  "llama-4-scout": "meta/llama-4-maverick",
  "llama-3.3-70b": "meta/llama-3.3-70b",
  // Alibaba Qwen
  "qwen-2.5-72b": "alibaba/qwen-3-32b",
  "qwen-coder-32b": "alibaba/qwen3-coder",
  // xAI Grok
  "grok-3": "xai/grok-3",
  "grok-3-mini": "xai/grok-3-mini",
  // Moonshot Kimi
  "kimi-k2": "moonshotai/kimi-k2",
  "moonshot-v1-8k": "moonshotai/kimi-k2",
};

const DEFAULT_MODEL = "google/gemini-2.5-flash";

function buildTools(activeSkills = [], activeMcps = [], baseUrl) {
  const tools = {};

  if (activeSkills.includes("code-exec")) {
    tools.runCode = tool({
      description:
        "Execute Python code to solve computational problems, analyze data, or perform calculations. Write and run Python code, then return the result.",
      inputSchema: z.object({
        code: z.string().describe("Python code to execute"),
        description: z.string().describe("What this code does"),
      }),
      execute: async ({ code, description }) => ({
        status: "displayed",
        description,
        code,
        note: "Code execution is rendered in the chat. Server-side execution coming soon.",
      }),
    });
  }

  if (activeSkills.includes("db-access")) {
    tools.queryDatabase = tool({
      description:
        "Query the KTG snippets database. Returns snippet titles, descriptions, tags, and types. Use this to search for code snippets, techniques, or framework documentation.",
      inputSchema: z.object({
        query: z.string().describe("Search term to find relevant snippets"),
        type: z
          .string()
          .optional()
          .describe("Filter by snippet type: gate, technique, pattern, tool"),
      }),
      execute: async ({ query, type }) => {
        const params = new URLSearchParams();
        if (query) params.set("q", query);
        if (type) params.set("type", type);
        try {
          const res = await fetch(
            `${baseUrl.replace(/\/$/, "")}/api/hub/snippets?${params}`
          );
          if (!res.ok) throw new Error("Snippets API error");
          const snippets = await res.json();
          return {
            count: snippets.length,
            results: snippets.slice(0, 10).map((s) => ({
              id: s.id,
              title: s.title,
              description: s.description,
              tags: s.tags,
              type: s.snippet_type,
            })),
          };
        } catch (error) {
          return { error: "Could not query snippets database", detail: error.message };
        }
      },
    });
  }

  if (activeMcps.includes("filesystem")) {
    tools.listFiles = tool({
      description: "List files in the project directory structure",
      inputSchema: z.object({
        path: z.string().describe("Directory path to list"),
      }),
      execute: async ({ path }) => ({
        note: "Filesystem access is restricted in production. Available in development only.",
        requestedPath: path,
      }),
    });
  }

  return tools;
}

export async function POST(req) {
  const {
    messages,
    model,
    systemPrompt,
    activeSkills,
    activeMcps,
  } = await req.json();

  const requestUrl = new URL(req.url);
  const baseUrl = `${requestUrl.protocol}//${requestUrl.host}`;

  const gatewaySlug = MODEL_REGISTRY[model] || DEFAULT_MODEL;
  const modelMessages = await convertToModelMessages(messages);
  const tools = buildTools(activeSkills, activeMcps, baseUrl);
  const finalTools = Object.keys(tools).length > 0 ? tools : undefined;

  const result = await streamText({
    model: gatewaySlug,
    system: systemPrompt || "You are a helpful, respectful, and honest assistant.",
    messages: modelMessages,
    tools: finalTools,
    stopWhen: stepCountIs(5),
    experimental_transform: smoothStream(),
    providerOptions: {
      gateway: {
        tags: ["feature:hub-chat", "env:" + (process.env.VERCEL_ENV || "development")],
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
