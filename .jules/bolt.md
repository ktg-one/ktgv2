## 2024-05-22 - [R3F Callback Stability]
**Learning:** Passing unstable inline callbacks to components wrapping React Three Fiber logic (like `RevealPlane`) can cause expensive resource re-loading (textures, shaders) if those callbacks are dependencies in `useEffect` hooks. This defeats the purpose of caching and causes visual glitches or wasted bandwidth.
**Action:** Always wrap callbacks passed to R3F-related components in `useCallback` to ensure stable references across renders.

## 2024-05-24 - [Static Uniform Updates in R3F]
**Learning:** Assigning static uniforms (like textures) inside the `useFrame` loop is redundant and causes unnecessary CPU overhead on every frame.
**Action:** Move static uniform updates to a `useEffect` hook that runs only when the relevant data changes, keeping the `useFrame` loop clean for only dynamic values.

## 2024-05-24 - [Package Lock Noise]
**Learning:** Running `npm install` can update `package-lock.json` even if no dependencies are added, creating noise in PRs.
**Action:** Always restore `package-lock.json` if the task does not involve dependency updates, or use `npm ci` (if appropriate for the environment) to avoid modifying the lockfile.

## 2026-04-19 - [GSAP quickSetter in High-Frequency Loops]
**Learning:** Calling `gsap.set()` inside a 60–120Hz `requestAnimationFrame` loop (e.g. for multi-element cursor trails) creates hundreds of temporary tween/timeline objects and runs property parsing on every tick, causing unnecessary CPU work and garbage collection.
**Action:** Pre-create property setters using `gsap.quickSetter(element, property, unit)` during initial component setup to bypass property parsing and object instantiation in animation loops.

## 2026-09-18 - [Duplicate Layout Background Component]
**Learning:** Fixed background components (like `GeometricBackground`) mounted in route layouts (`(intro)/layout.jsx`) will inherit to all child pages. Re-mounting them inside individual page components (`(intro)/page.jsx`) causes duplicate DOM nodes, redundant keyframe animation loops, and unnecessary paint composite layers.
**Action:** Always check parent layout structures before adding background or layout-level components to individual route pages.

## 2026-09-19 - [ScrollTrigger Scrub State Dispatch Guarding]
**Learning:** In GSAP `ScrollTrigger` pinned scrub timelines driving React UI state (like active slide/accordion step), `onUpdate` callbacks execute on every frame during scrolling (60–120Hz). Invoking React state setters unconditionally on every frame triggers React dispatch overhead and re-renders even when the calculated index hasn't changed.
**Action:** Always guard React state setter calls inside `ScrollTrigger` or high-frequency event handlers using a `useRef` tracker (`if (idx !== currentIdxRef.current)`) so state updates fire only when the active index actually changes.
