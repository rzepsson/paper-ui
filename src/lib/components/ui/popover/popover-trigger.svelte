<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		child,
		ref = $bindable(null),
		...restProps
	}: PopoverPrimitive.TriggerProps = $props();
</script>

<PopoverPrimitive.Trigger
	bind:ref
	class={cn("outline-none select-none", className)}
	{child}
	{...restProps}
>
	{#if !child}
		{@render children?.()}
	{/if}
</PopoverPrimitive.Trigger>