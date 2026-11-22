# Prompts for Claude Code — step by step

Send one stage at a time. Move to the next stage only after you have checked the result in the browser (desktop and phone width) and asked for fixes. Start every new stage in the same project folder; a new chat is fine — CLAUDE.md is read automatically.

---

## Stage 1 — Setup and Home

Read CLAUDE.md and everything in docs/. In this stage build only the foundation and the Home page.

1. Set up Astro, self-hosted fonts, src/styles/tokens.css and base styles.
2. Shared layout: nav, footer and the "Let's talk" contact dialog (DESIGN.md sections 2 and 4).
3. Home page: hero, project carousel, Skills and tools (DESIGN.md 3.1). "View case study" buttons can link to /work/<slug> even though those pages don't exist yet.
4. Responsive rules (DESIGN.md section 5) and the accessibility checklist for everything built in this stage.

Show me the plan first. Use the copy from docs/CONTENT.md exactly. Don't build About or the case pages yet. If something is unclear, ask me.

---

## Stage 2 — Case studies

Read CLAUDE.md and docs/. Home is already built — reuse its layout, components and styles, don't duplicate them.

Build the case study layout (DESIGN.md 3.3): hero with meta, sticky Contents sidebar with the active section highlighted, sections, end block with "Next project", footer. Then create the four pages /work/subtrack, /work/partwise, /work/vortex, /work/motionly from data files, with the content from docs/CONTENT.md. Include the responsive rules and accessibility checks for these pages. Check that the carousel buttons on Home now open the right cases.

---

## Stage 3 — About

Read CLAUDE.md and docs/. Home and the case pages are done — reuse the existing components (nav with About active, Skills and tools section, footer, contact dialog).

Build /about (DESIGN.md 3.2) with the copy from docs/CONTENT.md, including the responsive version.

---

## Stage 4 — Final check and deploy

Read CLAUDE.md and docs/. All pages are built.

1. Go through every page at 1440, 1024, 768 and 390 wide and fix layout problems.
2. Run the accessibility checklist (DESIGN.md section 6) and a Lighthouse check; fix what fails.
3. Add page titles, meta descriptions, OG images, favicon (the "DZ" mark), and a 404 page in the site style.
4. Set up deploy to GitHub Pages with GitHub Actions and tell me what I need to do in the GitHub settings.
