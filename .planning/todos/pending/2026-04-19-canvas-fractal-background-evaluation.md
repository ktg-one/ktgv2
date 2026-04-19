---
created: 2026-04-19T04:30:00.000Z
title: Evaluate canvas fractal / algorithmic art background
area: ui
files:
  - src/components/GeometricBackground.jsx
---

## Problem

GeometricBackground is currently a fixed SVG/CSS grid that reacts to cursor. Works fine but is visually "LLM default" — gradient + grid. Per `awwwards-animations` skill, generative / algorithmic art backgrounds are a strong differentiator (fractals, flow fields, strange attractors, Perlin noise fields).

Not a commitment — **evaluation todo**. Need to check whether a canvas-driven background is worth the perf cost vs current SVG approach.

## Solution

Two candidates to prototype:
1. **Fractal tree (recursive canvas)** — deterministic, subtle, scales cleanly with depth
2. **Flow field (noise-driven particles)** — organic, moves on its own, more visually interesting

Build a branch prototype of one (probably fractal first — simpler perf profile) with:
- Canvas sized to fixed full viewport (behind all content)
- Low particle/line count for mobile (<=500 particles, <=8 fractal depth on mobile; 2k particles / 10 depth on desktop)
- Render loop capped at 30fps (`requestAnimationFrame` with throttle) to save battery
- Respect `prefers-reduced-motion` — static snapshot only

Compare against GeometricBackground side-by-side. If the fractal/flow version maintains 60fps on main scroll animations (Lenis + GSAP) and doesn't spike CPU, swap in. Otherwise park.

## Acceptance

- [ ] Prototype branch with one canvas background
- [ ] Perf comparison: FPS during validation section scroll, CPU %, battery impact
- [ ] prefers-reduced-motion path
- [ ] Kevin sign-off on visual direction before merge
