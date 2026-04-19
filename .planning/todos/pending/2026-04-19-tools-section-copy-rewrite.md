---
created: 2026-04-19T04:30:00.000Z
title: Tools/Lab section copy — match Validation voice
area: copy
files:
  - src/components/ToolsSection.jsx
---

## Problem

ToolsSection currently reads as polished product marketing: heading "laboratory", subhead "Consolidated hub of techniques, experiments, and architectural patterns. Powered by Vercel AI SDK and Next.js." Per-card descriptions: "Advanced context continuation strategies and chain-of-thought optimization patterns."

This is inconsistent with the voice established in Validation (self-aware, deflationary). Also inconsistent with Kevin's framing of the site as a personal tool hub, not an agency pitch.

## Solution

**Heading candidate**: `the lab`

**Subhead candidate**: `half of these work. the other half taught me something.`

**Card rewrites** (all move from promotional to literal):
- `Prompt Engineering` → description: `mostly reading what I wrote before I sent it`
- `RAG Architectures` → `RAG` + description: `giving the model your documents. that's it.`
- `AI Playground` → description: `a chat box. it streams. that's the selling point.`

## Acceptance

- [ ] Kevin signs off on heading, subhead, each card's title + description
- [ ] Grid layout holds with shorter descriptions
- [ ] No change to hover/interaction animations
