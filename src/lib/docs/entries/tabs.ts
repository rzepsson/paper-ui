import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "tabs",
	name: "Tabs",
	title: "Tabs",
	description:
		"Switches between views that sit at the same level. The active tab is marked by an underline that slides rather than a filled pill.",
	category: "Navigation",
	primitive: "Tabs",
	anatomy: `<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
</script>

<Tabs.Root bind:value>
  <Tabs.List>
    <Tabs.Trigger value="a" />
  </Tabs.List>
  <Tabs.Content value="a" />
</Tabs.Root>`,
	examples: [
		{ id: "default", title: "Default", description: "Triggers can hold a badge or an icon alongside the label." },
		{ id: "controlled", title: "Controlled", description: "`bind:value` lets anything else move the selection." }
	],
	props: [
		{
			title: "Tabs.Root",
			rows: [
				{ name: "value", type: "string", default: "undefined", description: "Bindable value of the active tab." },
				{
					name: "onValueChange",
					type: "(value: string) => void",
					default: "undefined",
					description: "Called when the active tab changes."
				},
				{
					name: "orientation",
					type: '"horizontal" | "vertical"',
					default: '"horizontal"',
					description: "Which arrow keys move between tabs."
				},
				{
					name: "activationMode",
					type: '"automatic" | "manual"',
					default: '"automatic"',
					description: "Whether arrowing to a tab activates it or only focuses it."
				}
			]
		},
		{
			title: "Tabs.Trigger",
			rows: [
				{ name: "value", type: "string", description: "Required. Matches the `value` of a `Tabs.Content`." },
				{ name: "disabled", type: "boolean", default: "false", description: "Skipped by pointer and keyboard." }
			]
		},
		{
			title: "Tabs.Content",
			rows: [{ name: "value", type: "string", description: "Required. The trigger this panel belongs to." }]
		}
	],
	keyboard: [
		{ keys: "Arrow Left / Right", description: "Moves between tabs in a horizontal list." },
		{ keys: "Home / End", description: "Jumps to the first or last tab." },
		{ keys: "Tab", description: "Moves focus from the tab list into the active panel." }
	]
};

export default entry;
