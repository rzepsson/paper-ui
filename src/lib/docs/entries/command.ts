import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "command",
	name: "Command",
	title: "Command",
	description:
		"A filterable list of commands, driven entirely from the keyboard. Use it inline as a picker, or in a dialog as an app-wide palette.",
	category: "Overlays",
	primitive: "Command",
	anatomy: `<script lang="ts">
  import * as Command from "$lib/components/ui/command";
</script>

<Command.Root>
  <Command.Input />
  <Command.List>
    <Command.Empty />
    <Command.Group heading="Group">
      <Command.Item>
        <Command.Shortcut />
      </Command.Item>
    </Command.Group>
    <Command.Separator />
  </Command.List>
</Command.Root>`,
	examples: [
		{
			id: "inline",
			title: "Inline",
			description: "The height comes from the wrapper - Command.Root fills whatever box it is given."
		},
		{
			id: "dialog",
			title: "As a palette",
			description: "Command.Dialog bundles the dialog, portal and overlay. Try ⌘J or Ctrl+J."
		}
	],
	props: [
		{
			title: "Command.Root",
			rows: [
				{ name: "value", type: "string", default: "undefined", description: "Bindable value of the highlighted item." },
				{
					name: "filter",
					type: "(value: string, search: string) => number",
					default: "fuzzy match",
					description: "Replace the scoring function to change how results rank."
				},
				{
					name: "shouldFilter",
					type: "boolean",
					default: "true",
					description: "Set false when you filter the list yourself, e.g. against a server."
				},
				{ name: "loop", type: "boolean", default: "false", description: "Whether the highlight wraps at the ends." }
			]
		},
		{
			title: "Command.Item",
			rows: [
				{
					name: "value",
					type: "string",
					default: "the item's text",
					description: "What the search is matched against."
				},
				{
					name: "onSelect",
					type: "(value: string) => void",
					default: "undefined",
					description: "Called when the item is picked."
				},
				{ name: "disabled", type: "boolean", default: "false", description: "Skipped by search and keyboard." }
			]
		},
		{
			title: "Command.Dialog",
			rows: [{ name: "open", type: "boolean", default: "false", description: "Bindable open state." }]
		}
	],
	keyboard: [
		{ keys: "Arrow Up / Down", description: "Moves the highlight through the filtered results." },
		{ keys: "Enter", description: "Runs the highlighted command." },
		{ keys: "Esc", description: "Closes the dialog." }
	]
};

export default entry;
