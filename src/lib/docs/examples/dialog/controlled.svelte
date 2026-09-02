<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";

	let open = $state(false);
</script>

<div class="flex items-center gap-3">
	<Button variant="outline" onclick={() => (open = true)}>Open from anywhere</Button>
	<span class="text-xs text-muted-foreground">open = {open}</span>
</div>

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Dialog.Overlay />
		<Dialog.Content class="max-w-sm">
			<Dialog.Title>Controlled</Dialog.Title>
			<Dialog.Description>
				The trigger is optional; binding `open` is enough to drive the dialog yourself.
			</Dialog.Description>
			<div class="flex justify-end">
				<Button size="sm" onclick={() => (open = false)}>Close</Button>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
