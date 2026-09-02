<script lang="ts">
	import type { Snippet } from "svelte";
	import { RotateCcw, TriangleAlert } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";

	let { children }: { children: Snippet } = $props();
</script>

<svelte:boundary>
	{@render children()}

	{#snippet failed(error, reset)}
		<div class="w-full max-w-md space-y-3 rounded-lg border border-destructive/40 bg-destructive/5 p-5">
			<p class="flex items-center gap-2 text-sm font-medium text-destructive">
				<TriangleAlert class="size-4" />
				This example failed to render.
			</p>
			<p class="break-words font-mono text-xs text-muted-foreground">
				{(error as Error)?.message ?? String(error)}
			</p>
			<Button size="sm" variant="outline" onclick={reset}>
				<RotateCcw />
				Try again
			</Button>
		</div>
	{/snippet}
</svelte:boundary>
