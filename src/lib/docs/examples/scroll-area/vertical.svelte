<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";

	const tags = Array.from({ length: 40 }, (_, i) => `v1.2.${40 - i}`);
</script>

<ScrollArea class="h-56 w-56 rounded-lg border border-border/60 bg-card">
	<div class="p-4">
		<h4 class="mb-3 text-sm font-medium">Releases</h4>
		{#each tags as tag (tag)}
			<div class="border-b border-border/40 py-2 text-sm text-muted-foreground last:border-0">
				{tag}
			</div>
		{/each}
	</div>
</ScrollArea>
