<script lang="ts">
	import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import { Button } from "$lib/components/ui/button";
	import { toast } from "svelte-sonner";
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="destructive">Delete project</Button>
		{/snippet}
	</AlertDialog.Trigger>

	<AlertDialog.Portal>
		<AlertDialog.Overlay />
		<AlertDialog.Content>
			<div class="space-y-2">
				<AlertDialog.Title>Delete this project?</AlertDialog.Title>
				<AlertDialog.Description>
					This cannot be undone. The project and every file attached to it are removed permanently.
				</AlertDialog.Description>
			</div>

			<div class="mt-6 flex flex-col-reverse justify-end gap-3 sm:flex-row">
				<AlertDialog.Cancel>
					{#snippet child({ props })}
						<Button {...props} variant="outline" class="w-full sm:w-auto">Cancel</Button>
					{/snippet}
				</AlertDialog.Cancel>
				<AlertDialog.Action>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="destructive"
							class="w-full sm:w-auto"
							onclick={() => toast.success("Project deleted")}
						>
							Yes, delete it
						</Button>
					{/snippet}
				</AlertDialog.Action>
			</div>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
