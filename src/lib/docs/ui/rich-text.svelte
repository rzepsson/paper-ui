<script lang="ts">
	let { value, class: className = "" }: { value: string; class?: string } = $props();

	const parts = $derived(value.split(/(`[^`]+`)/g).filter(Boolean));
</script>

{#each parts as part, index (index)}
	{#if part.length > 2 && part.startsWith("`") && part.endsWith("`")}
		<code class={`rounded bg-muted px-1 py-0.5 font-mono text-[0.9em] ${className}`}>
			{part.slice(1, -1)}
		</code>
	{:else}{part}{/if}
{/each}
