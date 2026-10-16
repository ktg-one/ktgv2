# Palette's Journal

Critical learnings on UX and accessibility will be documented here.

## 2026-03-30 - Scroll-Driven UI Accordions Need Click-to-Scroll Fallbacks
**Learning:** Scroll-driven component state (e.g. ScrollTrigger pins driving Accordion active state) can leave interactive buttons (like `<AccordionTrigger>`) non-responsive when users click or focus them via keyboard.
**Action:** Always bind `onClick` handlers on scroll-driven navigation items to calculate the target scroll offset (`st.start + fraction * distance`) and scroll smoothly (`window.scrollTo`), while retaining `focus-visible` styling for full keyboard navigation.

## 2026-03-31 - Card Wrapper Focus Indicators and Hover Grouping
**Learning:** Next.js `<Link>` elements wrapping card components in dark themes lack visible focus indicators by default. Additionally, child hover classes like `hover:border-...` fail to trigger when hovering non-border areas of the link unless converted to `group-hover:`.
**Action:** Apply `rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black` to parent `<Link>` elements, and use `group-hover:` on child card borders for consistent keyboard accessibility and hover feedback.
