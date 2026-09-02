<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";

	const swatches = Array.from({ length: 14 }, (_, i) => i);
</script>

<ScrollArea orientation="horizontal" class="w-full max-w-lg rounded-lg border border-border/60 bg-card">
	<div class="flex gap-3 p-4">
		{#each swatches as swatch (swatch)}
			<div
				class="flex size-24 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/50 text-xs text-muted-foreground"
			>
				{swatch + 1}
			</div>
		{/each}
	</div>
</ScrollArea>
