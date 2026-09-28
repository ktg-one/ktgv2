# Palette's Journal

Critical learnings on UX and accessibility will be documented here.

## 2026-03-30 - Scroll-Driven UI Accordions Need Click-to-Scroll Fallbacks
**Learning:** Scroll-driven component state (e.g. ScrollTrigger pins driving Accordion active state) can leave interactive buttons (like `<AccordionTrigger>`) non-responsive when users click or focus them via keyboard.
**Action:** Always bind `onClick` handlers on scroll-driven navigation items to calculate the target scroll offset (`st.start + fraction * distance`) and scroll smoothly (`window.scrollTo`), while retaining `focus-visible` styling for full keyboard navigation.

## 2026-03-30 - Icon-Only Global Navigation Docks Need Dynamic ARIA Current State
**Learning:** Icon-only navigation docks that rely on hover tooltips and icon labels leave screen reader users without context about which link represents the current active route unless `aria-current="page"` is dynamically set on the active item.
**Action:** Always pass `aria-current={isActive ? "page" : undefined}` on navigation components that calculate active state from `usePathname()` / `hash`.
