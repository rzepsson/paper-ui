import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "accordion",
	name: "Accordion",
	title: "Accordion",
	description:
		"Panels that expand one at a time, or several at once. The open and close heights are animated from the measured content, so nothing jumps.",
	category: "Data display",
	primitive: "Accordion",
	anatomy: `<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
</script>

<Accordion.Root type="single" bind:value>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger />
    </Accordion.Header>
    <Accordion.Content />
  </Accordion.Item>
</Accordion.Root>`,
	examples: [
		{ id: "default", title: "Single", description: "One panel open at a time; `value` is a string." },
		{ id: "multiple", title: "Multiple", description: "`type=\"multiple\"` binds an array of open item values." },
		{ id: "quiet", title: "Quiet variant", description: "No rules between rows." }
	],
	props: [
		{
			title: "Accordion.Root",
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
					description: "Bindable value of the open item(s)."
				},
				{
					name: "variant",
					type: '"default" | "quiet"',
					default: '"default"',
					description: "`quiet` removes the dividing rules."
				},
				{
					name: "onValueChange",
					type: "(value: string | string[]) => void",
					default: "undefined",
					description: "Called when a panel opens or closes."
				},
				{ name: "disabled", type: "boolean", default: "false", description: "Disables every item." }
			]
		},
		{
			title: "Accordion.Item",
			rows: [
				{ name: "value", type: "string", description: "Required. Identifies the item in `value`." },
				{ name: "disabled", type: "boolean", default: "false", description: "Blocks just this item." }
			]
		},
		{
			title: "Accordion.Header",
			rows: [
				{
					name: "level",
					type: "1 | 2 | 3 | 4 | 5 | 6",
					default: "3",
					description: "Heading level rendered around the trigger, for the document outline."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Space / Enter", description: "Opens or closes the focused panel." },
		{ keys: "Arrow Up / Down", description: "Moves between triggers." },
		{ keys: "Home / End", description: "Jumps to the first or last trigger." }
	]
};

export default entry;
