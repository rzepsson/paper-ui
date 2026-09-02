import { json } from "@sveltejs/kit";
import { buildRegistryIndex } from "$lib/docs/registry-json";
import type { RequestHandler } from "./$types";

// Lives here rather than at /r, which has to stay a directory for the items beneath it.
export const GET: RequestHandler = () =>
	json(buildRegistryIndex(), { headers: { "cache-control": "public, max-age=3600" } });

export const prerender = true;
