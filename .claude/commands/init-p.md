---
description: ktgv2 session boot — warm in-memoria/jcodemunch/serena, log mem0, recall project memory
---

Run these in parallel, tolerate any MCP being unattached:

1. **Log mem0** — write `session start` with tag: `[YYYY-MM-DD][cc][ktgv2][R?/10]` (ask R after the block if unknown)
2. **Warm in-memoria** — invoke its learn/index tool on `D:/projects/sites/ktgv2` if attached
3. **Index jcodemunch** — index the current project if not already indexed
4. **Confirm serena** — verify scoped to `D:/projects/sites/ktgv2` (it is, per `.mcp.json`)
5. **Recall memory** — scan `C:\Users\kevin\.claude\projects\D--projects\memory\MEMORY.md` for the one line most relevant to ktgv2 / Next.js / GSAP / Vercel

**Output format — exactly 4 lines, no preamble, no epilogue:**

```
mem0 tag:     [YYYY-MM-DD][cc][ktgv2][R?/10]
memory hit:   <one line from MEMORY.md, or "no match">
mcps live:    <comma-separated responders, or "none">
first action: <single sentence for what you're about to do>
```

Unattached MCPs: print `(skipped)` inline, move on. No apology, no narration.
After the block: if R is `R?`, ask user for the rating in a single sentence.
