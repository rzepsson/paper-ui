<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import RichText from "./rich-text.svelte";
	import type { PropGroup } from "../types";

	let { group }: { group: PropGroup } = $props();
</script>

<article class="overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm">
	<div class="border-b border-border/60 px-5 py-4">
		<h3 class="text-sm font-semibold">{group.title}</h3>
		{#if group.description}
			<p class="mt-1 text-xs leading-relaxed text-muted-foreground">
				<RichText value={group.description} />
			</p>
		{/if}
	</div>

	<ScrollArea orientation="horizontal">
		<table class="w-full min-w-[46rem] border-collapse text-left text-sm">
			<thead class="border-b border-border/60 bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
				<tr>
					<th scope="col" class="px-5 py-3 font-medium">Prop</th>
					<th scope="col" class="px-5 py-3 font-medium">Type</th>
					<th scope="col" class="px-5 py-3 font-medium">Default</th>
					<th scope="col" class="px-5 py-3 font-medium">Description</th>
				</tr>
			</thead>
			<tbody>
				{#each group.rows as row (row.name)}
					<tr class="border-b border-border/40 last:border-0 hover:bg-muted/20">
						<td class="whitespace-nowrap px-5 py-3 align-top font-mono text-xs text-primary">
							{row.name}
						</td>
						<td class="px-5 py-3 align-top font-mono text-xs text-foreground/80">{row.type}</td>
						<td class="whitespace-nowrap px-5 py-3 align-top font-mono text-xs text-muted-foreground">
							{row.default ?? "-"}
						</td>
						<td class="px-5 py-3 align-top text-xs leading-relaxed text-muted-foreground">
							<RichText value={row.description} />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</ScrollArea>
</article>
