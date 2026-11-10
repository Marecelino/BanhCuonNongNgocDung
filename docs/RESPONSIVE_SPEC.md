# Responsive Specification

## 1. Responsive strategy

Mobile is the primary decision surface, not a secondary breakpoint. A breakfast visitor is likely checking the page while moving, outside, or using one hand. The design should expose menu, prices and contact without zooming or navigating through multiple pages.

## 2. Viewport matrix

| Width | Layout behavior | Header/navigation | Hero | Menu | Contact |
|---:|---|---|---|---|---|
| 320–359 | Narrow phone | Compact brand + icon menu; keep call target visible | Stack; short headline; image below copy | One column; longest names wrap | Two clear actions; no crowded labels |
| 360–639 | Standard phone | Compact header; anchor drawer or short nav | Stack; action above fold if practical | One column; price aligned right | Optional sticky bottom call/Maps bar |
| 640–767 | Large phone/small tablet | Compact/full nav depending fit | Stack or 60/40 split only if readable | One column or two sections stacked | Full-width or side-by-side CTA |
| 768–1023 | Tablet | Full nav if it fits; otherwise menu toggle | Two-column hero | Two columns where names remain readable | Contact panel + map/location block |
| 1024–1279 | Laptop | Full horizontal nav | Two-column editorial hero | Balanced menu grid/list | Contact details and map side-by-side |
| 1280–1440+ | Desktop | Full nav and phone CTA | Constrained content width; large image | Two-column sections; no overly wide text lines | Spacious contact section |

Breakpoints are starting points; adapt components when content no longer fits.

## 3. Mobile composition — deliberately different

### Header
- Height compact; logo/name and one accessible menu control.
- Use an anchor drawer or short nav only if needed; one-page landing may use a direct “Menu” jump instead of a hamburger.
- Avoid duplicate CTAs in every row.

### Hero
- Priority order: food/shop identity → what is sold → call action → hero photo → menu shortcut.
- Use a vertical/square image crop distinct from desktop crop.
- Ensure heading does not cover the food subject or shrink to unreadable size.

### Menu
- One column, no side-by-side price collisions.
- Place units with prices in a consistent right-hand column; allow the dish title to wrap.
- No carousel for only seven items.
- Keep category titles visible while scrolling; optional sticky category chips only if they do not crowd the top.

### Sticky contact dock
- Consider two actions: `Gọi đặt món` and `Chỉ đường` using the supplied Google Maps link. Zalo can replace/add as a secondary action only after the account destination is verified.
- Use a minimum practical touch size around 44 CSS px; respect `env(safe-area-inset-bottom)`.
- Add page bottom padding equal to dock height plus safe-area inset.
- Do not show the Zalo action until the destination is verified.
- Show the time range `05:00–10:30` without assuming any operating days.
- Hide or simplify the dock when it overlaps forms/other critical UI (V1 should not need a form).

### Gallery
- Single column or horizontal swipe only if there is a strong benefit. Ensure scroll is still obvious.
- Do not auto-advance a carousel.

## 4. Tablet composition

- Use two-column hero only if headline and CTA maintain readable widths.
- Menu can become 2 columns; long names must retain the full row width or wrap cleanly.
- Do not stretch phone CTAs across the entire tablet width without reason.

## 5. Desktop composition

- Main content max width approximately 1120–1200px.
- Hero can use a 5/7 or 6/6 split; exact ratio depends on photograph crop.
- Menu group can use a two-column editorial composition.
- Add more whitespace and image scale, not more navigation complexity.
- Do not make text lines excessively long.

## 6. Typography and content behavior

- Body copy: aim 16–18px; menu rows at least 16px on mobile.
- Use fluid display sizing (`clamp`) for headings, but define sensible min/max values.
- Prices use tabular numerals if available and consistent formatting.
- Long item: “Bún mọc chả củ cải trắng” must wrap naturally without truncation.
- Avoid text inside images; preserve copy as actual HTML text.

## 7. Media and performance

- Use separate desktop/mobile crops only if the subject composition requires it.
- Use AVIF/WebP with fallbacks when supported by the current asset pipeline.
- Reserve image dimensions/aspect ratio to reduce layout shifts.
- Hero image should be prioritized; below-the-fold gallery can lazy load.
- No autoplay video or WebGL/Three.js in V1.

## 8. Responsive QA widths

Required: 320, 360, 390, 430, 768, 1024, 1280, 1440 CSS px.

For each width verify: no horizontal overflow, no clipped nav, no text/price collision, no overlapping CTA, adequate contrast, visible focus and usable tap targets.
