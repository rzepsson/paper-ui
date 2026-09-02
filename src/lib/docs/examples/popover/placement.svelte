<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { Button } from "$lib/components/ui/button";

	const sides = ["top", "right", "bottom", "left"] as const;
</script>

<div class="flex flex-wrap items-center gap-3">
	{#each sides as side (side)}
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" size="sm" class="capitalize">{side}</Button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content {side} class="min-w-0 w-auto p-3 text-sm">
				Anchored to the {side}.
			</Popover.Content>
		</Popover.Root>
	{/each}
</div>
