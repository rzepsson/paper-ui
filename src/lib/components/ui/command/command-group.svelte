<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", children, ...restProps }: CommandPrimitive.GroupProps = $props();
</script>

<CommandPrimitive.Group
	class={cn(
		"overflow-hidden p-1 text-foreground **:data-command-group-heading:px-2 **:data-command-group-heading:py-1.5 **:data-command-group-heading:text-[11px] **:data-command-group-heading:font-medium **:data-command-group-heading:text-muted-foreground **:data-command-group-heading:uppercase **:data-command-group-heading:tracking-wider",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</CommandPrimitive.Group>