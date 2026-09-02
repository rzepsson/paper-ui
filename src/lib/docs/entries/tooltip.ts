import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "tooltip",
	name: "Tooltip",
	title: "Tooltip",
	description:
		"A short hint shown on hover or focus. It cannot take focus itself, so never put a control or anything essential inside one - name icon-only buttons with aria-label as well.",
	category: "Overlays",
	primitive: "Tooltip",
	anatomy: `<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<Tooltip.Root delayDuration={700}>
  <Tooltip.Trigger />
  <Tooltip.Content />
</Tooltip.Root>`,
	examples: [
		{ id: "default", title: "On icon buttons", description: "The most common use, and the one that needs an aria-label too." },
		{ id: "delay", title: "Delay", description: "How long the pointer has to rest before the hint appears." }
	],
	props: [
		{
			title: "Tooltip.Root",
			description:
				"Each root wraps its own provider, so a tooltip works standalone. Wrap a subtree in `Tooltip.Provider` to share one delay across many.",
			rows: [
				{ name: "open", type: "boolean", default: "false", description: "Bindable open state." },
				{
					name: "delayDuration",
					type: "number",
					default: "700",
					description: "Milliseconds the pointer must rest before the tooltip opens."
				},
				{
					name: "disableHoverableContent",
					type: "boolean",
					default: "false",
					description: "Closes as soon as the pointer leaves the trigger, even if it moves onto the tooltip."
				}
			]
		},
		{
			title: "Tooltip.Content",
			rows: [
				{
					name: "side",
					type: '"top" | "right" | "bottom" | "left"',
					default: '"top"',
					description: "Preferred side of the trigger."
				},
				{
					name: "align",
					type: '"start" | "center" | "end"',
					default: '"center"',
					description: "Alignment along that side."
				},
				{ name: "sideOffset", type: "number", default: "8", description: "Gap from the trigger, in px." }
			]
		}
	],
	keyboard: [
		{ keys: "Tab", description: "Focusing the trigger opens the tooltip immediately." },
		{ keys: "Esc", description: "Dismisses it." }
	]
};

export default entry;
