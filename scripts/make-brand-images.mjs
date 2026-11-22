/**
 * Generates public/og.jpg (1200×630), public/favicon.svg and public/apple-touch-icon.png.
 * Text is converted to vector paths with opentype.js, so no system fonts are needed.
 * Run: node scripts/make-brand-images.mjs
 */
import opentype from 'opentype.js';
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const font = (w) => {
  const buf = readFileSync(new URL(`node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-${w}-normal.woff`, root));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
};
const bold = font(700);
const regular = font(400);

// Colors mirror src/styles/tokens.css
const c = { primary: '#406EB7', navy: '#0D1846', ink: '#000C38', white: '#FFFFFF', surface: '#E3E3E3' };

/** Text → SVG path; letterSpacing in em */
function text(f, str, x, y, size, fill, letterSpacing = 0) {
  let cursor = x;
  const parts = [];
  for (const ch of str) {
    const glyph = f.charToGlyph(ch);
    parts.push(glyph.getPath(cursor, y, size).toPathData(2));
    cursor += (glyph.advanceWidth / f.unitsPerEm) * size + letterSpacing * size;
  }
  return { svg: `<path fill="${fill}" d="${parts.join(' ')}"/>`, width: cursor - x };
}

function centered(f, str, cx, y, size, fill, ls = 0) {
  const w = text(f, str, 0, 0, size, fill, ls).width;
  return text(f, str, cx - w / 2, y, size, fill, ls).svg;
}

// ---------- Favicon (DZ mark) ----------
const markSvg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="${c.primary}"/>
  ${centered(bold, 'DZ', 32, 43, 30, c.white, 0.02)}
</svg>`;

await writeFile(new URL('public/favicon.svg', root), markSvg(64));
await sharp(Buffer.from(markSvg(180).replace('rx="12"', 'rx="0"')))
  .resize(180, 180)
  .png()
  .toFile(new URL('public/apple-touch-icon.png', root).pathname);

// ---------- OG image ----------
const W = 1200;
const H = 630;

const bg = await sharp(await readFile(new URL('src/assets/home/hero-bg.png', root)))
  .resize(W, Math.round((900 / 1440) * W), { kernel: 'nearest' })
  .extract({ left: 0, top: 50, width: W, height: H })
  .toBuffer();

const photoW = 340;
const photoH = 412;
const photo = await sharp(await readFile(new URL('src/assets/home/portrait.png', root)))
  .resize(photoW - 12, photoH - 12, { fit: 'cover' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${photoW - 12}" height="${photoH - 12}"><rect width="100%" height="100%" rx="7" fill="#fff"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const photoX = W - 96 - photoW;
const photoY = (H - photoH) / 2;

const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="l" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${c.ink}" stop-opacity="0.92"/>
      <stop offset="0.5" stop-color="${c.ink}" stop-opacity="0.82"/>
      <stop offset="0.72" stop-color="${c.ink}" stop-opacity="0.3"/>
      <stop offset="0.9" stop-color="${c.ink}" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="v" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="${c.ink}" stop-opacity="0.45"/>
      <stop offset="0.2" stop-color="${c.ink}" stop-opacity="0"/>
      <stop offset="0.8" stop-color="${c.ink}" stop-opacity="0"/>
      <stop offset="1" stop-color="${c.ink}" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#l)"/>
  <rect width="100%" height="100%" fill="url(#v)"/>
  <g transform="translate(96 96)">
    <rect width="48" height="48" rx="8" fill="${c.primary}"/>
    ${centered(bold, 'DZ', 24, 32, 22, c.white, 0.02)}
  </g>
  ${text(bold, 'Dmytro Zaichenko', 96, 318, 64, c.white, -0.03).svg}
  ${text(regular, 'UI/UX designer and student', 96, 380, 30, c.surface).svg}
  ${text(regular, 'based in Kyiv.', 96, 420, 30, c.surface).svg}
  <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" rx="12" fill="${c.white}"/>
</svg>`;

await sharp(bg)
  .composite([
    { input: Buffer.from(overlay), top: 0, left: 0 },
    { input: photo, top: photoY + 6, left: photoX + 6 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(new URL('public/og.jpg', root).pathname);

console.log('Wrote public/og.jpg, public/favicon.svg, public/apple-touch-icon.png');
