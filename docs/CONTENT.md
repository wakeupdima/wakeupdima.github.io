# Content

Use this text exactly. Do not add or rewrite copy. Typographic apostrophes (’) are fine.

## Global

**Nav:** logo "Dmytro" · Work · About · Resume · button "Let's talk"

**Footer**
- Navigation: Work (`/#work`), About (`/about`)
- Contact: Telegram (`https://t.me/wakeupdima`), Behance (`https://www.behance.net/JohanZaichenko`), Email (`mailto:omgy186@gmail.com`), GitHub (`https://github.com/wakeupdima`), Resume (`/resume.pdf`)
- Case studies: SubTrack, Partwise, Vortex, Motionly (`/work/<slug>`)
- Bottom: "© 2026 Dmytro Zaichenko" · "Designed and built in Kyiv"

**Contact dialog**
- Title: Let's talk
- Line: Choose how you'd like to reach me.
- Telegram — @wakeupdima
- Email — omgy186@gmail.com
- Behance — behance.net/JohanZaichenko

**Site meta:** title "Dmytro Zaichenko — UI/UX designer"; description "UI/UX designer and student based in Kyiv."

## Home

**Hero**
- H1: Hi there! I'm Dmytro Zaichenko.
- Line: I'm a UI/UX designer, a student in Kyiv, and a casual chess player.
- Social buttons (aria-labels): Telegram, Behance, Email
- Hint: Scroll ↓

**My projects** (H2: My projects)
| Slug | Name | Description | Meta | Buttons |
|---|---|---|---|---|
| subtrack | SubTrack | See every subscription before it charges. | UX/UI case study · Mobile · 2026 | View case study |
| partwise | Partwise | B2B site for sourcing electronic components to Ukraine. | UX/UI concept · Web · Designed and coded · 2026 | View case study · Visit website ↗ (`https://wakeupdima.github.io/partwise/`) |
| vortex | Vortex | Brand identity and website for a conceptual AI agency. | Concept · Branding and web | View case study |
| motionly | Motionly | Landing page for a marketing agency. | Concept · Web | View case study |

**Skills and tools** (H2: Skills and tools)
- Design: Figma, Paper, Photoshop
- Code: Claude Code, Codex, VS Code, GitHub
- Workflow: Notion, Claude, Behance
- Skills: UX design, UI design, Product design, UX research, Design systems, Interaction design, Usability testing, No-code, Accessibility

## About

- H1: About me
- Heading: Hi there, I'm Dmytro Zaichenko!
- P1: I'm a UI/UX designer and a student based in Kyiv. I started out learning JavaScript and thought I'd become a frontend developer. Somewhere along the way I noticed I enjoyed figuring out how a screen should work more than writing the code behind it, so I switched to design.
- P2: Before UX/UI I did small freelance graphic design jobs, including a website redesign for a singer. Now I work on product projects end to end: research, user flows, wireframes, UI and usability testing. SubTrack went through two moderated testing sessions and five iterations.
- P3: I also designed Partwise, a concept B2B website for sourcing electronic components in Ukraine. It started with a competitor review and a UX audit, and ended as a live site built with AI tools.
- Buttons: Let's talk · Resume ↗
- Then the "Skills and tools" section (same as Home).

## Case studies

Shared end block: "Thank you for checking out this project!" + "Next project: <Name> →".
Meta labels are rendered in Geist Mono uppercase. Multi-line values keep their line breaks.

### SubTrack (`/work/subtrack`)
- Title: SubTrack
- Subtitle: See every subscription before it charges.
- Meta: Role — UX/UI Designer / Solo project · Timeline — Sep–Oct 2026 · Platform — iOS · Tools — Figma, Notion · Deliverables — Research & testing / UX/UI design / Prototype
- Cover: `cases/subtrack/cover`
- Sections (heading + image, no extra text — the slides carry the text):
  1. Overview — `01-overview`
  2. The challenge — `02-challenge`
  3. Research — `03-research`
  4. User & journey — `04-user-journey`
  5. Goals — `05-goals`
  6. Information architecture — `06-information-architecture`
  7. Core user flow — `07-user-flow`
  8. Key features — `08-key-features-1`, `08-key-features-2`
  9. Visual direction — `09-visual-direction`
  10. Design system — `10-design-system`
- Next project: Partwise

