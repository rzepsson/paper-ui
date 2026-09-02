import { THEME_CSS } from "./source";

// Parsing the stylesheet keeps the registry and the running site on one set of tokens.
function readBlock(header: string): Record<string, string> {
	const start = THEME_CSS.search(new RegExp(`(^|\\n)${header}\\s*\\{`));
	if (start === -1) return {};

	const open = THEME_CSS.indexOf("{", start);
	let depth = 0;
	let end = open;
	for (; end < THEME_CSS.length; end++) {
		if (THEME_CSS[end] === "{") depth++;
		else if (THEME_CSS[end] === "}" && --depth === 0) break;
	}

	const out: Record<string, string> = {};
	for (const declaration of THEME_CSS.slice(open + 1, end).split(";")) {
		const match = declaration.match(/--([\w-]+)\s*:\s*([^;]+)/);
		if (match) out[match[1]] = match[2].trim();
	}
	return out;
}

export const lightTokens = readBlock(":root");
export const darkTokens = readBlock("\\.dark");
export const themeTokens = readBlock("@theme inline");

export const cssVars = {
	theme: themeTokens,
	light: lightTokens,
	dark: darkTokens
};

export const baseCss = {
	"@layer base": {
		"*": {
			"@apply border-border outline-ring/50": ""
		},
		body: {
			"@apply bg-background text-foreground": "",
			"-webkit-font-smoothing": "antialiased",
			"-moz-osx-font-smoothing": "grayscale"
		}
	}
};
