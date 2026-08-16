# KTG Hub

Consolidated suite of AI tools and experiments, reachable from `/hub`.

## Tools

| Route | Tool | Status |
| --- | --- | --- |
| `/hub` | AI tool hub landing — overview of the whole suite | live |
| `/hub/chat` | Chat studio — multi-model streaming (9 families), skills, MCP server toggles, personas, code execution | live |
| `/hub/snippets` | Snippet vault — KTG framework snippets w/ AI-enhanced search (Vercel Postgres + Blob) | live |
| `/hub/#prompt-forge` → | Prompt forge — iterative prompt construction bench | in progress |

Landing cards are anchor `id`s — the chat sidebar's reserved tool slots (workflow studio, embed chain, platforms, google universe, newsroom, orchestration, content hub) resolve to the corresponding landing card.

## Hub landing

`src/app/hub/page.jsx` replaces the previous blind redirect to `/hub/snippets` with a
tool-grid landing. Live tools link straight in; in-progress tools render as cards so
the whole rack is visible and navigable.