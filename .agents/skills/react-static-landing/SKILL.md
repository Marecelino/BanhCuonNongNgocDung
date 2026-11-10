---
name: react-static-landing
description: Builds a lightweight static React + Vite landing page with local menu data, semantic sections, reusable components, and simple deployment. Use for brochure sites that do not need backend or database features.
---

# React Static Landing Skill

## Before coding
- Inspect project structure, dependencies, and scripts.
- Confirm plan approval and read design tokens, responsive spec, and content brief.
- Do not add backend/database architecture to a static information site.

## Suggested structure
```text
src/
  assets/
  components/
  sections/
  data/
    menu.js
    restaurant.js
  styles/
  App.jsx
  main.jsx
```

## Implementation rules
- One-page sections with anchor navigation unless multiple pages are justified.
- Store menu items and verified shop details in local data files.
- Render menu data as semantic HTML text.
- Keep CTA URLs centralized in `restaurant.js` and verify destinations.
- Use CSS variables for color, spacing, typography, radius, and container width.
- Build reusable `MenuItem`, `MenuGroup`, `ContactActions`, and `SectionHeading` only if they simplify consistency.
- Use native anchor behavior; keep focus styles visible.
- Load the hero image eagerly with appropriate priority; lazy-load below-the-fold gallery images.
- Prefer optimized local AVIF/WebP and responsive `srcSet`/`sizes` when image variants are available.
- Avoid adding libraries for trivial interactions.

## Definition of done
- Exact menu content and prices verified.
- All contact links verified.
- Lint/build commands run and results reported.
- Responsive, keyboard, and accessibility checks complete.
