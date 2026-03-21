<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		ref = $bindable(null),
		...restProps
	}: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List
	bind:ref
	class={cn(
		"inline-flex h-9 items-center justify-start border-b border-border/40 bg-transparent p-0 text-muted-foreground gap-4",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.List>