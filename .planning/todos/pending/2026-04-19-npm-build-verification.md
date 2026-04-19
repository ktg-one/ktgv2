---
created: 2026-04-19T04:30:00.000Z
title: Verify Vercel build after pnpm → npm switch
area: infra
files:
  - package.json
  - package-lock.json
  - vercel.json
---

## Problem

Commit `f227d9d` switched Vercel from pnpm to npm (deleted `pnpm-lock.yaml`, removed `installCommand` from `vercel.json`, removed `packageManager` field from `package.json`). The pre-existing `package-lock.json` was kept and will be what Vercel uses.

Risk: `package-lock.json` may be out of sync with current `package.json` dependencies (it wasn't regenerated locally because `node_modules` was in pnpm layout). Vercel may fail `npm ci` with lockfile-out-of-sync error.

## Solution

Watch the next Vercel build after `f227d9d`. If it fails:

```bash
cd "D:/projects/sites/ktgv2 (2)/ktgv2"
rm -rf node_modules
npm install                      # regenerates package-lock.json fresh
git add package-lock.json
git commit -m "chore: refresh package-lock.json for npm"
git push ktg-live HEAD:main
```

If build succeeds → no action needed.

Also: confirm in Vercel dashboard that Build & Development Settings don't have a `pnpm` leftover override (Settings → Build & Development Settings → Install Command should be empty/default, not `pnpm install ...`).

## Acceptance

- [ ] Vercel build succeeds on `main` post `f227d9d`
- [ ] Build log shows `npm install` / `npm ci`, not pnpm
- [ ] Dashboard Install Command setting is empty / default
