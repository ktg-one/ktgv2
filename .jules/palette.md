# Palette's Journal

Critical learnings on UX and accessibility will be documented here.

## 2026-03-30 - Scroll-Driven UI Accordions Need Click-to-Scroll Fallbacks
**Learning:** Scroll-driven component state (e.g. ScrollTrigger pins driving Accordion active state) can leave interactive buttons (like `<AccordionTrigger>`) non-responsive when users click or focus them via keyboard.
**Action:** Always bind `onClick` handlers on scroll-driven navigation items to calculate the target scroll offset (`st.start + fraction * distance`) and scroll smoothly (`window.scrollTo`), while retaining `focus-visible` styling for full keyboard navigation.
