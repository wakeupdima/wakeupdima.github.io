# Assets

All assets live on the Figma page **`09 Export · assets`**. Each layer already has export settings and a path-style name, so one export produces the folder structure below.

## How to export (Dmytro, once)
1. Open the Figma file → page `09 Export · assets`.
2. Menu **File → Export…** (Shift+Cmd+E / Shift+Ctrl+E). Figma lists every layer with export settings — export all.
3. Unzip into the repo at `src/assets/` (keep the folders). Move nothing else.

If Claude Code has the Figma MCP connected, it can instead fetch the same layers by their node IDs (page `60:2`).

## Files
| Path | Format | Size (1x) | Used in |
|---|---|---|---|
| `home/hero-bg.png` | PNG 1x (pixel art, do not upscale smoothly) | 1440×900 | Home hero background |
| `home/portrait.png` | PNG 2x | 380×460 | Home hero, About card |
| `projects/{subtrack,partwise,vortex,motionly}-preview.png` | PNG 2x | 520×380 | Home carousel |
| `cases/subtrack/cover.png` | PNG 2x | 1200×771 | SubTrack hero |
| `cases/subtrack/01-overview … 10-design-system.png` (11 files, 08 has two) | PNG 2x | 900 wide | SubTrack sections |
| `cases/partwise/cover, catalogue, how-it-works, enquiry-form, visual-direction` | PNG 2x | cover 1200, others 900 | Partwise |
| `cases/vortex/cover, overview, final-1 … final-6` | PNG 2x | cover 1200, others 900 | Vortex |
| `cases/motionly/cover, overview, problem-solution, design-approach, process, key-solutions, final-1 … final-9` | PNG 2x | cover 1200, others 900 | Motionly |
| `logos/{figma,paper,photoshop,claude-code,codex,vscode,github,notion,claude,behance}.svg` | SVG | 28×28 (render at 40) | Tool tiles |
| `icons/{mail,resume,chevron-left,chevron-right,arrow-up-right,behance,linkedin,telegram,gmail,close}.svg` | SVG | 20×20 | Buttons, dialog |

Notes
- Convert PNGs through `astro:assets` (WebP/AVIF, responsive `widths`). The SubTrack user flow image is very tall (900×2549) — lazy-load it.
- Icons: inline the SVGs and set `stroke="currentColor"` / `fill="currentColor"` so they follow the text color.
- Logos are third-party trademarks shown as "tools I use" — keep them unmodified.
- Still missing: `public/resume.pdf`, favicon (use the "DZ" mark: blue #406EB7 square, white "DZ"), OG image (1200×630).
