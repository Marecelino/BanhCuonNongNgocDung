# Asset Replacement Guide — Bánh Cuốn Nóng Ngọc Dung

## Current state

The kit includes temporary, abstract SVG placeholders in `public/images/`. They are deliberately labelled as placeholders and do not depict the shop or actual dishes. They are intended for layout and responsive testing only.

## Placeholder inventory

| Current asset | Intended real photo | Suggested framing |
|---|---|---|
| `hero-food-placeholder.svg` | Main bánh cuốn / bánh ướt dish | Landscape 4:3 or 16:9; food occupies the visual center; natural morning light |
| `dish-banh-cuon-placeholder.svg` | Bánh cuốn / bánh ướt nóng | 4:3 close/medium shot; show dish clearly |
| `dish-bun-cha-placeholder.svg` | Bún chả Hà Nội | 4:3; show the full serving and dipping bowl |
| `dish-bun-moc-placeholder.svg` | Bún mọc | 4:3; show broth and toppings clearly |
| `shop-front-placeholder.svg` | Actual storefront / signage | Landscape; include recognizable frontage, avoid private people unless permission is granted |
| `preparation-placeholder.svg` | Actual preparation scene | Landscape; only include if the owner approves the scene and claims implied by it |
| `brand-mark-placeholder.svg` | Official logo | SVG or transparent PNG, if available |

## Recommended capture and export

- Capture actual dishes from the shop; do not substitute AI or stock images for the real food.
- Use consistent natural light, color temperature, plate/background and camera angle.
- Export photographs as WebP or AVIF with a sensible JPEG fallback if the chosen pipeline requires it.
- Keep a high-quality original outside the public bundle. Do not upscale tiny photos.
- Provide width/height or CSS `aspect-ratio` to avoid layout shifts.
- Use a dedicated narrow crop for mobile only when it materially improves composition.
- Add Vietnamese alt text that accurately describes the specific photo.

## Replacement procedure

1. Copy the approved photo into `public/images/` with a descriptive name such as `hero-banh-cuon.webp`.
2. Update the matching path in `src/data/restaurant.js` (copied from `starter-data/restaurant.js`).
3. Update alt text to describe the real photo.
4. Check desktop and mobile crops, loading priority, file size and visual consistency.
5. Search for `placeholder` before release. The production build must not contain the temporary SVGs in visible sections.

## Content integrity

Do not use the placeholder caption as a customer-facing description. Never describe a stock/generated image as a real dish, a real shop interior, or an actual preparation scene.
