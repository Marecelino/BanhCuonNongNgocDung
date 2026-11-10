# Market Research — Restaurant & Breakfast Website Patterns

Research snapshot: 10 November 2026. This is a directional market/design benchmark, not a formal usability study or a competitor audit of the specific shop's neighborhood. The selected sources include restaurant design guidance, Vietnamese restaurant/site references, and visual design examples.

## 1. Observed market patterns

| Pattern | What current examples/guidance show | Application to this breakfast shop |
|---|---|---|
| Food-first hero | Restaurant examples lead with large food photography rather than a logo-only banner. | Hero should show one real, appetizing bánh cuốn or bún dish; brand mark supports but does not dominate. |
| Menu in real text | Current restaurant guidance recommends crawlable menu content with visible categories/prices rather than PDF-only or image-only menus. | Build menu from local data and HTML text; use photos selectively, not for every row. |
| Quick actions on phone | Restaurant/café pages emphasize tap-to-call, location, hours, menu and direct order actions. | Put phone and owner-provided Maps actions in the first screen or a compact sticky mobile bar; display confirmed hours `05:00–10:30`, but do not invent operating days or postal address. |
| Photo consistency | Guidance emphasizes a coherent lighting/surface/angle style and warns that stock food photos can mislead diners. | Plan a compact photo shoot with consistent light, neutral ceramic plates, close dish detail and real storefront. |
| Minimal navigation | Restaurant homepage navigation should prioritize menu, ordering/reservation and location. | One-page anchors: Menu, Câu chuyện, Hình ảnh, Liên hệ. Do not create a large nav. |
| Mobile readability | Industry guidance calls for quick menu access, large actions and fast-loading images on mobile. | Single-column menu, clear aligned prices, no tiny text/PDF, no hover-dependent content. |
| Local trust | Phone, address, location, opening hours and accurate business details help visitors decide. | Use the owner-provided Maps link and opening time `05:00–10:30`; do not print an unverified street address or infer operating days. |

## 2. Visual references observed

### A. Vietnamese food and menu references

- **Bánh Ướt Cây Me** — Vietnamese restaurant site with a visible storefront identity, product tiles, and top-level menu/navigation. Useful as a local-category reference for how a named dish brand presents menu and shop presence. Reference image/search result: https://vietcore.com.vn/banh-uot-cay-me-62.html
- **PHO24 menu** — category-oriented menu layout with photos, item labels and clear price cues. Useful for scanability, not as a layout to copy. https://www.pho-24.com/en/menu
- **La Solana all-day breakfast menu** — a breakfast menu visual showing dish photo + bilingual text/price grouping. Useful for thinking about how breakfast products are grouped. https://en.gurutto-vietnam.com/detail/6687/freepage-1.html
- **Maison Fleur Hoi An gallery** — food photography paired with concise descriptions, including bánh cuốn. Useful for photo/text balance. https://www.maisonfleurhoian.com/en/gallery
- **zMenu (Zalo)** — Vietnamese digital menu product showing that a restaurant can link QR and Zalo-based menu workflows without building its own ordering backend. This is an optional future path, not part of V1. https://zmenu.zalo.me/

### B. General restaurant website visual references

- Maido Restaurant Website design (desktop/mobile comparison): https://dribbble.com/shots/26959987-Maido-Restaurant-Website-Design
- Restaurant Landing Page UI concept: https://www.behance.net/gallery/179406457/landing-page-restaurant
- Food-first restaurant page concept: https://dribbble.com/shots/26775614-Restaurant-Landing-Page

Dribbble/Behance pieces are visual inspiration, not proof of usability or conversion. Borrow patterns such as image scale, hierarchy and desktop/mobile composition; do not copy the visual identity.

## 3. Evidence-based UX conclusions

1. Put a real food photograph, clear restaurant identity, a short food proposition, and a primary action in the initial viewport.
2. Keep the menu in HTML text with item names and prices; do not make a PDF or poster image the only menu source.
3. Make phone and address true actionable links; map/directions should open the correct location.
4. For a breakfast shop, opening hours are particularly important because customers may check very early. This shop has supplied `05:00–10:30`; the days of operation are still unknown.
5. Use a limited set of high-quality, authentic photos rather than many small thumbnails.
6. Test the real menu names and actual phone on a narrow device; long dish names must not collide with prices.
7. Avoid autoplay hero videos, modal popups, and long carousels that delay access to food, menu, and contact information.

## 4. Recommended art direction

**Modern Vietnamese breakfast — honest, warm, food-led.**

- Rice-paper light / warm neutral base.
- Deep leaf green as the primary brand color.
- Golden toasted-shallot accent for price and small highlights.
- Restrained chili-red accent for one high-value CTA or decorative micro-detail.
- Dark warm ink for text.
- Be Vietnam Pro for UI/body; optionally pair with a Vietnamese-capable display face only if legibility remains strong.
- Graphic motif: a subtle line/steam/round rice-sheet motif, not a heavy retro pattern.
- Photography: actual dishes, close-up texture, natural morning light, consistent plate/background and color balance.

## 5. Things to avoid

- A generic food-delivery app dashboard look.
- Huge logo and long story before the menu.
- Menu as a single uploaded JPG/PDF.
- Fake testimonials, fabricated star ratings, fake “fresh every day” claims, or invented opening hours.
- Excessive card shadows, gradients, floating blobs, parallax, or Three.js scenes without a clear customer benefit.
- Desktop-first composition squeezed onto mobile.

## 6. Sources

- Tableview, “Restaurant Website Design That Gets Bookings,” 4 Oct 2026: https://www.tableview.com/blog/restaurant-website-design/
- DoorDash Merchant, “220+ Restaurant Website Examples,” 5 Nov 2026: https://merchants.doordash.com/en-us/blog/restaurant-website-examples
- Uptech, Vietnamese restaurant website design guidance: https://uptech.vn/thiet-ke-website/nha-hang
- Vietnamese restaurant website/menu reference: https://vietcore.com.vn/banh-uot-cay-me-62.html
- PHO24 menu: https://www.pho-24.com/en/menu
- La Solana all-day breakfast menu: https://en.gurutto-vietnam.com/detail/6687/freepage-1.html
- Zalo zMenu: https://zmenu.zalo.me/
