<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className = "", children, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<kbd
	class={cn(
		"ml-auto font-sans text-xs tracking-widest text-muted-foreground transition-colors",
		"group-data-selected:text-current",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</kbd>