<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		child,
		ref = $bindable(null),
		...restProps
	}: TooltipPrimitive.TriggerProps = $props();
</script>

<TooltipPrimitive.Trigger
	bind:ref
	class={cn("inline-flex outline-none", className)}
	{child}
	{...restProps}
>
	{#if !child}
		{@render children?.()}
	{/if}
</TooltipPrimitive.Trigger>