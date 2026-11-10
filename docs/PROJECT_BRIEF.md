# Project Brief — Breakfast Restaurant Landing Page

## 1. Project goal

Build a lightweight, mobile-first, single-page website for **Bánh Cuốn Nóng Ngọc Dung**, a Vietnamese breakfast shop. The website should help a hungry visitor quickly:

1. Understand what the shop sells.
2. Read exact menu names and prices.
3. Call the shop to order or ask questions.
4. Open the shop's verified Zalo/Facebook channel when those destinations are supplied.
5. Open the owner-provided Google Maps location link and find the shop.

## 2. Audience and context

- Primary: nearby customers browsing on a phone before or during breakfast hours.
- Secondary: customers buying bánh cuốn/bánh ướt by the kilogram.
- Context: short attention span, one-hand mobile use, likely mobile data, immediate need for menu/pricing/contact/location.

## 3. Verified menu content

| Group | Item | Price | Unit |
|---|---|---:|---|
| Món nóng | Bánh cuốn / Bánh ướt nóng | 30.000đ | — |
| Món nóng | Bún chả Hà Nội | 30.000đ | — |
| Món nóng | Bún mọc chả củ cải trắng | 30.000đ | — |
| Món nóng | Bún mọc sườn non | 40.000đ | — |
| Bán theo ký | Bánh cuốn ký | 60.000đ | 1 ký |
| Bán theo ký | Bánh ướt ký | 50.000đ | 1 ký |
| Món thêm | Chả thêm | 3.000đ | 1 miếng |

Do not infer quantity, serving size, toppings, ingredients, or bundle details not stated by the owner.

## 4. Confirmed business identity, contact and location

- Official display name: `Bánh Cuốn Nóng Ngọc Dung`
- Phone display: `0388 506 360`
- Phone link: `tel:0388506360`
- Opening time range supplied by the owner: `05:00–10:30` (5:00 AM to 10:30 AM). Days of operation have not been specified; do not imply that the shop opens every day.
- Owner-provided Google Maps link: `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`
- Use the Maps link exactly as supplied as the location/directions destination. The short link has not been used to infer or print a street address; the full postal address remains unknown.
- Proposed Zalo link: `https://zalo.me/0388506360` — verify that the number is registered and the link opens the intended business account before production.

## 5. Missing facts — must not be invented

- Logo / official brand artwork (the brand name itself is confirmed; use a typographic wordmark temporarily).
- Full street address (Maps link is supplied, but no verified postal address has been supplied in text).
- Days of operation / weekly schedule.
- Facebook page URL.
- Whether the shop offers pickup/delivery, shipping, table seating, or pre-orders.
- Real photos of dishes, shop front, preparation area, and dining space. Temporary local placeholders are included and must be replaced before launch.
- Any awards, years of operation, customer reviews, special ingredients, or quality claims.

## 6. Product scope

### In scope for V1
- One-page landing page.
- Desktop/tablet/mobile layouts.
- Hero and quick actions.
- Menu with text, categories, and prices.
- Shop introduction/story using verified content only.
- Gallery with local placeholders during development; replace them with owner-approved real photos before launch.
- Contact block, tap-to-call, opening time range `05:00–10:30`, and the owner-provided Maps link. Add Zalo/Facebook only after their real destinations are verified.
- Basic metadata and local SEO foundation.

### Out of scope for V1
- Backend, database, admin dashboard, authentication.
- Cart, checkout, payment, live order tracking.
- Table reservation system.
- Customer accounts, loyalty, chatbot, analytics tracking (unless separately approved).
- 3D product viewer or Three.js scene.

## 7. Primary success criteria

- A mobile visitor can reach menu/prices immediately.
- A mobile visitor can call with one tap.
- The menu remains readable at 320 CSS px without horizontal scrolling.
- Brand name, menu/price/contact values, opening time range, and map destination match the owner's supplied information.
- Site loads quickly on mobile data and uses actual shop photography before launch.
