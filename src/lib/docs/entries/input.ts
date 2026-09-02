import type { DocEntry } from "../types";
import Playground from "../playgrounds/input.svelte";

const entry: DocEntry = {
	slug: "input",
	name: "Input",
	title: "Input",
	description:
		"A single-line text field. It is a plain `input` element, so every native attribute and every input type works as you would expect.",
	category: "Forms",
	examples: [
		{ id: "default", title: "Bound value", description: "`bind:value` gives you two-way binding." },
		{
			id: "variants",
			title: "Variants",
			description: "`default` accents the focused border with the primary colour; `basic` keeps it neutral."
		},
		{ id: "types", title: "Input types", description: "Anything the platform supports." },
		{ id: "disabled", title: "Disabled", description: "" }
	],
	playground: {
		component: Playground,
		controls: [
			{ kind: "select", prop: "variant", label: "Variant", options: ["default", "basic"], default: "default" },
			{ kind: "boolean", prop: "disabled", label: "Disabled", default: false },
			{ kind: "text", prop: "placeholder", label: "Placeholder", default: "Type something" }
		],
		code: ({ variant, placeholder, disabled }) => {
			const props: string[] = [];
			if (variant !== "default") props.push(`variant="${variant}"`);
			if (placeholder) props.push(`placeholder="${placeholder}"`);
			if (disabled) props.push("disabled");
			return `<Input${props.length ? " " + props.join(" ") : ""} />`;
		}
	},
	props: [
		{
			title: "Input",
			description: "Every attribute of a native `input` is forwarded on top of these.",
			rows: [
				{
					name: "variant",
					type: '"default" | "basic"',
					default: '"default"',
					description: "Which colour the border takes on focus."
				},
				{
					name: "value",
					type: "string | number",
					default: "undefined",
					description: "Bindable with `bind:value`."
				},
				{
					name: "ref",
					type: "HTMLInputElement | null",
					default: "null",
					description: "Bindable reference to the element."
				},
				{ name: "class", type: "string", default: '""', description: "Merged over the defaults with `cn()`." }
			]
		}
	]
};

export default entry;
