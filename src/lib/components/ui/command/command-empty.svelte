<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ...restProps }: CommandPrimitive.EmptyProps = $props();
</script>

<CommandPrimitive.Empty class={cn("py-12 text-center text-sm text-muted-foreground", className)} {...restProps} />