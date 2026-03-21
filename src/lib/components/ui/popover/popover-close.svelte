<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn, closeButtonClass } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		child,
		...restProps
	}: PopoverPrimitive.CloseProps = $props();
</script>

<PopoverPrimitive.Close
	bind:ref
	class={cn(closeButtonClass, className)}
	{child}
	{...restProps}
>
	{#if !child}
		{@render children?.()}
	{/if}
</PopoverPrimitive.Close>