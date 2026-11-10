# Agent Prompt — Research + Plan Only (Do Not Code Yet)

You are the product designer, UX researcher, senior React frontend architect, and accessibility reviewer for this repository.

## Goal
Research and plan the complete UI/UX for a Vietnamese breakfast-shop landing page using the current React + Vite + JavaScript project. Follow `AGENTS.md`, `.agents/rules/`, and relevant `.agents/skills/`. Use `ui-ux-pro-max`, `frontend-design`, and `web-design-guidelines` if installed.

## Hard constraints
- Plan first; do not implement or alter UI code in this task.
- The final stack remains React + Vite + JavaScript, static site only.
- No Spring Boot, backend, REST API, SQL database, authentication, admin panel, cart, checkout, or payment in V1.
- Do not introduce Three.js. Only recommend 3D if you can identify a specific customer benefit that cannot be achieved more simply.
- Use confirmed brand `Bánh Cuốn Nóng Ngọc Dung`, confirmed physical address `353D, đường Lã Xuân Oai, phường Long Phước, Thành phố Hồ Chí Minh` (never 315), opening time `05:00–10:30`, phone `0388506360`, and Maps URL `https://maps.app.goo.gl/RoiN2qYnvUcMYCFQ6`. Do not infer opening days.
- Never invent the shop story, Facebook URL, ingredients, reviews, claims, or best sellers.
- Preserve exact menu and phone data from `docs/PROJECT_BRIEF.md`.

## Research work
1. Inspect the existing project files and dependencies.
2. Review `docs/MARKET_RESEARCH.md` and verify the reference patterns where useful.
3. Identify which conventions are suitable for a small Vietnamese breakfast shop, and which premium/restaurant patterns are unsuitable.
4. Provide at least two differentiated art directions, compare and recommend one.

## Required design deliverables
1. Product/UX brief and primary user journeys.
2. One-page information architecture and section order.
3. Desktop wireframe in text/ASCII with hierarchy and layout proportions.
4. Mobile-specific wireframe showing changed order, navigation, image crop, sticky actions, and menu rows.
5. Tablet behavior and breakpoint rules.
6. Full design tokens: colors, typography, type scale, spacing, width, borders, radii, shadows, image ratios, interaction states.
7. Menu design for the seven exact products with categories and prices.
8. Component inventory and component responsibilities.
9. Motion strategy, including reduced-motion behavior.
10. Photo/asset brief and exact missing assets required from the owner.
11. Accessibility, SEO, performance, and security criteria.
12. QA acceptance matrix and risks/blockers.

## Required output files
Update or create:
- `docs/MARKET_RESEARCH.md`
- `docs/PROJECT_BRIEF.md`
- `docs/UI_UX_DETAILED_PLAN.md`
- `docs/RESPONSIVE_SPEC.md`
- `docs/ARCHITECTURE_PLAN.md`
- `docs/SECURITY_BASELINE.md`
- `docs/QA_ACCEPTANCE_CHECKLIST.md`

## Visual quality bar
Do not settle for a generic restaurant template. Make a specific visual argument grounded in Vietnamese breakfast culture and the actual seven-item menu. Use the included local placeholder artwork for layout exploration. Do not portray it as actual food/shop photography. List required replacement shots and clearly mark all placeholders in the asset plan. Keep content readable and CTAs prominent.

## Completion response
Summarize the recommended art direction, desktop/mobile differences, plan files produced, unresolved owner inputs, and the proposed implementation sequence. Explicitly state that no UI code was changed.
