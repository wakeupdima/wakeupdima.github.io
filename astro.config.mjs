// @ts-check
import { defineConfig } from 'astro/config';

/*
 * GitHub Pages:
 *  - repo "wakeupdima.github.io" → site at https://wakeupdima.github.io/        (BASE_PATH = "")
 *  - any other repo, e.g. "portfolio" → https://wakeupdima.github.io/portfolio/  (BASE_PATH = "/portfolio")
 * The deploy workflow sets BASE_PATH automatically; locally it is "/".
 */
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://wakeupdima.github.io',
  base,
  output: 'static',
  trailingSlash: 'ignore',
  // about.html instead of about/index.html: GitHub Pages then serves /about directly, without a 301 to /about/
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