### Partwise (`/work/partwise`)
- Title: Partwise
- Subtitle: The right part. Sourced clearly.
- Meta: Role — UX/UI Designer / Solo project · Type — Educational concept · Timeline — Nov 2026 · Platform — Web · Tools — Figma, Figma Motion, / Notion, HTML/CSS/JS
- Cover: `cases/partwise/cover`
- Sections:
  1. **Overview**
     - Partwise is a Kyiv company that buys electronic components from suppliers in China and delivers them to order for businesses in Ukraine. The site is a small B2B catalogue with an enquiry form — no cart and no online payment: every purchase is agreed with a manager.
     - Note (smaller, 60%): Educational UX/UI concept. Audience needs are hypotheses; interviews are planned.
  2. **The challenge** — Engineers and buyers need to check a part and request a price fast. Supplier sites in this niche hide the catalogue, use vague buttons like “Get started” and ask for long forms with a mandatory phone number.
  3. **Users** (two cards)
     - Engineer — Studies a component: part number, manufacturer, parameters, dimensions, mounting and datasheet. Shares the link or part number with a buyer.
     - Buyer — Sends the exact part number and quantity. Needs the price, packaging, MOQ and delivery time to Ukraine.
     - Note under cards: One interface for both roles, without sign-up or role switching.
  4. **UX principles** (list)
     - The full part number stays with the user from the card to the enquiry.
     - Purpose and key parameters first, details below.
     - Datasheets open without sign-up; unknown parameters are marked.
     - “To order” is never presented as “in stock in Kyiv”.
     - Price in USD or “on request”.
     - The short form continues the choice — no retyping the part number.
  5. **Competitor review** (list)
     - Catalogue as its own menu item, not hidden in Services (Smith).
     - One main path and field hints, no mandatory phone (Fusion).
     - The selected model fills in automatically and the result of sending is clear (Mouser).
     - Manufacturer part number kept separate from internal codes; datasheet right from the card (DigiKey, LCSC).
     - Note: Expert hypotheses based on page structure, not user tests.
  6. **Catalogue** — Six MEAN WELL SPBW06 DC/DC modules grouped by input range: F (9–36 V) and G (18–75 V). Each card shows the part number, input, output and current, with Datasheet and Request price. — image `catalogue`
  7. **How it works** — Three steps from a part number to a supply proposal. A sent enquiry does not reserve stock or confirm a purchase. — image `how-it-works`
  8. **Enquiry form** — Part number, quantity and email are required; name or company is optional. The form has five states: default, prefilled from the catalogue, error, sending and success. — image `enquiry-form`
  9. **UX audit** (list)
     - Fixed header and section links shorten the path to an enquiry.
     - “Request price” on every card instead of dead-end “View” buttons.
     - Originality as a trust argument: card, process step, FAQ and a line by the form.
     - Catalogue moved up to the third section; a duplicate statement block removed.
     - Manager response time and a direct contact block added.
  10. **Visual direction** — Modern industrial tech: glass components on a light cream background, Chakra Petch for the interface and JetBrains Mono for labels, isometric illustrations animated in Figma Motion. — image `visual-direction`
  11. **Built in code** — The landing page is built with HTML, CSS and JavaScript and published on GitHub Pages. Buttons: Visit website ↗ (`https://wakeupdima.github.io/partwise/`) · GitHub repository ↗ (`https://github.com/wakeupdima/partwise`)
  12. **Next steps** (list)
     - Run a UX test: understand the offer, find a part, check the datasheet, send an enquiry and describe the next step.
     - Confirm business details: supplier checks, MOQ, real lead times, payment and delivery.
     - Turn the project into a full case study.
- Next project: Vortex

### Vortex (`/work/vortex`)
- Title: Vortex
- Subtitle: Brand identity and website for a conceptual AI agency.
- Meta: Role — UX/UI Designer / Solo project · Type — Concept project · Platform — Web, desktop · Tools — Figma · Deliverables — Brand identity / Landing page / Pixel-art illustrations
- Cover: `cases/vortex/cover`
- Sections:
  1. Overview — `overview`
  2. Final design — strip of `final-1` … `final-6`
- Next project: Motionly

### Motionly (`/work/motionly`)
- Title: Motionly
- Subtitle: Landing page for a marketing agency.
- Meta: Role — UX/UI Designer / Solo project · Type — Concept project · Platform — Web, desktop · Tools — Figma · Deliverables — Research / Wireframes / UI design / Illustrations
- Cover: `cases/motionly/cover`
- Sections:
  1. Overview — `overview`
  2. Problem & solution — `problem-solution`
  3. Design approach — `design-approach`
  4. Process — `process`
  5. Key solutions — `key-solutions`
  6. Final design — strip of `final-1` … `final-9`
- Next project: SubTrack
