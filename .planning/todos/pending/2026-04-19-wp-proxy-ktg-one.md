---
created: 2026-04-19T04:30:00.000Z
title: Wire WordPress proxy at ktg.one/wp (blocker for Phase 2)
area: infra
files:
  - next.config.js
  - src/lib/wordpress.js
  - CLAUDE.md
---

## Problem

Kevin mentioned "we tricked hostinger backend so it should just be from ktg.one/wp" — intent is to proxy the WordPress REST API through the primary domain so the blog hits `https://ktg.one/wp/wp-json/...` instead of `lawngreen-mallard-558077.hostingersite.com`.

Current state (2026-04-19 probes):
- `ktg.one/*` paths return 000 or 403 (no proxy exists)
- `www.ktg.one/wp-json/wp/v2` returns 403 (Vercel rejecting unknown API paths)
- Hostinger URL still returns 200 and is the only working source
- Code reverted to hostinger URL to keep the blog live

Without the proxy, Phase 2 (WP blog) works functionally but leaks the hostinger subdomain to the browser (bad for branding + SEO for blog).

## Solution

Two options:

**A. Vercel rewrite (preferred, no extra infra)**
Add a rewrite rule in `next.config.js`:
```js
async rewrites() {
  return [
    {
      source: '/wp/:path*',
      destination: 'https://lawngreen-mallard-558077.hostingersite.com/:path*',
    },
  ];
}
```
Then `NEXT_PUBLIC_WORDPRESS_URL=https://ktg.one/wp` works. Caveat: Vercel rewrites proxy server-side, so SSR blog fetches go through Vercel's edge → fine. Client-side image URLs may still reference hostinger though (WP embeds them that way); need to verify featured images work.

**B. Cloudflare Workers / external proxy**
More flexible (headers, caching) but more infra. Probably overkill for a personal site.

Recommend **Option A**. Implementation + test:
1. Add rewrite to `next.config.js`
2. Set env var on Vercel dashboard: `NEXT_PUBLIC_WORDPRESS_URL=https://ktg.one/wp`
3. Deploy, verify `/blog` list + `/blog/[slug]` detail load via the proxy
4. Confirm featured images render (may need additional `/wp-content/` rewrite if hostinger URLs are embedded in post HTML)
5. Update CLAUDE.md reference

## Acceptance

- [ ] `curl https://ktg.one/wp/wp-json/wp/v2/posts` returns 200 + JSON
- [ ] `/blog` page renders posts without visible hostinger URLs in network tab (for API calls)
- [ ] Featured images still load (may need separate handling)
- [ ] `NEXT_PUBLIC_WORDPRESS_URL` set in Vercel env

## Related

- Blocks: Phase 2 completion (ideally)
- Side: could enable later move OFF Hostinger entirely (swap destination) without code changes
