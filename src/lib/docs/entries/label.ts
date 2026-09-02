import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "label",
	name: "Label",
	title: "Label",
	description:
		"Names a form control. Clicking it moves focus to the input it points at, and it dims automatically when that input is disabled.",
	category: "Forms",
	primitive: "Label",
	examples: [
		{
			id: "default",
			title: "With an input",
			description: "`for` has to match the input's `id` for the click-to-focus behaviour to work."
		},
		{ id: "with-hint", title: "With a hint", description: "Pair it with helper text under the field." }
	],
	props: [
		{
			title: "Label",
			rows: [
				{
					name: "for",
					type: "string",
					default: "undefined",
					description: "The `id` of the control this labels."
				},
				{
					name: "child",
					type: "Snippet",
					default: "undefined",
					description: "Renders your own element instead of the default `label`, receiving the props to spread."
				},
				{ name: "class", type: "string", default: '""', description: "Merged over the defaults with `cn()`." }
			]
		}
	]
};

export default entry;
