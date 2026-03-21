<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		value,
		children,
		ref = $bindable(null),
		...restProps
	}: TabsPrimitive.ContentProps = $props();
</script>

<TabsPrimitive.Content
	bind:ref
	{value}
	class={cn(
		"mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		"data-[state=inactive]:hidden animate-in fade-in-50 duration-200",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.Content>