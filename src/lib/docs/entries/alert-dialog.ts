import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "alert-dialog",
	name: "AlertDialog",
	title: "Alert dialog",
	description:
		"A dialog for a decision that cannot be undone. Unlike a plain dialog it will not close on an outside click, so the choice has to be made deliberately.",
	category: "Overlays",
	primitive: "AlertDialog",
	anatomy: `<script lang="ts">
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
</script>

<AlertDialog.Root bind:open>
  <AlertDialog.Trigger />
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content>
      <AlertDialog.Title />
      <AlertDialog.Description />
      <AlertDialog.Cancel />
      <AlertDialog.Action />
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>`,
	examples: [
		{
			id: "default",
			title: "Destructive confirm",
			description: "Cancel comes first in the DOM so it is the first stop for a keyboard, and last visually on desktop."
		}
	],
	props: [
		{
			title: "AlertDialog.Root",
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
			title: "AlertDialog.Action / Cancel",
			description: "Both close the dialog when activated; attach your own onclick for the side effect.",
			rows: [
				{
					name: "child",
					type: "Snippet",
					default: "undefined",
					description: "Renders your own button with the props to spread."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Esc", description: "Cancels and closes." },
		{ keys: "Tab", description: "Cycles between cancel and action." }
	]
};

export default entry;
