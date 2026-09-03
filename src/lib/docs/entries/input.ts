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
			description:
				"`default` is the boxed field. `underline` drops the box and sweeps a rule out from the centre on focus."
		},
		{ id: "types", title: "Input types", description: "Anything the platform supports." },
		{ id: "disabled", title: "Disabled", description: "" }
	],
	playground: {
		component: Playground,
		controls: [
			{
				kind: "select",
				prop: "variant",
				label: "Variant",
				options: ["default", "underline"],
				default: "default"
			},
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
					type: '"default" | "underline"',
					default: '"default"',
					description: "`underline` swaps the box for a single rule that animates in on focus."
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
