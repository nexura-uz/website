// Renders every PNG / ICO / manifest the brand needs from the SVG masters in ./svg.
// Usage (from brand/): npm install && npm run export:logo   (or: node logo/export.mjs [svgDir] [outDir])
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = process.argv[2] ?? join(here, 'svg');
const OUT = process.argv[3] ?? join(here, 'export');
const PRIMARY = '#0B5D4B';

// [source svg, output file, width, height?, opaque background?]
const jobs = [
  // Website: favicons and app icons
  ['nexura-icon.svg', 'web/favicon-16.png', 16],
  ['nexura-icon.svg', 'web/favicon-32.png', 32],
  ['nexura-icon.svg', 'web/favicon-48.png', 48],           // Google Search favicon (multiple of 48)
  ['nexura-icon.svg', 'web/icon-192.png', 192],
  ['nexura-icon.svg', 'web/icon-512.png', 512],
  ['nexura-icon-square.svg', 'web/icon-maskable-512.png', 512, null, true],
  ['nexura-icon-square.svg', 'web/apple-touch-icon.png', 180, null, true], // iOS rounds corners itself; must be opaque
  ['og-default.svg', 'web/og-default.png', 1200, 630, true],

  // Google: schema.org Organization logo, Google Business Profile
  ['nexura-icon-square.svg', 'google/organization-logo-512.png', 512, null, true],
  ['nexura-icon-square.svg', 'google/business-profile-720.png', 720, null, true],

  // Social avatars: Instagram, Telegram, LinkedIn, YouTube, X, Gmail / Google account (all crop to a circle)
  ['nexura-icon-square.svg', 'social/avatar-1080.png', 1080, null, true],

  // Wordmark and lockup (transparent) for documents, email signatures, banners. Gmail does not render SVG.
  ['nexura-wordmark-light.svg', 'wordmark/nexura-wordmark-light-1200w.png', 1200],
  ['nexura-wordmark-dark.svg', 'wordmark/nexura-wordmark-dark-1200w.png', 1200],
  ['nexura-lockup-light.svg', 'wordmark/nexura-lockup-light-1200w.png', 1200],
  ['nexura-lockup-dark.svg', 'wordmark/nexura-lockup-dark-1200w.png', 1200],
  ['nexura-lockup-light.svg', 'wordmark/email-signature-lockup-light-400w.png', 400],
];

async function render(src, out, w, h, opaque) {
  const svg = await readFile(join(SRC, src));
  const meta = await sharp(svg).metadata();
  const density = Math.min(2400, Math.ceil((72 * w * 2) / meta.width)); // render at 2x, then downscale
  let img = sharp(svg, { density }).resize(w, h ?? null, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } });
  if (opaque) img = img.flatten({ background: PRIMARY });
  const file = join(OUT, out);
  await mkdir(dirname(file), { recursive: true });
  await img.png({ compressionLevel: 9 }).toFile(file);
  return file;
}

for (const [src, out, w, h, opaque] of jobs) {
  await render(src, out, w, h, opaque);
  console.log('✓', out);
}

const ico = await pngToIco([16, 32, 48].map((s) => join(OUT, `web/favicon-${s}.png`)));
await writeFile(join(OUT, 'web/favicon.ico'), ico);
console.log('✓ web/favicon.ico');

await writeFile(join(OUT, 'web/favicon.svg'), await readFile(join(SRC, 'favicon.svg')));
console.log('✓ web/favicon.svg');

const manifest = {
  name: 'Nexura',
  short_name: 'Nexura',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
  theme_color: PRIMARY,
  background_color: '#F4F7F5',
  display: 'standalone',
};
await writeFile(join(OUT, 'web/site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
console.log('✓ web/site.webmanifest');
