# Vercel Deployment Plan — Bánh Cuốn Nóng Ngọc Dung

> [!NOTE]
> Prepared: 2026-11-10 | Status: **Deployment-ready** (lint ✅, build ✅)

---

## 1. Repository Inspection Report

| Property | Value |
|---|---|
| Git Provider | GitHub |
| Repository | `Marecelino/BanhCuonNongNgocDung` |
| Remote URL | `https://github.com/Marecelino/BanhCuonNongNgocDung.git` |
| Default / Production Branch | `main` |
| Total branches | 1 (`main`) |
| Total commits | 5 |
| Latest commit | `7a41e86 add pics menu` |
| Working tree at plan time | Clean (no uncommitted changes) |
| Project root | Repository root (`.`) — `package.json` at root |
| Framework | React 19.3.1 + Vite 8.3.7 |
| Node.js (local) | 20.19.0 |
| npm (local) | 10.9.9 |

**No secrets or environment variables** are present in the repository. The project is a fully static frontend — no `.env`, no API keys, no backend credentials required.

---

## 2. Confirmed Production Branch

**Branch:** `main`

All pushes to `main` trigger a Vercel production deployment. There are no other branches; the owner should adopt a `feature/*` → PR → `main` workflow to avoid unreviewed changes reaching production on every push.

---

## 3. Vercel Build Settings

| Setting | Value | Reason |
|---|---|---|
| Framework Preset | **Vite** | Auto-detected via `vite.config.js` at repo root |
| Root Directory | `.` (blank) | `package.json` is at repo root |
| Install Command | `npm ci` | Reproducible installs from `package-lock.json` |
| Build Command | `npm run build` | Calls `vite build`; outputs `dist/` |
| Output Directory | `dist` | Vite default; not overridden in `vite.config.js` |
| Node.js Version | **20.x** | Matches local Node 20.19.0 |

> [!IMPORTANT]
> Use `npm ci` (not `npm install`) on Vercel. It respects the lockfile exactly, preventing accidental dependency upgrades.

---

## 4. Git Auto-Deployment Strategy

**Approach: Native Vercel Git Integration** — no GitHub Actions CI/CD file needed.

| Event | Vercel behavior |
|---|---|
| Push to `main` | ✅ Production deployment (live URL) |
| Push to `feature/*` or any PR | ✅ Preview deployment (unique preview URL) |
| Merged PR to `main` | ✅ Triggers production deployment automatically |

Vercel polls the connected GitHub repository. Each deployment is immutable and versioned; rollback is instant via the Dashboard.

> [!TIP]
> The owner currently pushes directly to `main`. This is high-risk — a broken push goes straight to production. Recommend creating `feature/` branches for future changes.

---

## 5. Preview vs. Production Workflow

```
Local development
       │
       ▼
  git push feature/xyz
       │
       ▼
  Vercel Preview URL
  (safe, isolated, shareable)
       │
       ▼
  Merge PR → main
       │
       ▼
  Vercel Production Deployment
  (live at production domain)
```

---

## 6. Security Assessment

| Check | Status |
|---|---|
| No secrets in source | ✅ Verified — no `.env` files, no API keys |
| No environment variables needed | ✅ Fully static frontend |
| HTTPS enforced | ✅ Vercel enforces HTTPS automatically on all deployments |
| Security headers | ✅ Configured in `vercel.json` |
| CSP covers Google Maps embed | ✅ `frame-src https://www.google.com` |
| CSP covers Icons8 Zalo icon | ✅ `img-src ... https://img.icons8.com` |
| `X-Frame-Options: DENY` | ✅ Prevents the site from being embedded in iframes |
| `X-Content-Type-Options: nosniff` | ✅ Prevents MIME sniffing |
| `Referrer-Policy` | ✅ `strict-origin-when-cross-origin` |
| `Permissions-Policy` | ✅ Disables camera, microphone, geolocation |

> [!CAUTION]
> `unsafe-inline` is set for `script-src` and `style-src`. This is currently necessary because Vite injects inline scripts and styles during build. After deployment, audit whether a stricter CSP is achievable with a nonce-based approach. For a static landing page with no user data, the current CSP is acceptable.

---

## 7. Configuration Changes — Already Prepared in Repository

### `vercel.json` (new file at repo root)

Provides security headers and an SPA fallback rewrite rule. Vercel auto-detects Vite and sets build settings; `vercel.json` is only used here for headers and rewrites that Vercel cannot infer automatically.

### `src/data/menu.js` (fixed)

Removed 22 `no-dupe-keys` ESLint errors caused by accumulated duplicate object properties from two separate agent sessions. The file now has a single authoritative value per key.

---

## 8. Manual Steps — Required Owner Action

> [!IMPORTANT]
> The following steps require the **restaurant owner (Marecelino)** to perform manually in a browser. See `docs/VERCEL_SETUP_GUIDE.md` for a step-by-step walkthrough with screenshots guidance.

1. **Sign in to Vercel** at [vercel.com](https://vercel.com) (create an account if needed).
2. **Connect GitHub account** to Vercel via OAuth.
3. **Import repository** `Marecelino/BanhCuonNongNgocDung`.
4. **Confirm build settings** (auto-detected from `vite.config.js`):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`
   - Node.js Version: 20.x
5. **Click Deploy**.
6. **Verify the production URL** (e.g., `banhcuon-ngoc-dung.vercel.app`).
7. **Custom domain** (if purchased): Add `banhcuonngocdung.vn` in Vercel Dashboard → Domains → follow DNS instructions.

---

## 9. Post-Deployment Checklist

See `docs/DEPLOYMENT_CHECKLIST.md` for the full verification checklist.

**Critical items:**
- [ ] Production URL loads without errors
- [ ] All 5 menu food images display on mobile and desktop
- [ ] Google Maps embed shows the restaurant location
- [ ] Tap-to-call (`tel:0388506360`) works on mobile
- [ ] Google Maps navigation link opens the owner-provided destination
- [ ] No horizontal overflow at 320px viewport width
- [ ] Lighthouse mobile performance ≥ 85

---

## 10. Rollback Procedure

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select the project
3. Click **Deployments**
4. Find the last known-good deployment
5. Click the three-dot menu → **Redeploy**

Vercel keeps all past deployments permanently — rollback is instant, no code change required.

---

## 11. Deployment Readiness Assessment

| Item | Status |
|---|---|
| `npm run lint` | ✅ 0 errors |
| `npm run build` | ✅ Builds successfully (655 ms) |
| All menu food images committed | ✅ 5 WebP images + thumbnails + PNG fallbacks |
| `vercel.json` with security headers | ✅ Created |
| No secrets in repo | ✅ Confirmed |
| No environment variables needed | ✅ Confirmed |
| `package-lock.json` committed | ✅ Present |
| `.gitignore` excludes `dist/` and `node_modules/` | ✅ Confirmed |
| Zalo button conditional on `zaloUrl` | ✅ Not displayed until verified |
| Unconfirmed menu items flagged with TODO | ✅ `Chả lụa`, `Chả Quế Chiên`, item name `Topping thêm` |

> [!WARNING]
> Large PNG source files are committed to the repository (`Bánh cuốn.png` = 7.65 MB, `Bún mọc sườn non.png` = 7.88 MB, etc.). These inflate the Git repository and Vercel build cache. The optimized WebP files are used in production; the PNGs are PNG fallbacks or originals. Consider using Git LFS for large binary assets in future projects.

