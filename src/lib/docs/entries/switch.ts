import type { DocEntry } from "../types";
import Playground from "../playgrounds/switch.svelte";

const entry: DocEntry = {
	slug: "switch",
	name: "Switch",
	title: "Switch",
	description:
		"An on/off control that applies its change immediately. Reach for a checkbox instead when the value is only committed on submit.",
	category: "Forms",
	primitive: "Switch",
	examples: [
		{ id: "default", title: "With a label", description: "Give it an `id` so the label can point at it." },
		{ id: "settings-row", title: "Settings list", description: "The shape it usually appears in." },
		{ id: "disabled", title: "Disabled", description: "" }
	],
	playground: {
		component: Playground,
		controls: [
			{ kind: "boolean", prop: "checked", label: "Checked", default: false },
			{ kind: "boolean", prop: "disabled", label: "Disabled", default: false }
		],
		code: ({ checked, disabled }) => {
			const props = ["bind:checked"];
			if (disabled) props.push("disabled");
			return `<Switch ${props.join(" ")} />` + (checked ? "\n<!-- checked starts as true -->" : "");
		}
	},
	props: [
		{
			title: "Switch",
			rows: [
				{
					name: "checked",
					type: "boolean",
					default: "false",
					description: "Bindable with `bind:checked`."
				},
				{
					name: "onCheckedChange",
					type: "(checked: boolean) => void",
					default: "undefined",
					description: "Called whenever the state flips."
				},
				{ name: "disabled", type: "boolean", default: "false", description: "Blocks interaction." },
				{
					name: "name",
					type: "string",
					default: "undefined",
					description: "Renders a hidden input so the value is submitted with a form."
				},
				{
					name: "ref",
					type: "HTMLButtonElement | null",
					default: "null",
					description: "Bindable reference to the element."
				},
				{ name: "class", type: "string", default: '""', description: "Merged over the defaults with `cn()`." }
			]
		}
	],
	keyboard: [
		{ keys: "Space / Enter", description: "Toggles the switch." },
		{ keys: "Tab", description: "Moves focus onto the switch." }
	]
};

export default entry;
