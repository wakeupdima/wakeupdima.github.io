# Design spec

Desktop frame: 1440 wide. Container: 1200, side padding 120. All values are px at 1440 unless noted. Tokens: `src/styles/tokens.css`.

## 1. Foundations

### Typography (Figma text styles)
| Style | Font | Size / line | Tracking | Use |
|---|---|---|---|---|
| Display | Space Grotesk Bold | 88/88 | -3% | Page titles ("About me", case title) |
| H2 | Space Grotesk Bold | 56/58 | -3% | Section titles ("My projects", "Skills and tools") |
| H2 case | Space Grotesk Bold | 40/44 | -3% | Section titles inside case pages, About card heading (40/48) |
| H3 | Space Grotesk Bold | 32/36 | -2% | Footer column titles, modal title |
| Intro | Space Grotesk Medium | 48/60 | -2% | Hero greeting |
| Lead | Space Grotesk Regular | 20/30 | 0 | About paragraphs (85% opacity) |
| Case text | Space Grotesk Regular | 18/28 | 0 | Case section paragraphs |
| Body | Space Grotesk Regular | 16/24 | 0 | Default text |
| Button | Space Grotesk Bold | 15/20 | 0 | Buttons, nav links (nav links: Medium) |
| Label | Geist Mono Regular | 13/16 | 8%, UPPERCASE | Meta lines, case meta labels |
| Label Strong | Geist Mono SemiBold | 13/16 | 8%, UPPERCASE | |

Text colors: headings `--color-primary` (blue) on light backgrounds, body `--color-secondary` (navy). On the hero: white and `--color-surface`.

### Color roles
- Page background `--color-bg`; cards and panels `--color-white` with 1px `--color-line` border.
- Primary actions blue (`--color-primary`) with white text.
- Orange `--color-accent` is decorative only (Paper tool tile, one skill book). Do not use it for actions.
- Footer background navy `--color-secondary`.

### Radius
4 (tags, skill books, small images), 8 (buttons, nav links, icon buttons, inputs, list items), 12 (cards, panels, nav bar, photos, modal), 16 (case cover and case images, carousel center card).

## 2. Components and states
All states exist in Figma on `02 Design System`. Transitions: color/background/border/shadow `var(--dur-base) var(--ease-out)`.

**Button** — height 48, padding 14×24, radius 8, Button text style, optional trailing "↗" for external links.
| Type | Default | Hover | Focus-visible | Disabled |
|---|---|---|---|---|
| Primary (orange, navy text) — not used on the site now, keep in system | `--color-accent` | `--color-accent-hover` | focus ring | bg surface, text #6B6F7A |
| Secondary (main CTA) | bg primary, white text | bg primary-hover | `--focus-ring` | — |
| Ghost | 1px primary border, primary text | + primary 8% fill | `--focus-ring` | — |
| On Dark | white bg, navy text | surface bg | `--focus-ring` | — |

**Nav** (compact, used on every page) — white bar, radius 12, padding 6/6/6/16, gap 32, centered at top (24 from top), height 52.
- Logo: 24×24 mark (blue square, "DZ") + "Dmytro" (Medium 15). Links to `/`.
- Links: Work (`/#work`), About (`/about`), Resume (`/resume.pdf`, new tab).
- Nav Link states: Default (transparent, navy, Medium 15, padding 10×12, radius 8) · Hover (bg `--color-bg`) · Active/current page (bg `--color-bg`, text primary, Bold) — set `aria-current="page"`.
- CTA: Secondary button "Let's talk" (height 40, padding 10×16) → opens the Contact dialog.
- Nav is not sticky in the design. On the hero it sits over the image.

**Icon Button** — 44×44 (48×48 in the hero), radius 8, icon 20.
- Light: white bg, 1px line border → Hover: bg `--color-bg`, border primary.
- On Dark: transparent, 1px white border → Hover: white 12% fill.
- Needs `aria-label`.

**Text Link** — Light: navy → Hover: primary + underline. On Dark (footer): white 75% → 100% + underline.

**Tag** — Geist Mono label in a radius-4 chip (Filled navy / Outline). Not used on pages right now.

**Project Preview card** — image with radius 16. Hover: `--shadow-card-hover` + `translateY(-4px)`.

**Contact Option** — row 64 high, padding 12/16/12/12, radius 8, 1px line border, gap 16: icon box 40×40 (radius 8, bg `--color-bg`, icon 20), label (Medium 16) + value (Geist Mono 13, 60% opacity), trailing arrow-up-right (40% opacity). Hover: bg `--color-bg`, border primary, arrow 100%.

## 3. Pages

### 3.1 Home (`/`)

