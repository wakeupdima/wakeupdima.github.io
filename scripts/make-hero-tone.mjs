/**
 * Builds src/assets/home/hero-tone.png from hero-bg.png for the animated hero.
 *
 * hero-bg.png is pixel art: 6 colors, dither cells of 2×2 px. We read one pixel per cell and
 * split it into two channels the shader can distort and dither again:
 *   R — tone of the 5 blue shades (0…1), slightly blurred so it is continuous;
 *   G — density of the white highlight dots, kept separate so blurring doesn't wash them out.
 *
 * Run: node scripts/make-hero-tone.mjs
 */
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const src = new URL('src/assets/home/hero-bg.png', root).pathname;
const out = new URL('src/assets/home/hero-tone.png', root).pathname;

// Palette, dark → light (must match PALETTE in src/components/HeroBackground.astro)
const palette = [
  [2, 12, 54],
  [20, 36, 85],
  [38, 60, 115],
  [57, 84, 147],
  [75, 109, 178],
  [244, 244, 242],
];

const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width / 2;
const H = info.height / 2;
const tone = Buffer.alloc(W * H);
const white = Buffer.alloc(W * H);
const WHITE = palette.length - 1;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = ((y * 2) * info.width + x * 2) * 3;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    let best = 0, bestD = Infinity;
    palette.forEach(([pr, pg, pb], k) => {
      const d = (r - pr) ** 2 + (g - pg) ** 2 + (b - pb) ** 2;
      if (d < bestD) { bestD = d; best = k; }
    });
    // White dots sit on the lightest blue
    tone[y * W + x] = Math.round((Math.min(best, WHITE - 1) / (WHITE - 1)) * 255);
    white[y * W + x] = best === WHITE ? 255 : 0;
  }
}

const blur = async (buf, sigma) =>
  sharp(buf, { raw: { width: W, height: H, channels: 1 } }).blur(sigma).extractChannel(0).raw().toBuffer();
const [r, g] = await Promise.all([blur(tone, 0.9), blur(white, 0.7)]);

const rgb = Buffer.alloc(W * H * 3);
for (let k = 0; k < W * H; k++) {
  rgb[k * 3] = r[k];
  rgb[k * 3 + 1] = g[k];
}

await sharp(rgb, { raw: { width: W, height: H, channels: 3 } })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`Wrote ${out} (${W}×${H})`);
