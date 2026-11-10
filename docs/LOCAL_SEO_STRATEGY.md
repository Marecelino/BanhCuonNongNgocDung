# Local SEO Strategy — Bánh Cuốn Nóng Ngọc Dung

## 1. Verified Business Information (NAP Consistency)

For local SEO, Name, Address, and Phone (NAP) must be strictly consistent across all web touchpoints:

- **Business Name (Name):** `Bánh Cuốn Nóng Ngọc Dung`
- **Official Physical Address (Address):**
  - **Street Address:** `353D, đường Lã Xuân Oai`
  - **Sub-district / Ward:** `Phường Long Phước`
  - **City / Region:** `Thành phố Hồ Chí Minh` (Khu vực Quận 9 cũ / TP. Thủ Đức)
  - **Country:** `VN`
  - **Full Formatted Address:** `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh.`
- **Phone Number (Phone):** `0388 506 360` (Formatted: `0388 506 360`, Link: `tel:+84388506360` / `tel:0388506360`)
- **Opening Hours:** `05:00–10:30` (Do not invent opening days or claim daily operation until verified)
- **Primary Service Category:** Quán ăn sáng gia đình (Vietnamese Breakfast Restaurant)

---

## 2. Important Google Maps Discrepancy & Resolution Plan

### A. The Discrepancy
- The existing Google Maps listing URL provided by the owner (`https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`) currently shows an outdated address:
  `315, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh`.
- **The actual physical storefront location confirmed by the owner is:**
  `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh`.

### B. SEO & Location Integrity Rules
1. **Never display 315 as the current physical address.** The public website must exclusively display the verified address: `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh`.
2. **Do not overwrite the confirmed address** with the outdated Maps listing address.
3. **Do not create a second or duplicate Google Business Profile listing.** Having two listings for the same business hurts local SEO authority and confuses customers.
4. **Record the old address (315)** strictly as historical/stale listing metadata in documentation.
5. **Retain the supplied Maps URL and iframe embed temporarily**, pending physical pin verification. Do not generate a fabricated replacement iframe URL.
6. **Owner Action Item:** The business owner must log into Google Business Profile (GBP) and update the street address from 315 to 353D, ensuring the map pin aligns precisely with the storefront on Lã Xuân Oai.

---

## 3. Local Keyword Hierarchy

The restaurant is physically located in **phường Long Phước**, on the **Lã Xuân Oai** thoroughfare. Historical assumptions regarding "Long Trường" as the primary location are deprecated and removed.

> **Honesty & Quality Principle:** Do not promise search rankings, do not invent search volumes, and do not perform keyword stuffing. Local rankings depend on genuine relevance, proximity, and citations.

### A. Primary Local Keywords (Hyper-Local — Phường Long Phước)
- `Bánh cuốn nóng Long Phước`
- `Quán ăn sáng Long Phước`
- `Bánh cuốn Long Phước`
- `Bánh ướt nóng Long Phước`

### B. Secondary Local Keywords (District / Regional — Quận 9 / TP. Thủ Đức)
- `Bánh cuốn nóng Quận 9`
- `Quán ăn sáng Quận 9`
- `Bánh cuốn Lã Xuân Oai`
- `Quán ăn sáng Lã Xuân Oai`

### C. Dish-Specific Keywords
- `Bún chả Hà Nội Long Phước`
- `Bún mọc Long Phước`
- `Bún mọc Thủ Đức`
- `Bánh cuốn ký Long Phước`
- `Bánh ướt ký Long Phước`

### D. Adjoining Areas Policy (Long Trường, etc.)
- **Long Trường** must **NOT** be used as the business's primary address or primary local keyword.
- It may only be considered as a broader contextual nearby term if genuine local relevance is established (e.g., customers traveling between Long Phước and Long Trường along Lã Xuân Oai), but never as the primary location anchor.

---

## 4. On-Page Local SEO Elements

### A. Meta Title & Description
- **Title Tag (Desktop & Mobile):**
  `Bánh Cuốn Nóng Ngọc Dung — 353D Lã Xuân Oai, Long Phước (05:00–10:30)`
- **Meta Description:**
  `Bánh Cuốn Nóng Ngọc Dung tại 353D Lã Xuân Oai, P. Long Phước, TP.HCM. Bánh cuốn, bánh ướt nóng, bún chả Hà Nội, bún mọc từ 30.000đ. Mở cửa 05:00–10:30. Hotline: 0388 506 360.`

### B. Semantic Heading Structure
- `<h1>`: `Bánh Cuốn Nóng Ngọc Dung — Bữa Sáng Nóng Hổi Tại Long Phước`
- `<h2>` (Menu): `Thực Đơn Điểm Tâm Sáng`
- `<h2>` (Contact & Location): `Địa Điểm & Liên Hệ — 353D Lã Xuân Oai, Phường Long Phước`

### C. Local Business Structured Data (JSON-LD)
Structured data must reflect verified facts only, without fabricated coordinates:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Bánh Cuốn Nóng Ngọc Dung",
  "telephone": "+84388506360",
  "hasMap": "https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "353D, đường Lã Xuân Oai",
    "addressLocality": "Phường Long Phước",
    "addressRegion": "Thành phố Hồ Chí Minh",
    "addressCountry": "VN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "opens": "05:00",
      "closes": "10:30"
    }
  ],
  "servesCuisine": "Vietnamese",
  "priceRange": "30.000đ - 60.000đ"
}
```

> **Note on Geographic Coordinates (`geo`):** Do not publish fabricated latitude/longitude in the JSON-LD schema. Geo coordinates should only be populated after the owner confirms the exact storefront pin on Google Maps.

---

## 5. Local Citation & Verification Roadmap

1. **Phase 1 (Immediate — Site Documentation & Code Ready):**
   - Use `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh` across all site components (Footer, ContactSection, Structured Data).
   - Retain existing Maps iframe and navigation URL with documentation of pending pin review.
2. **Phase 2 (Owner Action on Google Business Profile):**
   - Owner logs into Google Business Profile and edits the address: changes 315 to 353D.
   - Adjusts the map pin directly onto the storefront of 353D Lã Xuân Oai.
   - Verifies phone number `0388 506 360` and breakfast opening hours `05:00–10:30`.
3. **Phase 3 (Post-Verification Update):**
   - Retrieve updated Google Maps share link and embed iframe if Google regenerates them.
   - Extract verified latitude/longitude coordinates and add `geo: { latitude, longitude }` to the JSON-LD structured data.

