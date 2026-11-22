# Open points

Things to review or finish later.

## To decide (Dmytro)
- [ ] **Portrait on mobile hero** — now shown under the text at 280×340. Remove it if the first screen feels crowded.
- [ ] **Hero on tablet** — the greeting wraps to 3 lines at 768; font reduced to 40/50 on 768–1199. Check if it looks right.
- [ ] **404 page copy** — "Page not found", "This page does not exist or has moved.", "Back to home", "See projects" are not in `CONTENT.md`. Replace if you want other wording.

## Resume (content, optional)
- [ ] Partwise is not in "Personal Projects"; Skills list differs from the site; page is 595×919, not A4 (595×842). Source: Figma file "Resume Template (Community)", frame `A4-Resume`.

## After the first deploy
- [ ] **Lighthouse** — no Chrome on this Mac, so it was not run locally. Run https://pagespeed.web.dev on the live URL (Home and one case page).
- [ ] **Social preview** — check the OG image with a link preview (Telegram, LinkedIn post inspector).

## Done
- [x] `public/resume.pdf` — exported from Figma; email typo fixed in Figma (`@email.com` → `@gmail.com`).
- [x] "View case study" buttons point to `/work/...` — Stage 2.
- [x] Visual pass at 1440 — Stage 4.
- [x] axe-core check (WCAG 2.2 AA + best practices) on all pages — Stage 4. Found 2 moderate landmark issues (hero outside `<main>`, nested `<aside>`); both fixed and checked by hand, axe not re-run.
