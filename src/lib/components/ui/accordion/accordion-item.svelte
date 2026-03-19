<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";

	let {
		class: className = "",
		value,
		ref = $bindable(null),
		children,
		...restProps
	}: AccordionPrimitive.ItemProps = $props();

	let getVariant = getContext<() => string>("accordionVariant");
	let variant = $derived(getVariant ? getVariant() : "default");
</script>

<AccordionPrimitive.Item
	bind:ref
	{value}
	class={cn(
		variant === "default" && "border-b border-border/60",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</AccordionPrimitive.Item>