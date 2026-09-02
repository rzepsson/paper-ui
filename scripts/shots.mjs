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
	viewport: { width: 1440, height: 900 },
	deviceScaleFactor: 2
});
const page = await ctx.newPage();

const settle = async () => {
	await page.evaluate(() => document.fonts.ready);
	await page.waitForTimeout(800); // shiki highlights and entry animations finish
};

/** Screenshots the section with this id, plus a little breathing room around it. */
async function shootSection(name, id, pad = 28) {
	const box = await page.evaluate((sectionId) => {
		const rect = document.getElementById(sectionId).getBoundingClientRect();
		return { top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY };
	}, id);

	const y = Math.max(0, Math.round(box.top - pad));
	const height = Math.round(box.bottom - box.top + pad * 2);
	await page.evaluate((v) => window.scrollTo(0, v), y);
	await page.waitForTimeout(250);

	await page.screenshot({
		path: `${OUT}/${name}.png`,
		fullPage: true, // clip coordinates are document-relative only in full-page mode
		clip: { x: 0, width: 1440, y, height }
	});
	console.log(`${name}.png  1440x${height}`);
}

// --- landing page, light ----------------------------------------------------
await page.goto(BASE, { waitUntil: 'networkidle' });
await settle();
await page.screenshot({ path: `${OUT}/home.png` });
console.log('home.png  1440x900');

// --- button playground, light -----------------------------------------------
await page.goto(`${BASE}/docs/components/button`, { waitUntil: 'networkidle' });
await settle();

// Pick non-default options so the generated snippet actually shows props off
await page.getByRole('button', { name: 'outline', exact: true }).click();
await page.getByRole('button', { name: 'lg', exact: true }).click();
await page.waitForTimeout(400);
await shootSection('button-docs', 'playground');

// --- theme panel, light -----------------------------------------------------
await page.goto(`${BASE}/docs/components/button`, { waitUntil: 'networkidle' });
await settle();
await page.getByRole('button', { name: 'Customise the theme' }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/theme.png` });
console.log('theme.png  1440x900');

// --- command palette, dark --------------------------------------------------
// Flip the mode through the real panel, so a broken control fails the run
await page.getByRole('button', { name: 'Dark', exact: true }).click();
await page.waitForTimeout(500);
const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
if (!isDark) throw new Error('dark mode did not apply - the theme panel is broken');
await page.keyboard.press('Escape');

await settle();
await page.keyboard.press('Control+k');
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/command.png` });
console.log('command.png  1440x900');
await page.keyboard.press('Escape');

// Leave the browser profile on the defaults so the next run starts clean
await page.evaluate(() => {
	localStorage.removeItem('paperui:theme');
	localStorage.removeItem('mode-watcher-mode');
});

await browser.close();
console.log('done');
