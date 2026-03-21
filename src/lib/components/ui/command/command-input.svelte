<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { Search } from "lucide-svelte";
	import { cn } from "$lib/utils";

	let { class: className = "", ...restProps }: CommandPrimitive.InputProps = $props();
</script>

<div class="flex items-center border-b border-border/40 px-4">
	<Search class="mr-2 size-4 shrink-0 opacity-40" />
	<CommandPrimitive.Input
		class={cn(
			"flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...restProps}
	/>
</div>