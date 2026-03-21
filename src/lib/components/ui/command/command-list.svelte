<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { cn } from "$lib/utils";

	let { class: className = "", children, ...restProps }: CommandPrimitive.ListProps = $props();
</script>

<CommandPrimitive.List class={cn("max-h-87.5 overflow-hidden", className)} {...restProps}>
	<ScrollArea orientation="vertical" class="h-full">
		<CommandPrimitive.Viewport class="p-2">
			{@render children?.()}
		</CommandPrimitive.Viewport>
	</ScrollArea>
</CommandPrimitive.List>