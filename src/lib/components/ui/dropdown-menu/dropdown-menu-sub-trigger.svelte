<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { ChevronRight } from "lucide-svelte";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		ref = $bindable(null),
		...restProps
	}: DropdownMenuPrimitive.SubTriggerProps = $props();
</script>

<DropdownMenuPrimitive.SubTrigger
	bind:ref
	class={cn(
		"group relative flex cursor-default select-none items-center gap-3 rounded-md px-2.5 py-1.5 font-sans text-sm font-medium outline-none",
		"data-[state=open]:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:outline data-[state=open]:outline-primary data-[state=open]:-outline-offset-2",
		"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:outline data-highlighted:outline-primary data-highlighted:-outline-offset-2",
		"data-disabled:pointer-events-none data-disabled:opacity-45",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<ChevronRight class="ml-auto size-4 opacity-65" />
</DropdownMenuPrimitive.SubTrigger>