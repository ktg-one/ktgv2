---
created: 2026-04-19T04:30:00.000Z
title: Philosophy section copy — self-aware rewrite
area: copy
files:
  - src/components/PhilosophySection.jsx
---

## Problem

Current Philosophy copy is in LLM thought-leader voice — "synthesis over specialization", "Don't just evaluate... collaborate.", "Each domain taught a different dimension of problem-solving." Kevin's explicit feedback: "i cant see the text animations on the vercel one" and "everything on there right now is thought leader words, linkedin would eat u p".

## Solution

Rewrite Philosophy in the site's established "literal + deadpan kicker" voice (see Validation rewrite in `ValidationSection.jsx` for reference). Voice rules:
- Strip LinkedIn lexicon (no `synthesis`, `converge`, `dimension of problem-solving`, `PRINCIPLE 01/02/03` triads)
- Literal description + 1-2 word flat kicker
- Typos / lowercase / ungrammatical phrasing stay in as voice

**Candidate heading** (three-line structure to match current SplitText animations):
`seven jobs / none stuck / here I am`

**Candidate body paragraphs** (drafts — Kevin to approve):
- "I've been a pilot, a sound engineer, a property guy, a teacher, and a few things I'd rather not put on a website. Got bored of each one."
- "AI is the first one that hasn't bored me yet. Probably because it's seven jobs at once."

**Candidate quotes** (replacing Principle 01/02/03):
- `"prompt engineering" is mostly reading what you wrote before hitting send`
- `the process is: make a thing, look at it, fix it. that's it.`
- `every model has a personality. people still don't believe me.`

Kevin called my first rewrite attempts "trying too hard" — avoid setup-punchline structure, just literal statements that undercut themselves.

## Acceptance

- [ ] Kevin signs off on specific copy strings
- [ ] Updated `data` object in `PhilosophySection.jsx`
- [ ] Char-stagger animations still fire correctly with new line lengths