**Hero** — full width, 720 high.
- Background: `home/hero-bg` (dithered landscape, 1440×900) as cover, positioned so the image is shifted up 90px (`object-position: center 40%` or similar — match Figma). Pixel art: `image-rendering: pixelated` if scaled.
- Two scrims on top of the image:
  1. Left→right linear gradient of `--color-hero-ink`: 0% → 0.90 alpha, 45% → 0.82, 66% → 0.30, 80% → 0.
  2. Top→bottom: 0% → 0.55, 18% → 0, 80% → 0, 100% → 0.60.
- Content: nav at top; then a row (container 1200, starts 148 from top, 460 high):
  - Left column 780 wide, vertically centered: greeting (Intro style, white), line under it (22/32 Regular, `--color-surface`, max-width 500), gap 16; socials row 32 below: three Light icon buttons 48×48, gap 16 — Telegram, Behance, Email.
  - Right: portrait 380×460, radius 12, `home/portrait`.
- "Scroll ↓" hint centered, 24 from bottom, small pill-less label on white 104×32, radius 8 — scrolls to #work.

**My projects** (`id="work"`) — padding 96/120, gap 48. H2 "My projects", then the carousel.

**Project carousel** (cover-flow, 4 projects in a loop: SubTrack → Partwise → Vortex → Motionly)
- Stage 1200 wide, ~520 high. Center card 520×380, radius 16, shadow.
- Side cards 250×300 left/right (they tuck under the center card by ~100px), far cards 190×250 at opacity 0.8. In code use real 3D: `perspective: 1200px`, side cards `rotateY(±50deg)`, far cards `rotateY(±60deg)` + translateZ back. With 4 projects the far slot shows the same project on both sides (mirror) — acceptable, or show only one far card.
- Under the stage (32 gap): controls row, centered — Prev icon button, tick indicator (4 bars 2×10, active 2×18 and darker, pitch 10), Next icon button, gap 24. Identical for every project, so the arrows never move.
- Caption row (32 below the controls, 1px line on top, padding-top 24, space-between):
  - Left: project name (H3-ish, primary) + one-line description (Body), meta line in Label style.
  - Right: actions only, right-aligned. "View case study" (Secondary) → `/work/<slug>` is always last. Partwise adds "Visit website ↗" (Ghost, new tab) to the left of it, gap 8.
- Behaviour: Prev/Next buttons, click on a side card makes it active, ←/→ keys when the carousel has focus, swipe on touch. Transition `var(--dur-carousel)`. `aria-roledescription="carousel"`, each slide `aria-label="2 of 4"`, live region for the caption. Reduced motion: no 3D movement, crossfade.

**Skills and tools** — padding 48/120/120/120, gap 48. H2 "Skills and tools". White panel (radius 12, 1px line, padding 40/48/48/48, gap 48):
- Row of three shelves (gap 40): Design, Code, Workflow. Each shelf: title (Shelf/Title, Body Medium, padding-bottom 20) → row of tool tiles (gap 14, side padding 12) → plank (14 high, bg surface, radius 2, `--shadow-plank`).
- Tool tile ~84×120, radius 4: logo 40×40 centered, name centered under it (12–13px). Tile colors: Figma blue, Paper accent, Photoshop navy, Claude Code navy, Codex blue, VS Code surface, GitHub light (bg + 1px line), Notion light, Claude blue, Behance navy. Text white on dark tiles, navy on light.
- Skills shelf below (full width): "book spines" 76 wide, radius 4, different heights (125–205, aligned to the plank), label rotated −90° reading bottom-to-top, padding-top 34. Colors in order: navy, blue, surface, light, blue, navy, surface, accent, blue.
- Tiles and books are static (no hover needed). Render the skills as a real list (`<ul>`) for screen readers.

**Footer** (shared on all pages) — bg navy, padding 96/120/48/120, gap 112.
- Three columns: Navigation (Work, About) · Contact (Telegram, Behance, Email, GitHub, Resume) · Case studies (SubTrack, Partwise, Vortex, Motionly). Titles H3 white, links 18px On Dark text links.
- Bottom row: "© 2026 Dmytro Zaichenko" left, "Designed and built in Kyiv" right (Body, white 75%).

### 3.2 About (`/about`)
- Nav (About = active).
- Title "About me" — Display, centered, padding 96 top / 64 bottom.
- Intro card — container 1200, white, radius 12, 1px line, padding 80, gap 72, items centered vertically:
  - Text column (fills): heading 40/48 Bold, then paragraphs (Lead, 85% opacity, gap 24), then buttons row (gap 12): "Let's talk" (Secondary → opens dialog), "Resume ↗" (Ghost → `/resume.pdf`).
  - Photo 420×520, radius 12 (`home/portrait`).
