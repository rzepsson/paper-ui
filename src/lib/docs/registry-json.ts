import { entries, getEntry } from "./registry";
import { componentDir, componentFiles, REGISTRY_BASE } from "./install";
import { getLibrarySource, UTILS_SOURCE } from "./source";
import { baseCss, cssVars } from "./theme-tokens";

export type RegistryItemType = "registry:ui" | "registry:lib" | "registry:style";

export type RegistryFile = {
	path: string;
	content: string;
	type: RegistryItemType;
	target: string;
};

export type RegistryItem = {
	$schema: string;
	name: string;
	type: RegistryItemType;
	title: string;
	description: string;
	dependencies?: string[];
	registryDependencies?: string[];
	files?: RegistryFile[];
	cssVars?: typeof cssVars;
	css?: typeof baseCss;
};

const BASE_DEPENDENCIES = ["bits-ui", "clsx", "tailwind-merge"];

export const UTILS_ITEM = "utils";
export const INIT_ITEM = "init";

const itemUrl = (name: string) => `${REGISTRY_BASE}/r/${name}.json`;

function dependenciesFor(sources: string[], extra: string[]) {
	const deps = new Set(BASE_DEPENDENCIES);
	for (const source of sources) {
		if (source.includes("lucide-svelte")) deps.add("lucide-svelte");
		if (source.includes("svelte-sonner")) deps.add("svelte-sonner");
	}
	for (const dep of extra) deps.add(dep);
	return [...deps].sort();
}

function registryDependenciesFor(sources: string[], self: string) {
	const found = new Set<string>();
	for (const source of sources) {
		for (const match of source.matchAll(/\$lib\/components\/ui\/([a-z-]+)/g)) {
			if (match[1] !== self) found.add(match[1]);
		}
	}
	const siblings = [...found].sort().map((dir) => itemUrl(dir === "sonner" ? "toast" : dir));
	return [itemUrl(UTILS_ITEM), ...siblings];
}

function utilsItem(): RegistryItem {
	return {
		$schema: "https://shadcn-svelte.com/schema/registry-item.json",
		name: UTILS_ITEM,
		type: "registry:lib",
		title: "cn()",
		description:
			"The class-merging helper every component runs its `class` prop through, plus the shared focus-ring and close-button classes.",
		dependencies: ["clsx", "tailwind-merge"],
		files: [
			{
				path: "lib/utils.ts",
				content: UTILS_SOURCE,
				type: "registry:lib",
				target: "src/lib/utils.ts"
			}
		]
	};
}

// Components depend on `utils` only, so adding one later never rewrites customised tokens.
function initItem(): RegistryItem {
	return {
		$schema: "https://shadcn-svelte.com/schema/registry-item.json",
		name: INIT_ITEM,
		type: "registry:style",
		title: "paperui base",
		description:
			"Design tokens, the base layer and cn(). Run this once before adding components.",
		dependencies: [...BASE_DEPENDENCIES, "lucide-svelte", "mode-watcher"].sort(),
		registryDependencies: [itemUrl(UTILS_ITEM)],
		cssVars,
		css: baseCss
	};
}

export function buildRegistryItem(name: string): RegistryItem | undefined {
	if (name === UTILS_ITEM) return utilsItem();
	if (name === INIT_ITEM) return initItem();

	const entry = getEntry(name);
	if (!entry) return undefined;

	const dir = componentDir(entry);
	const paths = componentFiles(entry);
	const sources = paths.map((path) => getLibrarySource(path));

	return {
		$schema: "https://shadcn-svelte.com/schema/registry-item.json",
		name: entry.slug,
		type: "registry:ui",
		title: entry.title,
		description: entry.description,
		dependencies: dependenciesFor(sources, entry.dependencies ?? []),
		registryDependencies: registryDependenciesFor(sources, dir),
		files: paths.map((path, index) => ({
			path: `ui/${path}`,
			content: sources[index],
			type: "registry:ui" as const,
			target: `src/lib/components/ui/${path}`
		}))
	};
}

export const registryNames = [INIT_ITEM, UTILS_ITEM, ...entries.map((entry) => entry.slug)];

export function buildRegistryIndex() {
	const base = [initItem(), utilsItem()].map((item) => ({
		name: item.name,
		type: item.type,
		title: item.title,
		description: item.description,
		url: itemUrl(item.name)
	}));

	return {
		$schema: "https://shadcn-svelte.com/schema/registry.json",
		name: "paperui",
		homepage: REGISTRY_BASE,
		items: [
			...base,
			...entries.map((entry) => ({
				name: entry.slug,
				type: "registry:ui" as const,
				title: entry.title,
				description: entry.description,
				url: itemUrl(entry.slug)
			}))
		]
	};
}
