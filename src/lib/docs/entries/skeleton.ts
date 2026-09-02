import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "skeleton",
	name: "Skeleton",
	title: "Skeleton",
	description:
		"A placeholder block for content that has not arrived. It carries a shimmer that stops on its own when the visitor has asked for reduced motion.",
	category: "Feedback",
	examples: [
		{ id: "default", title: "Text lines", description: "Give each block the height and width of what it stands in for." },
		{ id: "card", title: "Card", description: "" }
	],
	props: [
		{
			title: "Skeleton",
			description: "A plain div, so every HTML attribute is forwarded.",
			rows: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Where the size comes from - the component ships no dimensions of its own."
				}
			]
		}
	]
};

export default entry;
