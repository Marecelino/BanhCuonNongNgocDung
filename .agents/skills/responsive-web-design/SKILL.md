---
name: responsive-web-design
description: Designs, implements, and audits responsive web layouts for React websites across phone, tablet, laptop, and desktop. Use for mobile-first landing pages and responsive redesigns.
---

# Responsive Web Design Skill

## Required approach
1. Start from content hierarchy and user tasks, not a desktop screenshot.
2. Define mobile, tablet, and desktop compositions separately.
3. Use content-driven breakpoints; do not assume one universal device width.
4. Specify layout, type scale, image crop, navigation, CTA behavior, spacing, and fixed elements at each range.
5. Validate real content, including the longest menu title and all price units.

## Restaurant-specific responsive behavior
- Mobile: compact brand header; concise hero; one-column menu; prices remain right aligned; prominent tap-to-call and “Chỉ đường” action using the supplied Google Maps URL; show Zalo only after the destination is verified; fixed bottom contact dock only if it does not cover content.
- Tablet: use a two-column hero only when sufficient width; menu may become two columns; keep action buttons visible.
- Desktop: wider hero with copy and food photography; menu arranged in a calm grid/list; primary navigation visible; contact details and map are easy to find.
- The mobile menu should not require hover. No hover-only information.

## Breakpoint starting points
- 320–639: phones, one-column layout.
- 640–767: large phones/small tablets, mostly one column with more breathing room.
- 768–1023: tablets, selective two-column layouts.
- 1024–1279: laptop/compact desktop.
- 1280+: wide desktop with constrained content width.

These are starting points, not device categories that every component must obey. Adjust based on content fit.

## Validation matrix
Test 320, 360, 390, 430, 768, 1024, 1280, and 1440 CSS px. Check portrait and landscape where relevant, keyboard use, zoom, and reduced motion.

## Anti-patterns
- Desktop shrunk into narrow columns.
- Tiny navigation labels or prices.
- Horizontal overflow or clipped cards.
- Fixed CTA covering prices/footer.
- Hover-only menus, tiny icon-only buttons, autoplay carousels, and unbounded text lines.
