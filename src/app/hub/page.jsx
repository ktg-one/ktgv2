import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Wrench,
  Network,
  Link as LinkIcon,
  Globe,
  Atom,
  Newspaper,
  Command,
  PenTool,
} from "lucide-react";

export const metadata = {
  title: "AI tool hub",
  description:
    "The AI tool hub — chat studio, snippet vault, and the in-progress tool suite powering .ktg.",
};

const HUB_TOOLS = [
  {
    id: "chat",
    label: "chat studio",
    description:
      "Multi-model streaming chat across 9 families (gemini, claude, chatgpt, grok, deepseek, qwen, kimi, llama, mistral) with skills, MCP servers, personas, and code execution.",
    icon: MessageSquare,
    status: "live",
    href: "/hub/chat",
  },
  {
    id: "snippets",
    label: "snippet vault",
    description:
      "Searchable library of KTG framework snippets — atomic techniques and gates, stored in Vercel Blob with AI-enhanced search.",
    icon: FileText,
    status: "live",
    href: "/hub/snippets",
  },
  {
    id: "prompt-forge",
    label: "prompt forge",
    description:
      "Iterative prompt construction bench — build, version, and test prompt templates before wiring them into workflows.",
    icon: Wrench,
    status: "in-progress",
  },
  {
    id: "workflow",
    label: "workflow studio",
    description:
      "Visual orchestration canvas for chaining tools, models, and automations into repeatable pipelines.",
    icon: Network,
    status: "in-progress",
  },
  {
    id: "embed-chain",
    label: "embed chain",
    description:
      "In-page AI widgets — portable chat and LLM components embeddable into any site or app.",
    icon: LinkIcon,
    status: "in-progress",
  },
  {
    id: "platforms",
    label: "platforms",
    description:
      "Cross-platform deployment panel: ship prompts and agents to the app stores and device surfaces.",
    icon: Globe,
    status: "in-progress",
  },
  {
    id: "google-universe",
    label: "google universe",
    description:
      "Google Workspace integration layer — gws CLI bridging gmail, calendar, and docs into automation flows.",
    icon: Atom,
    status: "in-progress",
  },
  {
    id: "newsroom",
    label: "newsroom",
    description:
      "Content pipeline for signal triage and publication — feeds, drafts, and distribution in one queue.",
    icon: Newspaper,
    status: "in-progress",
  },
  {
    id: "orchestration",
    label: "orchestration",
    description:
      "Multi-agent task orchestration — background runs, sandboxing, and state across agents.",
    icon: Command,
    status: "in-progress",
  },
  {
    id: "content-hub",
    label: "content hub",
    description:
      "Long-form writing workspace — drafts, knowledge base links, and publishing.",
    icon: PenTool,
    status: "in-progress",
  },
];

export default function HubPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <header className="mb-16">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#00f0ff]">
            .ktg / tools
          </p>
          <h1 className="font-syne text-4xl font-bold lowercase md:text-6xl">
            ai tool hub
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Consolidated suite of AI tools and experiments. Chat studio and
            snippet vault are live; the rest of the rack is under construction.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Hub tools">
          {HUB_TOOLS.map((tool) => {
            const isLive = tool.status === "live";
            const inner = (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <tool.icon className="h-5 w-5 text-white/80" strokeWidth={1.5} />
                  </div>
                  <span
                    className={
                      isLive
                        ? "rounded-full border border-[rgba(0,240,255,0.35)] bg-[rgba(0,240,255,0.1)] px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#00f0ff]"
                        : "rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-white/40"
                    }
                  >
                    {isLive ? "live" : "in progress"}
                  </span>
                </div>
                <h2 className="font-syne text-xl font-bold lowercase md:text-2xl">
                  {tool.label}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {tool.description}
                </p>
              </>
            );
            return isLive ? (
              <Link
                key={tool.id}
                href={tool.href}
                id={tool.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[rgba(0,240,255,0.35)] hover:bg-[rgba(0,240,255,0.04)] hover:shadow-[0_0_24px_rgba(0,240,255,0.12)]"
              >
                {inner}
                <span className="mt-5 inline-block font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-white/40 transition-colors group-hover:text-[#00f0ff]">
                  open →
                </span>
              </Link>
            ) : (
              <div
                key={tool.id}
                id={tool.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                {inner}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}