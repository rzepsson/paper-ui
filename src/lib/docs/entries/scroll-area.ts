import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "scroll-area",
	name: "ScrollArea",
	title: "Scroll area",
	description:
		"A scroll container with a consistent scrollbar across browsers. Native scrolling, wheel, touch and keyboard all still work; only the bar is redrawn.",
	category: "Data display",
	primitive: "ScrollArea",
	examples: [
		{
			id: "vertical",
			title: "Vertical",
			description: "The height has to come from the class - the area does not size itself."
		},
		{ id: "horizontal", title: "Horizontal", description: "Pass `orientation` to choose which bars appear." }
	],
	props: [
		{
			title: "ScrollArea",
			rows: [
				{
					name: "orientation",
					type: '"vertical" | "horizontal" | "both"',
					default: '"vertical"',
					description: "Which scrollbars are rendered."
				},
				{
					name: "type",
					type: '"auto" | "always" | "scroll" | "hover"',
					default: '"hover"',
					description: "When the scrollbar is visible."
				},
				{
					name: "viewportClass",
					type: "string",
					default: '""',
					description: "Classes for the inner viewport, rather than the outer frame."
				},
				{ name: "class", type: "string", default: '""', description: "Classes for the outer frame, including its size." }
			]
		}
	]
};

export default entry;
