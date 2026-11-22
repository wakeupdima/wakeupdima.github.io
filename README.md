# Dmytro Zaichenko — portfolio

Static site built with [Astro](https://astro.build). Design source: Figma (see `CLAUDE.md`).

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (once) |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the built site |
| `node scripts/make-brand-images.mjs` | Regenerate `public/og.jpg`, `favicon.svg`, `apple-touch-icon.png` |
| `node scripts/make-hero-tone.mjs` | Rebuild `src/assets/home/hero-tone.png` (input of the animated hero) after changing `hero-bg.png` |

## Where things live

- Pages: `src/pages/` (`index`, `about`, `work/[slug]`, `404`)
- Case study content: `src/data/cases/*.ts`
- Projects for the Home carousel: `src/data/projects.ts`
- Tools and skills: `src/data/skills.ts`
- Contacts: `src/data/site.ts`
- Images: `src/assets/`, files served as-is (resume, favicon, OG): `public/`

## Deploy

Every push to `main` builds and publishes the site to GitHub Pages (`.github/workflows/deploy.yml`).
The URL path is detected automatically, so the repo can be named `wakeupdima.github.io` (site at the root)
or anything else, e.g. `portfolio` (site at `/portfolio/`).
