import { getLibraryFiles } from "./source";
import type { DocEntry } from "./types";

export const REGISTRY_BASE = "https://paper-ui.com";

export function registryUrl(slug: string) {
	return `${REGISTRY_BASE}/r/${slug}.json`;
}

export function cliCommand(slug: string) {
	return `npx shadcn-svelte@latest add ${registryUrl(slug)}`;
}

export function componentDir(entry: DocEntry) {
	return entry.dir ?? entry.slug;
}

export function componentFiles(entry: DocEntry) {
	return getLibraryFiles(componentDir(entry));
}
