<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import { cn } from "$lib/utils";
	import { setContext, type Snippet } from "svelte";

	let {
		class: className = "",
		value = $bindable(),
		ref = $bindable(null),
		variant = "default",
		children,
		...restProps
	}: WithoutChildrenOrChild<AccordionPrimitive.RootProps> & { 
		variant?: "default" | "quiet",
		children?: Snippet
	} = $props();

	setContext("accordionVariant", () => variant);
</script>

<AccordionPrimitive.Root 
	bind:value 
	bind:ref 
	class={cn(
		"w-full", 
		variant === "default" && "border-t border-border",
		className
	)} 
	{...restProps as any}
>
	{@render children?.()}
</AccordionPrimitive.Root>