<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { slide } from "svelte/transition";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		...restProps
	}: AccordionPrimitive.ContentProps = $props();
</script>

<AccordionPrimitive.Content forceMount bind:ref {...restProps}>
	{#snippet child({ props, open })}
		{#if open}
			<div {...props} transition:slide={{ duration: 150, axis: 'y' }}>
				
				<div class={cn("pb-4 pt-2 pl-9 pr-4 font-sans text-sm text-muted-foreground", className)}>
					{@render children?.()}
				</div>
				
			</div>
		{/if}
	{/snippet}
</AccordionPrimitive.Content>