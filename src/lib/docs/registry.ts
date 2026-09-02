import type { DocEntry } from "./types";

const modules = import.meta.glob<{ default: DocEntry }>("./entries/*.ts", { eager: true });

export const entries: DocEntry[] = Object.values(modules)
	.map((m) => m.default)
	.sort((a, b) => a.title.localeCompare(b.title));

export const entriesBySlug = new Map(entries.map((e) => [e.slug, e]));

export function getEntry(slug: string): DocEntry | undefined {
	return entriesBySlug.get(slug);
}

const CATEGORY_ORDER = ["Forms", "Overlays", "Navigation", "Data display", "Feedback"];

export type NavGroup = { category: string; items: { slug: string; title: string }[] };

export const navGroups: NavGroup[] = CATEGORY_ORDER.map((category) => ({
	category,
	items: entries
		.filter((e) => e.category === category)
		.map((e) => ({ slug: e.slug, title: e.title }))
})).filter((group) => group.items.length > 0);

export const flatNav = navGroups.flatMap((g) => g.items);

export function getNeighbours(slug: string) {
	const index = flatNav.findIndex((item) => item.slug === slug);
	return {
		previous: index > 0 ? flatNav[index - 1] : undefined,
		next: index >= 0 && index < flatNav.length - 1 ? flatNav[index + 1] : undefined
	};
}
