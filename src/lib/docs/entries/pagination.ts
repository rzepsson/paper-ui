import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "pagination",
	name: "Pagination",
	title: "Pagination",
	description:
		"Steps through a paged result set. The page list ellipsises itself around the current page, so the control keeps a fixed width however many pages there are.",
	category: "Navigation",
	primitive: "Pagination",
	examples: [
		{ id: "default", title: "Default", description: "`count` is the total number of items, not pages." },
		{
			id: "siblings",
			title: "Sibling count",
			description: "How many page numbers stay visible either side of the current one."
		}
	],
	props: [
		{
			title: "Pagination",
			rows: [
				{ name: "count", type: "number", description: "Required. Total number of items across all pages." },
				{ name: "perPage", type: "number", default: "10", description: "Items on one page." },
				{ name: "page", type: "number", default: "1", description: "Bindable current page, 1-based." },
				{
					name: "siblingCount",
					type: "number",
					default: "1",
					description: "Page numbers kept visible either side of the current page."
				},
				{
					name: "onPageChange",
					type: "(page: number) => void",
					default: "undefined",
					description: "Called when the page changes."
				},
				{
					name: "loop",
					type: "boolean",
					default: "false",
					description: "Whether the previous/next buttons wrap around the ends."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Arrow Left / Right", description: "Steps one page back or forward." },
		{ keys: "Home / End", description: "Jumps to the first or last page." }
	]
};

export default entry;
