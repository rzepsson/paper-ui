<script lang="ts">
	import { cn } from "$lib/utils";
	let { class: className = "", children, ...restProps }: { class?: string, children?: import('svelte').Snippet } = $props();
</script>

<kbd
	class={cn(
		"ml-auto font-sans text-xs tracking-widest text-muted-foreground transition-colors",
		"group-data-highlighted:text-current",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</kbd>