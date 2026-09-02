<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props}>Edit profile</Button>
		{/snippet}
	</Dialog.Trigger>

	<Dialog.Portal>
		<Dialog.Overlay />
		<Dialog.Content>
			<div class="space-y-1.5">
				<Dialog.Title>Edit profile</Dialog.Title>
				<Dialog.Description>
					Change your display name here. Nothing is saved until you press the button.
				</Dialog.Description>
			</div>

			<div class="space-y-2">
				<Label for="dialog-name">Full name</Label>
				<Input id="dialog-name" placeholder="Jane Doe" />
			</div>

			<div class="flex justify-end">
				<Dialog.Close>
					{#snippet child({ props })}
						<Button {...props}>Save changes</Button>
					{/snippet}
				</Dialog.Close>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
