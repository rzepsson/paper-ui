<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), ...restProps }: DropdownMenuPrimitive.SeparatorProps = $props();
</script>

<DropdownMenuPrimitive.Separator 
	bind:ref 
	class={cn("mx-2 my-1 h-px shrink-0 bg-border/95", className)} 
	{...restProps} 
/>