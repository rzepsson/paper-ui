<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet";
	import { Button } from "$lib/components/ui/button";

	const sides = ["left", "right", "top", "bottom"] as const;
</script>

<div class="flex flex-wrap items-center gap-3">
	{#each sides as side (side)}
		<Sheet.Root>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="outline" class="capitalize">{side}</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content {side}>
				<Sheet.Header>
					<Sheet.Title class="capitalize">From the {side}</Sheet.Title>
					<Sheet.Description>
						The panel slides in from whichever edge you name.
					</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	{/each}
</div>
