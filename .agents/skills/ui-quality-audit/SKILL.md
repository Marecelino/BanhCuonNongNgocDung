---
name: ui-quality-audit
description: Performs a final visual, responsive, accessibility, content, performance, and interaction audit of a React landing page. Use before marking a design or implementation complete.
---

# UI Quality Audit Skill

## Audit sequence
1. Compare the implementation against the approved UI/UX plan and tokens.
2. Check desktop, tablet, and phone layouts at the specified widths.
3. Verify every menu name, price, unit, phone number, and destination.
4. Verify section navigation, the exact `tel:0388506360` call link, the owner-provided Maps URL, and Zalo/Facebook destinations only if enabled.
5. Check keyboard navigation, focus visibility, contrast, heading order, alt text, and reduced motion.
6. Check image loading, layout shift, large assets, font loading, and mobile performance.
7. Run lint/build and report exact command output/status.
8. Record defects with severity, location, evidence, and recommended fix.

## Do not pass
- Any invented business claim, fake review, inaccurate price, broken CTA, horizontal overflow, obscured fixed CTA, or missing required mobile content.
- A Maps action that does not use the owner-provided URL.
- Enabled Zalo/Facebook actions whose destination has not been verified.
- Build errors or knowingly ignored lint failures.
