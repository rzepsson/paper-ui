import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "sheet",
	name: "Sheet",
	title: "Sheet",
	description:
		"A dialog anchored to an edge of the screen. It is the same modal machinery as Dialog, so focus and scroll locking behave identically - only the entrance differs.",
	category: "Overlays",
	primitive: "Dialog",
	anatomy: `<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet";
</script>

<Sheet.Root bind:open>
  <Sheet.Trigger />
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title />
      <Sheet.Description />
    </Sheet.Header>
    <Sheet.Footer />
  </Sheet.Content>
</Sheet.Root>`,
	examples: [
		{ id: "sides", title: "Sides", description: "The portal and overlay are built into Sheet.Content." },
		{ id: "detail-panel", title: "Detail panel", description: "The shape it usually takes next to a table." }
	],
	props: [
		{
			title: "Sheet.Root",
			rows: [
				{ name: "open", type: "boolean", default: "false", description: "Bindable open state." },
				{
					name: "onOpenChange",
					type: "(open: boolean) => void",
					default: "undefined",
					description: "Called when the sheet opens or closes."
				}
			]
		},
		{
			title: "Sheet.Content",
			rows: [
				{
					name: "side",
					type: '"left" | "right" | "top" | "bottom"',
					default: '"right"',
					description: "Which edge it slides in from."
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Where a custom width or height goes, e.g. `sm:max-w-lg`."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Esc", description: "Closes the sheet." },
		{ keys: "Tab", description: "Cycles focus within the sheet." }
	]
};

export default entry;
