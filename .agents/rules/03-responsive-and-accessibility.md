---
trigger: model_decision
description: Apply when planning, implementing, or reviewing layouts, breakpoints, typography, navigation, or interactions across mobile, tablet, and desktop.
---

# Responsive and Accessibility Rules

- Design mobile-first, but do not merely scale down desktop. Reprioritize content and interaction per viewport.
- Test 320, 360, 390, 430, 768, 1024, 1280, and 1440 CSS px.
- Prevent horizontal scrolling, clipped labels, overlapping CTAs, and fixed bars covering content.
- Keep controls comfortably tappable; target roughly 44x44 CSS px where practical. Meet WCAG 2.2 AA requirements applicable to the page.
- Maintain visible keyboard focus, logical tab order, accessible names, image alt text, and sufficient text contrast.
- Respect `prefers-reduced-motion`; never rely on motion alone to communicate information.
- Body text should remain comfortably readable on small screens; do not solve density by shrinking text excessively.
- Mobile fixed contact controls must include bottom safe-area padding and must not obscure menu items or footer content.
