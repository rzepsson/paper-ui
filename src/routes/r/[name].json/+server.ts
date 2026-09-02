import { error, json } from "@sveltejs/kit";
import { buildRegistryItem, registryNames } from "$lib/docs/registry-json";
import type { EntryGenerator, RequestHandler } from "./$types";

export const GET: RequestHandler = ({ params }) => {
	const item = buildRegistryItem(params.name);
	if (!item) error(404, `No registry item named "${params.name}"`);

	return json(item, {
		headers: { "cache-control": "public, max-age=3600" }
	});
};

export const prerender = true;

export const entries: EntryGenerator = () => registryNames.map((name) => ({ name }));
