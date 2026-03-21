<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		...restProps
	}: AccordionPrimitive.ContentProps = $props();
</script>

<AccordionPrimitive.Content 
	bind:ref 
	class="accordion-content overflow-hidden" 
	{...restProps}
>
	<div class={cn("pb-4 pt-2 pl-9 pr-4 font-sans text-sm text-muted-foreground", className)}>
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>

<style>
	:global(.accordion-content[data-state="open"]) {
		animation: accordion-slide-down 150ms cubic-bezier(0.16, 1, 0.3, 1) both;
	}
	
	:global(.accordion-content[data-state="closed"]) {
		animation: accordion-slide-up 150ms cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes accordion-slide-down {
		from {
			height: 0;
		}
		to {
			height: var(--bits-accordion-content-height);
		}
	}

	@keyframes accordion-slide-up {
		from {
			height: var(--bits-accordion-content-height);
		}
		to {
			height: 0;
		}
	}
</style>