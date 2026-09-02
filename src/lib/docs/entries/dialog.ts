import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "dialog",
	name: "Dialog",
	title: "Dialog",
	description:
		"A modal window layered over the page. Focus is trapped inside it while open and returned to the trigger on close, and the body stops scrolling underneath.",
	category: "Overlays",
	primitive: "Dialog",
	anatomy: `<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger />
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close />
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`,
	examples: [
		{
			id: "default",
			title: "With a form",
			description: "`child` hands the trigger's props to your own button rather than nesting two buttons."
		},
		{ id: "controlled", title: "Controlled", description: "Drive it from state instead of a trigger." }
	],
	props: [
		{
			title: "Dialog.Root",
			rows: [
				{ name: "open", type: "boolean", default: "false", description: "Bindable open state." },
				{
					name: "onOpenChange",
					type: "(open: boolean) => void",
					default: "undefined",
					description: "Called when the dialog opens or closes."
				}
			]
		},
		{
			title: "Dialog.Content",
			description: "Renders a close button in the corner for you.",
			rows: [
				{
					name: "interactOutsideBehavior",
					type: '"close" | "ignore"',
					default: '"close"',
					description: "What a click on the overlay does."
				},
				{
					name: "escapeKeydownBehavior",
					type: '"close" | "ignore"',
					default: '"close"',
					description: "What Escape does."
				},
				{
					name: "onOpenAutoFocus",
					type: "(event: Event) => void",
					default: "undefined",
					description: "Call `preventDefault()` to choose your own initial focus."
				},
				{ name: "class", type: "string", default: '""', description: "Merged over the defaults with `cn()`." }
			]
		},
		{
			title: "Dialog.Title / Description",
			description: "Both are wired to the content through aria-labelledby and aria-describedby.",
			rows: [
				{
					name: "level",
					type: "1 | 2 | 3 | 4 | 5 | 6",
					default: "3",
					description: "Heading level for the title."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Esc", description: "Closes the dialog." },
		{ keys: "Tab", description: "Cycles focus within the dialog and never leaves it." }
	]
};

export default entry;
