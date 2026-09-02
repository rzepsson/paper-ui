<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip";
	import { Button } from "$lib/components/ui/button";
	import { Plus, Trash2 } from "lucide-svelte";
</script>

<div class="flex items-center gap-3">
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="icon" aria-label="Add a project">
					<Plus />
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>Add a new project</Tooltip.Content>
	</Tooltip.Root>

	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="destructive" size="icon" aria-label="Delete">
					<Trash2 />
				</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content side="right">Delete permanently</Tooltip.Content>
	</Tooltip.Root>
</div>
