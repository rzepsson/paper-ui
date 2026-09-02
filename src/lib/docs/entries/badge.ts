import type { DocEntry } from "../types";
import Playground from "../playgrounds/badge.svelte";

const entry: DocEntry = {
	slug: "badge",
	name: "Badge",
	title: "Badge",
	description:
		"A small, static label for status or category. It renders a span, not a control, so it never lands in the tab order.",
	category: "Data display",
	examples: [
		{ id: "variants", title: "Variants", description: "The four solid weights." },
		{
			id: "status",
			title: "Status colours",
			description: "Soft-tinted variants for the states a row can be in. Icons are sized by the badge."
		},
		{ id: "in-context", title: "In a list", description: "How the tints read against a card surface." }
	],
	playground: {
		component: Playground,
		controls: [
			{
				kind: "select",
				prop: "variant",
				label: "Variant",
				options: ["default", "secondary", "outline", "destructive", "success", "warning", "info"],
				default: "default"
			},
			{ kind: "text", prop: "label", label: "Text", default: "Badge" }
		],
		code: ({ variant, label }) =>
			variant === "default"
				? `<Badge>${label || "Badge"}</Badge>`
				: `<Badge variant="${variant}">${label || "Badge"}</Badge>`
	},
	props: [
		{
			title: "Badge",
			rows: [
				{
					name: "variant",
					type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info"',
					default: '"default"',
					description: "Colour treatment. The last three are soft tints meant for status."
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Merged over the defaults with `cn()`."
				}
			]
		}
	]
};

export default entry;
