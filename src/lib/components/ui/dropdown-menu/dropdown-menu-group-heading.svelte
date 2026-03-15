<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { 
		class: className = "", 
		children, 
		ref = $bindable(null), 
		...restProps 
	}: DropdownMenuPrimitive.GroupHeadingProps = $props();
</script>

<DropdownMenuPrimitive.GroupHeading
	bind:ref
	class={cn(
		"px-2.5 py-1.5 font-sans text-sm font-semibold text-foreground",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</DropdownMenuPrimitive.GroupHeading>