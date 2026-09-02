import { createHighlighter, type Highlighter } from "shiki";

const LANGS = ["svelte", "typescript", "javascript", "bash", "json", "css"] as const;
export type CodeLang = (typeof LANGS)[number];

let instance: Promise<Highlighter> | null = null;

function get() {
	instance ??= createHighlighter({
		themes: ["github-light", "github-dark-default"],
		langs: [...LANGS]
	});
	return instance;
}

export async function highlight(code: string, lang: CodeLang = "svelte"): Promise<string> {
	const highlighter = await get();
	return highlighter.codeToHtml(code, {
		lang,
		themes: { light: "github-light", dark: "github-dark-default" },
		defaultColor: "light"
	});
}
