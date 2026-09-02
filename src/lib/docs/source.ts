import type { Component } from "svelte";

const exampleModules = import.meta.glob<{ default: Component }>("./examples/**/*.svelte", {
	eager: true
});

const exampleSources = import.meta.glob<string>("./examples/**/*.svelte", {
	eager: true,
	query: "?raw",
	import: "default"
});

const librarySources = import.meta.glob<string>("../components/ui/**/*.{svelte,ts}", {
	eager: true,
	query: "?raw",
	import: "default"
});

function exampleKey(slug: string, id: string) {
	return `./examples/${slug}/${id}.svelte`;
}

export function getExampleComponent(slug: string, id: string): Component | undefined {
	return exampleModules[exampleKey(slug, id)]?.default;
}

export function getExampleSource(slug: string, id: string): string {
	return (exampleSources[exampleKey(slug, id)] ?? "").trimEnd();
}

export function getLibraryFiles(dir: string): string[] {
	const prefix = `../components/ui/${dir}/`;
	return Object.keys(librarySources)
		.filter((key) => key.startsWith(prefix))
		.map((key) => key.slice("../components/ui/".length))
		.sort();
}

export function getLibrarySource(relativePath: string): string {
	return librarySources[`../components/ui/${relativePath}`] ?? "";
}

export { default as UTILS_SOURCE } from "../utils.ts?raw";
export { default as THEME_CSS } from "../../routes/layout.css?raw";
