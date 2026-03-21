<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		value,
		children,
		ref = $bindable(null),
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	{value}
	class={cn(
		"relative inline-flex items-center justify-center whitespace-nowrap py-2 text-[13px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
		"data-[state=active]:text-foreground",
		"after:absolute after:-bottom-px after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-200",
		"data-[state=active]:after:scale-x-100",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.Trigger>