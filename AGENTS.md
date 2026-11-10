# Project Agent Instructions

## Project identity
This repository is the promotional landing page for **Bánh Cuốn Nóng Ngọc Dung**, built with React + Vite + JavaScript.

## Fixed scope for version 1
- Static frontend only.
- Menu content is local data in `src/data/`.
- No Java/Spring Boot backend, REST API, SQL database, authentication, admin dashboard, cart, checkout, online payment, or order-management workflow.
- Primary user actions: view menu and prices, tap to call `0388506360`, open the owner-provided Google Maps location (`https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`), and open verified Zalo/Facebook pages when supplied.

## Non-negotiable working process
1. Inspect the existing repository and current dependencies before changing anything.
2. Research and produce the UX brief, sitemap, desktop/mobile wireframes, design tokens, component plan, and QA criteria first.
3. Do not implement UI until the user approves the plan. Do not ask again for information already supplied in the conversation or project files.
4. Separate verified facts from assumptions. Confirmed: brand name `Bánh Cuốn Nóng Ngọc Dung`, phone `0388506360`, opening time range `05:00–10:30`, and owner-provided Maps link `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`. Unknown: days of operation, full postal address, Facebook URL, real photos, official logo artwork, and verified Zalo destination. Do not infer missing details.
5. Implement in small phases. After each phase, run available lint/build checks and report exact files changed and remaining issues.
6. Keep the solution simple. Do not introduce packages or abstractions without a clear need.

## Design direction
Create a distinctive Vietnamese breakfast identity: appetizing real-food photography, confident readable typography, clear menu hierarchy, warm but restrained colors, and visible contact actions. Avoid generic restaurant-template aesthetics, excessive decorative gradients, giant carousels, autoplay media, and unnecessary 3D.

## Responsive requirement
Treat mobile, tablet, and desktop as deliberate layouts with different hierarchy and interactions. Test at 320, 360, 390, 430, 768, 1024, 1280, and 1440 CSS px. No horizontal overflow.

## Code conventions
- Functional React components and named exports where useful.
- Keep data separate from presentational components.
- Use semantic HTML and accessible names.
- Use CSS variables/design tokens; avoid scattered magic numbers.
- Use real anchors for navigation and `tel:` for phone calls.
- Avoid `dangerouslySetInnerHTML`, `eval`, and unnecessary global state.

## Before completion
Run the project's actual available lint and build scripts. Check menu data against the confirmed values. Inspect mobile and desktop layouts. Never claim a test passed if it was not run.
