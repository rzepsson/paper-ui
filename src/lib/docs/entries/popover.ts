import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "popover",
	name: "Popover",
	title: "Popover",
	description:
		"A non-modal panel anchored to its trigger. It takes focus, so unlike a tooltip it can hold inputs and buttons.",
	category: "Overlays",
	primitive: "Popover",
	anatomy: `<script lang="ts">
  import * as Popover from "$lib/components/ui/popover";
</script>

<Popover.Root bind:open>
  <Popover.Trigger />
  <Popover.Content>
    <Popover.Close />
  </Popover.Content>
</Popover.Root>`,
	examples: [
		{ id: "default", title: "With a form", description: "The portal is built into Popover.Content." },
		{
			id: "placement",
			title: "Placement",
			description: "The chosen side is a preference - it flips when the panel would fall off screen."
		}
	],
	props: [
		{
			title: "Popover.Root",
			rows: [
				{ name: "open", type: "boolean", default: "false", description: "Bindable open state." },
				{
					name: "onOpenChange",
					type: "(open: boolean) => void",
					default: "undefined",
					description: "Called when the popover opens or closes."
				}
			]
		},
		{
			title: "Popover.Content",
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
					default: '"center"',
					description: "Alignment along that side."
				},
				{ name: "sideOffset", type: "number", default: "8", description: "Gap from the trigger, in px." },
				{
					name: "interactOutsideBehavior",
					type: '"close" | "ignore"',
					default: '"close"',
					description: "What an outside click does."
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Where a width goes. The default `min-w-72` can be overridden here."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Space / Enter", description: "Opens the popover from the trigger." },
		{ keys: "Esc", description: "Closes it and returns focus to the trigger." },
		{ keys: "Tab", description: "Moves through the popover's own controls." }
	]
};

export default entry;
