<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	let { class: className = "", children, ref = $bindable(null), ...restProps }: SelectPrimitive.GroupHeadingProps = $props();
</script>
<SelectPrimitive.GroupHeading 
	bind:ref 
	class={cn(
		"px-2.5 py-1.5 font-sans text-sm font-semibold text-foreground",
		className
	)} {...restProps}>
	{@render children?.()}
</SelectPrimitive.GroupHeading>