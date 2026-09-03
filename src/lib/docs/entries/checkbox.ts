import type { DocEntry } from "../types";
import Playground from "../playgrounds/checkbox.svelte";

const entry: DocEntry = {
	slug: "checkbox",
	name: "Checkbox",
	title: "Checkbox",
	description:
		"A tri-state box for values committed on submit. Passing children renders a label wired to the box, so the whole row is clickable.",
	category: "Forms",
	primitive: "Checkbox",
	examples: [
		{ id: "default", title: "With a label", description: "Children become the label; the `id` is generated for you." },
		{ id: "states", title: "States", description: "Indeterminate draws a dash instead of a tick." },
		{
			id: "variants",
			title: "Variants",
			description: "Both land in the same state; only the way they get there differs."
		},
		{
			id: "group",
			title: "Group",
			description: "`Checkbox.Group` collects the checked `value`s of its children into one array."
		}
	],
	playground: {
		component: Playground,
		controls: [
			{
				kind: "select",
				prop: "variant",
				label: "Variant",
				options: ["default", "draw"],
				default: "default"
			},
			{ kind: "boolean", prop: "checked", label: "Checked", default: false },
			{ kind: "boolean", prop: "indeterminate", label: "Indeterminate", default: false },
			{ kind: "boolean", prop: "disabled", label: "Disabled", default: false },
			{ kind: "text", prop: "label", label: "Label", default: "Accept the terms" }
		],
		code: ({ variant, indeterminate, disabled, label }) => {
			const props = ["bind:checked"];
			if (variant !== "default") props.push(`variant="${variant}"`);
			if (indeterminate) props.push("bind:indeterminate");
			if (disabled) props.push("disabled");
			return `<Checkbox ${props.join(" ")}>\n  ${label || "Label"}\n</Checkbox>`;
		}
	},
	anatomy: `<script lang="ts">
  import * as Checkbox from "$lib/components/ui/checkbox";
</script>

<Checkbox.Group bind:value>
  <Checkbox.GroupLabel />
  <Checkbox.Root value="a" />
  <Checkbox.Root value="b" />
</Checkbox.Group>`,
	props: [
		{
			title: "Checkbox.Root",
			rows: [
				{ name: "checked", type: "boolean", default: "false", description: "Bindable with `bind:checked`." },
				{
					name: "indeterminate",
					type: "boolean",
					default: "false",
					description: "Bindable. Draws a dash and takes priority over `checked` visually."
				},
				{
					name: "variant",
					type: '"default" | "draw"',
					default: '"default"',
					description: "`draw` strokes the tick on instead of fading it, and pops the box."
				},
				{
					name: "value",
					type: "string",
					default: "undefined",
					description: "The value contributed to the surrounding `Checkbox.Group`."
				},
				{
					name: "onCheckedChange",
					type: "(checked: boolean) => void",
					default: "undefined",
					description: "Called when the box is ticked or cleared."
				},
				{ name: "disabled", type: "boolean", default: "false", description: "Blocks interaction." },
				{
					name: "id",
					type: "string",
					default: "generated",
					description: "Shared with the rendered label through `for`."
				},
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "Rendered as the label beside the box."
				}
			]
		},
		{
			title: "Checkbox.Group",
			rows: [
				{
					name: "value",
					type: "string[]",
					default: "[]",
					description: "Bindable array of the checked children's `value`s."
				},
				{
					name: "onValueChange",
					type: "(value: string[]) => void",
					default: "undefined",
					description: "Called when the selection changes."
				},
				{
					name: "name",
					type: "string",
					default: "undefined",
					description: "Submits the group's values with a form."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Space", description: "Toggles the focused box." },
		{ keys: "Tab", description: "Moves between boxes." }
	]
};

export default entry;
