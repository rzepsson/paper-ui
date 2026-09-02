import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "select",
	name: "Select",
	title: "Select",
	description:
		"Picks one value, or several, from a list. Typing while it is open jumps to the matching option, and the listbox stays inside the viewport on its own.",
	category: "Forms",
	primitive: "Select",
	anatomy: `<script lang="ts">
  import * as Select from "$lib/components/ui/select";
</script>

<Select.Root type="single" bind:value>
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.GroupHeading />
      <Select.Item value="a" label="A" />
    </Select.Group>
    <Select.Separator />
  </Select.Content>
</Select.Root>`,
	examples: [
		{ id: "default", title: "Single", description: "`type=\"single\"` binds `value` to a string." },
		{ id: "groups", title: "Groups", description: "Headings and separators structure a longer list." },
		{
			id: "multiple",
			title: "Multiple",
			description: "`type=\"multiple\"` binds an array. `type=\"checkbox\"` on an item swaps the tick for a box."
		}
	],
	props: [
		{
			title: "Select.Root",
			rows: [
				{
					name: "type",
					type: '"single" | "multiple"',
					description: "Required. Decides whether `value` is a string or a string array."
				},
				{
					name: "value",
					type: "string | string[]",
					default: '"" | []',
					description: "Bindable current selection."
				},
				{
					name: "onValueChange",
					type: "(value: string | string[]) => void",
					default: "undefined",
					description: "Called when the selection changes."
				},
				{ name: "open", type: "boolean", default: "false", description: "Bindable open state." },
				{ name: "disabled", type: "boolean", default: "false", description: "Blocks the trigger." },
				{ name: "name", type: "string", default: "undefined", description: "Submits the value with a form." }
			]
		},
		{
			title: "Select.Trigger",
			rows: [
				{
					name: "variant",
					type: '"default" | "basic"',
					default: '"default"',
					description: "Which colour the border takes on focus and while open."
				},
				{
					name: "child",
					type: "Snippet",
					default: "undefined",
					description: "Render your own trigger element instead of the default button."
				}
			]
		},
		{
			title: "Select.Content",
			rows: [
				{
					name: "side",
					type: '"top" | "right" | "bottom" | "left"',
					default: '"bottom"',
					description: "Preferred side; flips automatically when there is no room."
				},
				{
					name: "align",
					type: '"start" | "center" | "end"',
					default: '"start"',
					description: "Alignment against the trigger."
				},
				{ name: "sideOffset", type: "number", default: "6", description: "Gap between trigger and list, in px." }
			]
		},
		{
			title: "Select.Item",
			rows: [
				{ name: "value", type: "string", description: "Required. What gets written to `value`." },
				{ name: "label", type: "string", default: "undefined", description: "Visible text and typeahead target." },
				{
					name: "type",
					type: '"default" | "checkbox"',
					default: '"default"',
					description: "`checkbox` draws a box instead of a tick, for multi-select lists."
				},
				{ name: "disabled", type: "boolean", default: "false", description: "Skipped by pointer and keyboard." }
			]
		}
	],
	keyboard: [
		{ keys: "Space / Enter", description: "Opens the list, or picks the highlighted option." },
		{ keys: "Arrow Up / Down", description: "Moves the highlight." },
		{ keys: "Home / End", description: "Jumps to the first or last option." },
		{ keys: "A-Z", description: "Typeahead to the option starting with those characters." },
		{ keys: "Esc", description: "Closes without changing the value." }
	]
};

export default entry;
