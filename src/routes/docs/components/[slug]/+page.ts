import { error } from "@sveltejs/kit";
import { getEntry, getNeighbours } from "$lib/docs/registry";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	const entry = getEntry(params.slug);
	if (!entry) error(404, `No component is documented under "${params.slug}"`);

	return { entry, ...getNeighbours(params.slug) };
};
