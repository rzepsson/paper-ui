<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";

	let {
		open = $bindable(false),
		delayDuration = 700,
		children: childrenSnippet, 
		...restProps
	}: TooltipPrimitive.RootProps = $props();
</script>

<TooltipPrimitive.Provider {delayDuration}>
	<TooltipPrimitive.Root bind:open {...restProps}>
		{#snippet children(props)}
			{@render childrenSnippet?.(props)}
		{/snippet}
	</TooltipPrimitive.Root>
</TooltipPrimitive.Provider>