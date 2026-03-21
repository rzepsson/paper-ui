<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", children, ...restProps }: CommandPrimitive.ItemProps = $props();
</script>

<CommandPrimitive.Item
	class={cn(
		"relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none transition-colors",
		"data-[selected]:bg-primary/10 data-[selected]:text-primary",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</CommandPrimitive.Item>