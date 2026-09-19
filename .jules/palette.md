# Palette's Journal

Critical learnings on UX and accessibility will be documented here.

## 2026-03-31 - Header Focus States & Nav Accessibility
**Learning:** In dark monochrome themes with floating headers, generic focus indicators can be invisible against black backdrops. Navigation controls in this design system should consistently use cyan outline rings (`focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-black`) and semantic `<nav aria-label="...">` landmarks.
**Action:** Apply the standard cyan focus ring utilities and `aria-label` navigation landmarks to top-level floating navigation elements.
