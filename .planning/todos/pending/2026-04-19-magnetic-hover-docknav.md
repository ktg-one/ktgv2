---
created: 2026-04-19T04:30:00.000Z
title: Magnetic hover on DockNav icons
area: ui
files:
  - src/components/DockNav.jsx
---

## Problem

DockNav is functional but static — hovering does nothing special. Per `awwwards-animations` skill, magnetic cursor/button snap is one of the defining touches for Awwwards-level polish. Low effort, high perceived quality.

## Solution

Implement magnetic hover on each dock icon (not the dot cursor itself — that's CursorDot's job). Pattern from the skill:

```jsx
// MagneticButton pattern — uses refs + pointer move to translate toward cursor
const ref = useRef(null);
const [pos, setPos] = useState({ x: 0, y: 0 });
const onMove = (e) => {
  const { left, top, width, height } = ref.current.getBoundingClientRect();
  setPos({
    x: (e.clientX - left - width / 2) * 0.3,
    y: (e.clientY - top - height / 2) * 0.3,
  });
};
// animate with gsap or motion spring; reset on mouseleave
```

Strength `0.3` is a good start — tune per icon size. Reset position on `onMouseLeave`. Respect `usePrefersReducedMotion`.

## Acceptance

- [ ] Each dock icon pulls ~5-8px toward the cursor within its hover zone
- [ ] Snaps back smoothly on leave
- [ ] Disabled under prefers-reduced-motion
- [ ] No jank on rapid cursor movement across the dock
