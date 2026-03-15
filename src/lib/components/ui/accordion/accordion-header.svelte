<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		level = 3,
		ref = $bindable(null),
		children,
		...restProps
	}: AccordionPrimitive.HeaderProps = $props();
</script>

<AccordionPrimitive.Header bind:ref {level} class={cn("flex", className)} {...restProps}>
	{@render children?.()}
</AccordionPrimitive.Header>