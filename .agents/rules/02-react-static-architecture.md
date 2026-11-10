---
trigger: glob
globs: "src/**/*.js, src/**/*.jsx, src/**/*.css, src/**/*.json"
description: Architecture and coding constraints for the React static restaurant landing page.
---

# React Static Architecture Rules

- Inspect `package.json` and current source before choosing dependencies or editing configuration.
- Keep V1 static: React components + local data; no remote API or database abstraction.
- Keep menu/business content in `src/data/` and presentational components in `src/components/` or `src/sections/`.
- Use the simplest architecture that fits one landing page. Do not add React Router, Redux, Zustand, a UI framework, or a form library without a demonstrated requirement.
- Use reusable components only where repetition or clear responsibility justifies them.
- Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`, headings in order).
- Use anchors for navigation and external links. Use `<a href="tel:...">` for phone calls.
- Do not add a custom order flow. “Đặt món” means contact via the verified phone/Zalo route unless a real order-processing workflow is specified later.
- Do not silently alter the confirmed menu labels or prices.