- Skills and tools section — same component as on Home, padding-top 120, bottom 160.
- Footer.

### 3.3 Case study (`/work/<slug>`) — one layout for all four
- Nav centered on top.
- Case hero (padding 120 top / 64 bottom, container 1200): title (Display), subtitle (24/32, navy), meta row — columns with Label (Geist Mono, uppercase, 60%) over value (Body, multi-line allowed), gap 48; cover image 1200 wide, radius 16.
- Body: two columns. Left "Contents" sidebar 240 wide at x=120, sticky (`position: sticky; top: 96px`). Right content column 900 wide starting at x=420, sections gap 120.
  - Contents: list of section links (Body, navy 60% → active navy 100% with a 2px primary bar on the left). Highlight the section in view (IntersectionObserver). Smooth scroll (`scroll-behavior: smooth` unless reduced motion). Last item "Back to top ↑".
  - Section: H2 case (40/44), optional paragraphs 18/28 (gap 16), optional bullet lists (rendered from "— " lines), images 900 wide radius 16, gap 32. Long landing pages are shown as a vertical strip of images (no gaps, clipped with radius 16 on the strip).
  - Partwise only: "Users" = two cards side by side (white, radius 12, 1px line, padding 32: role title H3 + text) + a note line; "Built in code" = text + two buttons: "Visit website ↗" (Secondary) and "GitHub repository ↗" (Ghost).
- Case end: centered "Thank you for checking out this project!" (H2 case) + Secondary button "Next project: <Name> →". Order loops: SubTrack → Partwise → Vortex → Motionly → SubTrack.
- Footer.
- Each page: unique `<title>` "<Project> — Dmytro Zaichenko", meta description = subtitle, OG image = cover.

## 4. Contact dialog ("Let's talk")
Triggered by every "Let's talk" button (nav on all pages, About card).
- Native `<dialog>` with `showModal()`. Backdrop: `--color-secondary` at 50% (`::backdrop`).
- Panel 440 wide (max `calc(100vw - 32px)`), white, radius 12, padding 32, gap 24, `--shadow-modal`, centered.
- Header: title "Let's talk" (H3, navy) + line "Choose how you'd like to reach me." (Body, 70%); close icon button (Light, icon close, `aria-label="Close"`) top-right.
- Options (Contact Option, gap 8): Telegram `@wakeupdima` → `https://t.me/wakeupdima`; Email `omgy186@gmail.com` → `mailto:omgy186@gmail.com`; Behance `behance.net/JohanZaichenko` → `https://www.behance.net/JohanZaichenko`. External links open in a new tab.
- Closes on: close button, Esc, click on the backdrop. Focus goes to the first option on open and returns to the trigger on close. Open/close: fade + 8px rise, `var(--dur-base)`.

## 5. Responsive rules (not drawn in Figma — implement, then review with Dmytro)
Breakpoints: ≥1200 desktop (as designed) · 768–1199 tablet · <768 mobile (check at 390).
- Container: `min(1200px, 100% - 2 * gutter)`, gutter 120 → 48 (tablet) → 20 (mobile).
- Type scale on mobile: Display 48/52, H2 36/40, H2 case 28/32, Intro 32/40, Lead 18/28, case text 17/26.
- Nav: same bar; under 480 hide the "Dmytro" text (keep the mark), link padding 8. Keep all three links and the CTA visible (no burger).
- Hero: min-height 100svh on mobile; text first, portrait below at 280×340 (or hide it if it crowds the screen — check with Dmytro); left scrim becomes a full overlay at ~0.75.
- Carousel: tablet — side cards only (no far cards), smaller center card; mobile — one card at a time, full width, swipe + arrows, no 3D.
- Controls row stays centered under the card; caption stacks: text, then the actions row (wraps if needed, "View case study" still last).
- Skills and tools: shelves stack vertically; skill books wrap or scroll horizontally inside the shelf.
- About card: one column, padding 24, photo after the text (full width, 4:5).
- Case pages: under 1024 hide the Contents sidebar, single column with the gutter; meta row becomes a 2-column grid; images 100% wide.
- Footer: columns stack, gap 48; bottom row stacks.
- Touch targets ≥44×44 everywhere.

## 6. Accessibility checklist
- One `<h1>` per page (hero greeting on Home, "About me", case title).
- Landmarks: `header`, `nav`, `main`, `footer`. Skip link "Skip to content".
- All icon-only buttons have `aria-label`; decorative images `alt=""`; case slides have descriptive alt (e.g. "SubTrack information architecture").
- Text contrast ≥4.5:1 (blue #406EB7 on #F4F4F2 passes at ~4.6; do not put blue text on #E3E3E3).
- Focus ring `--focus-ring` on all interactive elements.
