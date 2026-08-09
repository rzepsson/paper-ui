// Regenerates docs/screenshots/*.png by driving a real browser over the dev server.
// Run the dev server first, then: npm run shots
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const BASE = process.env.SHOTS_BASE ?? 'http://localhost:5173';
const OUT = fileURLToPath(new URL('../docs/screenshots', import.meta.url));
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
	viewport: { width: 1280, height: 900 },
	deviceScaleFactor: 2
});
const page = await ctx.newPage();

const settle = async () => {
	await page.evaluate(() => document.fonts.ready);
	await page.waitForTimeout(700); // let entry animations finish
};

// --- command palette, dark --------------------------------------------------
await page.goto(BASE, { waitUntil: 'networkidle' });
await settle();

// Flip the theme through the real switch, so a broken switch fails the run
await page.getByRole('switch', { name: 'Toggle dark mode' }).click();
await page.waitForTimeout(500);
const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
if (!isDark) throw new Error('dark mode did not apply - the theme switch is broken');

await page.keyboard.press('Control+j');
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/command.png` });
console.log('command.png  1280x900');
await page.keyboard.press('Escape');

// --- button playground, light -----------------------------------------------
await page.goto(`${BASE}/docs/button`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.documentElement.classList.remove('dark'));
await settle();

// Pick non-default options so the generated snippet actually shows props off
await page.getByRole('button', { name: 'outline', exact: true }).click();
await page.getByRole('button', { name: 'lg', exact: true }).click();
await page.waitForTimeout(400);

const { top, bottom } = await page.evaluate(() => {
	const r = document.getElementById('interactive-playground').getBoundingClientRect();
	return { top: r.top + window.scrollY, bottom: r.bottom + window.scrollY };
});

const pad = 32;
const y = Math.max(0, Math.round(top - pad));
const height = Math.round(bottom - top + pad * 2);
await page.evaluate((v) => window.scrollTo(0, v), y);
await page.waitForTimeout(250);
await page.screenshot({
	path: `${OUT}/button-docs.png`,
	fullPage: true, // clip coordinates are document-relative only in full-page mode
	clip: { x: 24, width: 1232, y, height }
});
console.log(`button-docs.png  1232x${height}`);

await browser.close();
console.log('done');
