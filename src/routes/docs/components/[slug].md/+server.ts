import { error } from "@sveltejs/kit";
import { entries as docEntries, getEntry } from "$lib/docs/registry";
import { entryToMarkdown } from "$lib/docs/markdown";
import type { EntryGenerator, RequestHandler } from "./$types";

export const GET: RequestHandler = ({ params }) => {
	const entry = getEntry(params.slug);
	if (!entry) error(404, `No component is documented under "${params.slug}"`);

	return new Response(entryToMarkdown(entry), {
		headers: {
			"content-type": "text/markdown; charset=utf-8",
			"cache-control": "public, max-age=3600"
		}
	});
};

export const prerender = true;

export const entries: EntryGenerator = () => docEntries.map((entry) => ({ slug: entry.slug }));
