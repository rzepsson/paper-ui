import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "table",
	name: "Table",
	title: "Table",
	description:
		"A data table with a sticky header, sorting, row selection and a loading state. You hand it columns and rows; a cell snippet takes over the rendering wherever you want something other than the raw value.",
	category: "Data display",
	examples: [
		{
			id: "default",
			title: "Columns and rows",
			description: "Every row needs an `id`. Column `class` is applied to both the header and its cells."
		},
		{
			id: "selection",
			title: "Selection and sorting",
			description:
				"Sorting is reported, not performed - `sortConfig` tells you what the reader asked for and you order the rows."
		},
		{ id: "loading", title: "Loading and empty", description: "Skeleton rows while loading, a message when there is nothing." },
		{ id: "quiet", title: "Quiet variant", description: "No outer frame, for a table sitting inside another card." }
	],
	props: [
		{
			title: "Table",
			rows: [
				{
					name: "columns",
					type: "Column[]",
					description: "Required. `{ key, label, class?, sortable? }` for each column."
				},
				{
					name: "rows",
					type: "T[]",
					description: "Required. Every row must carry a unique `id`."
				},
				{
					name: "selectionMode",
					type: '"none" | "single" | "multiple"',
					default: '"none"',
					description: "Adds a checkbox column and makes rows clickable."
				},
				{
					name: "selectedKeys",
					type: "(string | number)[]",
					default: "[]",
					description: "Bindable list of selected row ids."
				},
				{
					name: "sortConfig",
					type: '{ key: string; direction: "asc" | "desc" } | null',
					default: "null",
					description: "Bindable. Cycles asc → desc → cleared as a header is clicked."
				},
				{
					name: "onsort",
					type: "(config: SortConfig) => void",
					default: "undefined",
					description: "Called with the new sort, for fetching a re-sorted page from a server."
				},
				{ name: "isLoading", type: "boolean", default: "false", description: "Swaps the body for skeleton rows." },
				{
					name: "variant",
					type: '"default" | "quiet"',
					default: '"default"',
					description: "`quiet` drops the border, background and shadow."
				},
				{
					name: "checkboxVariant",
					type: '"default" | "basic"',
					default: '"default"',
					description: "Passed through to the selection checkboxes."
				},
				{
					name: "maxHeight",
					type: "string",
					default: '"600px"',
					description: "Height at which the body starts scrolling under the sticky header."
				},
				{
					name: "cell",
					type: "Snippet<[row, column]>",
					default: "undefined",
					description: "Renders a cell. Without it the raw `row[column.key]` is printed."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Tab", description: "Moves through the sortable headers and the selectable rows." },
		{ keys: "Space / Enter", description: "Selects the focused row, or applies the focused header's sort." }
	]
};

export default entry;
