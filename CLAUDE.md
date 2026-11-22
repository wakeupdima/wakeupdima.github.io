# Dmytro Zaichenko — portfolio site

Personal portfolio of a junior UI/UX designer (Kyiv). The design is finished in Figma; this repo turns it into a static website.

## Source of truth
- Figma file: https://www.figma.com/design/1rhI9vSwmUJm3bpOt74s6J/Portfolio
  - `02 Design System` — tokens, text styles, components and all their states
  - `03 Home` — frame `Home v2` (node 7:138)
  - `08 About` — frame `About` (node 51:199)
  - `04 Case · SubTrack` (42:3), `05 Case · Partwise` (47:3), `06 Case · Vortex` (46:3), `07 Case · Motionly` (45:3)
  - `09 Export · assets` — every image/icon the site needs, with export settings
- Specs: `docs/DESIGN.md` (layout, components, states, responsive rules)
- Copy: `docs/CONTENT.md` — use the text exactly as written there, do not rewrite it
- Assets: `docs/ASSETS.md`
- Tokens: `src/styles/tokens.css`

If the Figma MCP server is connected, use it (`get_design_context`, `get_screenshot` on the node IDs above) to check details. The docs win over guesses; Figma wins over the docs if they disagree.

## Stack
- Astro (static output), plain CSS with the custom properties from `tokens.css`, small vanilla JS for the carousel, the contact dialog and the case-page contents. No UI framework, no Tailwind.
- Fonts: Space Grotesk (400/500/700) and Geist Mono (400/600), self-hosted via `@fontsource`.
- Images: `astro:assets` (`<Image>`), WebP/AVIF output, `loading="lazy"` below the fold, explicit width/height.
- Deploy: GitHub Pages (GitHub Actions). Owner: `wakeupdima`.

## Routes
- `/` — Home
- `/about` — About
- `/work/subtrack`, `/work/partwise`, `/work/vortex`, `/work/motionly` — case studies (one shared layout, content from data files)
- `/resume.pdf` — file in `public/` (not provided yet, keep the link)

## Rules
- Language of the site: English.
- Copy: plain, short, no emoji, no marketing filler. Do not add text that is not in `docs/CONTENT.md`.
- No small "eyebrow" labels above headings (e.g. "01 — Selected work").
- Minimal style: radii 4 / 8 / 12 only, 1px borders, no pill shapes.
- Use tokens, never raw hex values in components.
- Accessibility: WCAG 2.2 AA. Visible focus (`:focus-visible`), keyboard support for the carousel and dialog, alt text on every content image, `prefers-reduced-motion` respected.
- Desktop design is 1440 wide with a 1200 container. Mobile and tablet were not drawn — follow the responsive rules in `docs/DESIGN.md` and show them to Dmytro for review.

## Open points
`docs/TODO.md` lists decisions and missing pieces left for later. Read it at the start of each stage and update it when something is resolved.
