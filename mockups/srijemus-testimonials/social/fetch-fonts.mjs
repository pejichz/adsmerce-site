// Pull the Google Fonts CSS, keep only the latin + latin-ext subsets (BHS needs
// č ć š ž đ, which live in latin-ext), and inline every woff2 as a data URI so
// the render does not depend on the network.
import { writeFileSync } from 'node:fs';

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const URL_CSS = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700;800;900&display=swap';

const css = await (await fetch(URL_CSS, { headers: { 'User-Agent': UA } })).text();

// Blocks are emitted as "/* subset */\n@font-face{...}" — split on the comment.
const blocks = css.split(/\/\*\s*([a-z-]+)\s*\*\//i).slice(1);
let out = '';
let kept = 0;

for (let i = 0; i < blocks.length; i += 2) {
  const subset = blocks[i].trim();
  let body = blocks[i + 1];
  if (subset !== 'latin' && subset !== 'latin-ext') continue;

  const m = body.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/);
  if (!m) continue;

  const buf = Buffer.from(await (await fetch(m[1], { headers: { 'User-Agent': UA } })).arrayBuffer());
  body = body.replace(m[1], `data:font/woff2;base64,${buf.toString('base64')}`);
  out += body;
  kept++;
  process.stdout.write(`. ${subset} ${(buf.length / 1024).toFixed(0)}KB\n`);
}

writeFileSync(new URL('./fonts.css', import.meta.url), out);
console.log(`\n${kept} face(s) embedded -> fonts.css`);
