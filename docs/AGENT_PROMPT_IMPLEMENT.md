# Agent Prompt — Implement Approved UI/UX Plan

Implement the restaurant landing page only after the user approves `docs/UI_UX_DETAILED_PLAN.md` and `docs/RESPONSIVE_SPEC.md`.

## Before coding
- Inspect current source and package scripts.
- Read `AGENTS.md`, all applicable `.agents/rules/`, all relevant `.agents/skills/`, and the approved design plan.
- Use the confirmed brand name, phone, opening time range `05:00–10:30`, and owner-provided Maps URL from `PROJECT_BRIEF.md`. Do not ask again for these details.
- Do not block implementation on missing non-critical data; keep full postal address/days/social details as null and safely hide unverified actions. Use the included image placeholders until the owner replaces them.

## Implementation phases
1. Add design tokens/global styles and semantic page skeleton.
2. Implement responsive header and hero.
3. Implement menu groups from local data and verify all names/prices/units.
4. Implement story/gallery with actual authorized images only.
5. Implement contact links and location block using verified destinations.
6. Implement mobile fixed contact dock only if validated not to obscure content.
7. Add metadata, favicon, robots and local SEO foundation.
8. Run responsive, accessibility, security, visual and performance QA.

## Constraints
- React + Vite + JavaScript only.
- Keep a static site. Do not add a backend/database or fake order process.
- Do not add dependencies without a written justification.
- Keep mobile composition purpose-built, not desktop scaled down.
- Do not make placeholder social links clickable. The supplied Google Maps URL is a real owner-provided destination and should be linked as the “Chỉ đường” action.
- Use only true claims and exact menu data. Display `05:00–10:30` without implying daily operation. Clearly keep image placeholders replaceable and mark them as temporary.

## Verification
Run available project scripts; at minimum production build. Run lint if configured. Test the viewport matrix from `docs/RESPONSIVE_SPEC.md`. Report tests actually performed and known limitations. Do not claim success for unexecuted checks.
