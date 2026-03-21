<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ...restProps }: CommandPrimitive.SeparatorProps = $props();
</script>

<CommandPrimitive.Separator 
	class={cn("-mx-1 my-1 h-px bg-border/40", className)} 
	{...restProps} 
/>