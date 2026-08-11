// Screenshot every .frame element in frames.html at its natural pixel size.
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { mkdirSync } from 'node:fs';

const dir = new URL('./png/', import.meta.url);
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 1000 }, deviceScaleFactor: 1 });
await page.goto(new URL('./frames.html', import.meta.url).href, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);

for (const el of await page.$$('.frame')) {
  const name = await el.getAttribute('data-name');
  await el.screenshot({ path: new URL(`./${name}.png`, dir).pathname });
  const b = await el.boundingBox();
  console.log(`${name}.png  ${b.width}x${b.height}`);
}

await browser.close();
