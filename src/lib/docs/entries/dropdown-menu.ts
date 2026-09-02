import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "dropdown-menu",
	name: "DropdownMenu",
	title: "Dropdown menu",
	description:
		"A menu of actions hung off a trigger. It supports submenus, checkable rows and radio groups, and stays inside the viewport by flipping when it runs out of room.",
	category: "Overlays",
	primitive: "DropdownMenu",
	anatomy: `<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<DropdownMenu.Root bind:open>
  <DropdownMenu.Trigger />
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading />
      <DropdownMenu.Item>
        <DropdownMenu.ItemText>
          <DropdownMenu.ItemLabel />
          <DropdownMenu.ItemDescription />
        </DropdownMenu.ItemText>
        <DropdownMenu.Shortcut />
      </DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.CheckboxItem />
      <DropdownMenu.RadioGroup>
        <DropdownMenu.GroupHeading />
        <DropdownMenu.RadioItem />
      </DropdownMenu.RadioGroup>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger />
        <DropdownMenu.SubContent />
      </DropdownMenu.Sub>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>`,
	examples: [
		{ id: "default", title: "Actions", description: "`onSelect` fires and the menu closes." },
		{
			id: "rich-items",
			title: "Two-line items and submenus",
			description: "`ItemText` stacks a label over a description; `Sub` nests a second menu."
		},
		{
			id: "radio-group",
			title: "Radio group",
			description: "`closeOnSelect={false}` keeps the menu open so several picks can be made in a row."
		}
	],
	props: [
		{
			title: "DropdownMenu.Root",
			rows: [
				{ name: "open", type: "boolean", default: "false", description: "Bindable open state." },
				{
					name: "onOpenChange",
					type: "(open: boolean) => void",
					default: "undefined",
					description: "Called when the menu opens or closes."
				}
			]
		},
		{
			title: "DropdownMenu.Content",
			rows: [
				{
					name: "side",
					type: '"top" | "right" | "bottom" | "left"',
					default: '"bottom"',
					description: "Preferred side of the trigger."
				},
				{
					name: "align",
					type: '"start" | "center" | "end"',
					default: '"start"',
					description: "Alignment along that side."
				},
				{ name: "sideOffset", type: "number", default: "6", description: "Gap from the trigger, in px." }
			]
		},
		{
			title: "DropdownMenu.Item",
			rows: [
				{
					name: "onSelect",
					type: "(event: Event) => void",
					default: "undefined",
					description: "Called on activation."
				},
				{
					name: "closeOnSelect",
					type: "boolean",
					default: "true",
					description: "Set false to keep the menu open after a pick."
				},
				{ name: "disabled", type: "boolean", default: "false", description: "Skipped by pointer and keyboard." },
				{
					name: "textValue",
					type: "string",
					default: "undefined",
					description: "What typeahead matches against when the label is not plain text."
				}
			]
		},
		{
			title: "DropdownMenu.GroupHeading",
			description:
				"Must sit inside a `DropdownMenu.Group` or `DropdownMenu.RadioGroup` - it labels that group through aria-labelledby, and throws if there is no group around it.",
			rows: [
				{
					name: "children",
					type: "Snippet",
					default: "undefined",
					description: "The heading text, or an `ItemText` block for a two-line heading."
				}
			]
		},
		{
			title: "CheckboxItem / RadioGroup / RadioItem",
			rows: [
				{
					name: "checked",
					type: "boolean",
					default: "false",
					description: "Bindable, on `CheckboxItem`."
				},
				{
					name: "value",
					type: "string",
					default: "undefined",
					description: "Bindable on `RadioGroup`; required on each `RadioItem`."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Space / Enter", description: "Opens the menu, or activates the highlighted item." },
		{ keys: "Arrow Up / Down", description: "Moves the highlight." },
		{ keys: "Arrow Right / Left", description: "Opens or closes a submenu." },
		{ keys: "A-Z", description: "Typeahead to a matching item." },
		{ keys: "Esc", description: "Closes the menu and restores focus to the trigger." }
	]
};

export default entry;
