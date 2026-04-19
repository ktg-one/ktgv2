---
created: 2026-04-19T04:30:00.000Z
title: Image reveal animation on BlogPreview cards
area: ui
files:
  - src/components/BlogPreview.jsx
---

## Problem

BlogPreview was just restored to the homepage (replacing dead ContactCTA). Tiles render but have no reveal animation — they just appear when scrolled into view. Per awwwards-animations skill, clip-path + scale reveal is a signature pattern.

## Solution

Add GSAP clip-path reveal per tile as it enters viewport:

```js
gsap.from('.blog-tile', {
  clipPath: 'inset(100% 0% 0% 0%)',
  duration: 1.2,
  ease: 'power4.inOut',
  stagger: 0.15,
  scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
});
gsap.from('.blog-tile img', {
  scale: 1.3,
  duration: 1.5,
  ease: 'power2.out',
  stagger: 0.15,
  scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
});
```

Respect `usePrefersReducedMotion` — skip the animation entirely and just show the final state.

## Acceptance

- [ ] Tiles reveal top-down with clip-path when scrolled into view
- [ ] Featured images scale from 1.3 to 1.0 during reveal
- [ ] Stagger between tiles (~0.15s)
- [ ] No animation under prefers-reduced-motion; final state visible immediately
- [ ] No CLS / layout shift
