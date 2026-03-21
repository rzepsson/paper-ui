<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", children, ...restProps }: CommandPrimitive.ItemProps = $props();
</script>

<CommandPrimitive.Item
	class={cn(
		"group relative flex cursor-default select-none items-center gap-3 rounded-md px-2.5 py-1.5 font-sans text-sm font-medium outline-none",
		"transition-all duration-200 active:scale-[0.98]",
		"data-selected:bg-accent data-selected:text-accent-foreground data-selected:outline data-selected:outline-primary data-selected:-outline-offset-2",
		"data-disabled:pointer-events-none data-disabled:opacity-45",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</CommandPrimitive.Item>