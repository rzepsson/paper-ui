<script lang="ts">
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		...restProps
	}: { class?: string; children?: import("svelte").Snippet } = $props();
</script>

<span
	class={cn(
		"line-clamp-2 font-sans text-[0.72rem] leading-4 text-muted-foreground/95 transition-colors group-data-highlighted:text-accent-foreground/80",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</span>
