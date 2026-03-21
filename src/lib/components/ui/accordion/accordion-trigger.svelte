<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { ChevronRight } from "lucide-svelte";
	import { cn, focusRingClass } from "$lib/utils";
	import { getContext } from "svelte";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		...restProps
	}: AccordionPrimitive.TriggerProps = $props();

	let getVariant = getContext<() => string>("accordionVariant");
	let variant = $derived(getVariant ? getVariant() : "default");
</script>

<AccordionPrimitive.Trigger
	bind:ref
	class={cn(
		"group flex flex-1 items-center gap-3 py-4 px-2 font-sans text-sm font-medium transition-all outline-none",
		"hover:bg-accent/40",
		focusRingClass,
		"select-none",
		variant === "quiet" ? "rounded-md" : "rounded-none focus-visible:rounded-md",
		"disabled:pointer-events-none disabled:opacity-50",
		className
	)}
	{...restProps}
>
	<ChevronRight class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90" />
	
	<span class="text-left w-full">
		{@render children?.()}
	</span>
</AccordionPrimitive.Trigger>