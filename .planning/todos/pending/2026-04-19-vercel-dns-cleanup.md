---
created: 2026-04-19T04:30:00.000Z
title: Remove orphan A record 46.202.186.91 from Vercel DNS
area: infra
files: []
---

## Problem

`nslookup ktg.one` returns TWO A records:
- `216.150.1.1` → Vercel edge ✓
- `46.202.186.91` → unknown PHP server (not current Hostinger WP; responds to Host header for `lawngreen-mallard-558077.hostingersite.com` but isn't the active backend)

DNS round-robin sends ~50% of apex requests to the orphan IP, which doesn't serve the Vercel app → flaky access to bare `ktg.one`.

Nameservers are delegated to Vercel (`ns1.vercel-dns.com`), so the orphan record is in Vercel's DNS store, not GoDaddy.

## Solution

In Vercel dashboard:
1. Account/team → Domains → `ktg.one`
2. Open DNS Records panel for the domain
3. Locate the A record with value `46.202.186.91`
4. Delete it
5. Verify: `nslookup ktg.one` should return only the Vercel IP

Also worth doing as part of the same pass:
- Confirm `ktg.one` is added to the `ktgv2` Vercel project's Domains list (apex, not just www)
- Decide canonical: apex (`ktg.one`) vs www (`www.ktg.one`). Currently apex redirects to www; flipping to "www redirects to apex" is usually cleaner for branding

## Acceptance

- [ ] `nslookup ktg.one` returns exactly one A record pointing to Vercel
- [ ] `curl https://ktg.one` returns 200 (or 301 to chosen canonical) every time
- [ ] Apex + www both live in Vercel project Domains
- [ ] Redirect direction chosen and applied
