# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Session Boot

Type `/init-p` at session start. Warms `in-memoria` + `serena`, indexes via global `jcodemunch`, logs mem0 with `[YYYY-MM-DD][cc][ktgv2][R/10]`, recalls project memory. Output is exactly 4 lines — read them.

## Commands

```bash
pnpm dev           # Start dev server (Next.js 16 with Turbopack)
pnpm build         # Production build
pnpm lint          # ESLint via next lint
pnpm deploy        # Deploy to Vercel production
pnpm extract-snippets  # Extract DOCS content into Vercel Blob + Postgres
```

No test suite is configured. Use `pnpm dev` and browser to verify changes.

## Architecture

**Stack:** Next.js 16, React 19, JSX (not TSX — main app is `.jsx`), Tailwind CSS v4, GSAP + ScrollTrigger, Lenis smooth scroll, Drizzle ORM + Vercel Postgres, Vercel Blob, shadcn/ui primitives.

**Entry point:** `src/app/layout.jsx` — the root layout wraps everything in `<ClientLayout>` and mounts four globals that persist across all pages:
- `GeometricBackground` (fixed, behind all content)
- `DockNav` (floating icon dock nav)
- `CursorDot` — must remain **last** in the render tree to stay above all stacking contexts
- `src/app/template.jsx` wraps every page in `<PageTransition>` for route-change animations
- Fonts: Syne (`--font-syne`) for branding/headings, Inter (`--font-inter`) for body, Iosevka (local, `--font-iosevka`) for code/mono

**Pages:**
- `/` — Homepage: HeroSection, ExpertiseSection, PhilosophySection, ContactCTA
- `/blog`, `/blog/[slug]` — Blog backed by external WordPress instance (`lawngreen-mallard-558077.hostingersite.com`); fetched via `src/lib/wordpress.js`
- `/expertise` — Expertise detail page
- `/validation` — Validation/credentials section
- `/hub` — Redirects to `/hub/snippets`; tool hub entry point
- `/hub/snippets` — Snippet browser; client component that fetches from `/api/hub/snippets`
- `/hub/chat` — Multi-model AI chat UI (Vercel AI SDK); streams via **`POST /api/hub/chat`** (server-side keys). This is the **integrated** production chat surface.

**Hub data layer:**
- Snippet metadata stored in Vercel Postgres via Drizzle ORM (`src/lib/db/schema.js` — single `snippets` table)
- Snippet content stored in Vercel Blob (URL referenced in `blob_url` column)
- API routes at `src/app/api/hub/snippets/` (list + `[id]` CRUD), **`src/app/api/hub/chat/route.js`** (chat), `src/app/api/hub/settings/route.js` (settings)
- `scripts/extract-snippets.js` populates the DB from local DOCS files

**Component layout:**
- `src/components/` — Page section components + global UI (`DockNav`, `CursorDot`, `GeometricBackground`, `ClientLayout`)
- `src/components/hub/` — Hub-specific components (`SnippetCard`, `SnippetViewer`)
- `src/components/ui/` — shadcn/ui primitives (accordion, badge, button, card, etc.)
- `src/components/shadcn-studio/` — Extended shadcn variants
- `src/lib/` — `db/` (Drizzle schema + client), `snippets/storage.js` (Vercel Blob), `wordpress.js` (WP REST client), `utils.js`
- `src/libs/lenis.jsx` — Lenis + ScrollTrigger bridge (use this path, not `src/lib/lenis.jsx`)

**Legacy reference:** There is **no** `src/app/ulti-chat/` in the app router. The old AI Studio nested app, if kept locally, lives only as **`_reference/ulti-chat/`** (typically gitignored). Do not import it into `src/`. Production chat is **`/hub/chat`** + **`POST /api/hub/chat`** — server-side keys only; no client `NEXT_PUBLIC_*` LLM keys in `src/`.

**Next.js config** (`next.config.js`): Turbopack enabled, React strict mode, remote image patterns whitelisted for `ktg.one` and `lawngreen-mallard-558077.hostingersite.com` (WordPress). Add new remote image hosts there.

**GSD planning:** Project planning lives in `.planning/` (GSD framework) — `PROJECT.md`, `ROADMAP.md`, `STATE.md`, phases, research, codebase docs. Use `/gsd:*` commands to interact with it.

## Key Conventions

- **Fonts in CSS/JSX:** Always use `font-[family-name:var(--font-syne)]` for Syne, not `font-syne` directly.
- **Color scheme:** Black background (`bg-black`), white text, cyan `#00f0ff` accent for interactive/AI elements.
- **GSAP animations:** Use `@gsap/react` hooks (`useGSAP`). All ScrollTrigger instances must be cleaned up on unmount. Prefer `will-change: transform` on animated elements.
- **Lenis:** Instantiated globally in `src/libs/lenis.jsx`; use the exported context/hook to access the instance — do not create new Lenis instances per component.
- **"use client" boundary:** Layout globals are server components; anything using GSAP, scroll, or browser APIs needs `"use client"`.
- **Lowercase styling:** UI text is styled lowercase via Tailwind — this is intentional brand convention, not a bug.

## Memory

Session memory handled by `/init-p` (see Session Boot). For ad-hoc recall: mem0 MCP with `project_id: kevinktg/ktgv2`, tag format `[YYYY-MM-DD][cc][ktgv2][R/10]`. Auto-memory index lives at `~/.claude/projects/D--projects/memory/MEMORY.md`.

## Tool Menu

- Big source reads (>200 lines) → `jcodemunch` (global) before `Read`
- Semantic codebase recall → `in-memoria` (project)
- LSP symbol nav → `serena` (project, scoped to `D:/projects/sites/ktgv2 (2)/ktgv2`)
- GSAP questions → skills `gsap-react`, `gsap-scrolltrigger`, `gsap-performance`, `awwwards-animations`
- Deploy → skill `deploy-to-vercel` or manual `git push ktg-live HEAD:main`

Default to MCP/skill over bare `Read`/`Grep` when the task involves code exploration.

## Deploy

Production repo is `ktg-one/ktgv2` via remote alias `ktg-live`. Vercel is wired to the `main` branch of that repo.

```bash
git push ktg-live HEAD:main   # triggers Vercel production build
```

`origin` (`kevinktg/ktgv2`) is kept as a reference copy only — do **not** expect pushes there to deploy.

## Environment

Required env vars (`.env.local`):
- `POSTGRES_URL` — Vercel Postgres connection string
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob token
- AI SDK keys as needed for hub features
