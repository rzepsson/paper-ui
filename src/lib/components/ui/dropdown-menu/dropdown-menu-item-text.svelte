<script lang="ts">
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		...restProps
	}: { class?: string; children?: import("svelte").Snippet } = $props();
</script>

<div
	class={cn("grid min-w-0 flex-1 gap-0.5", className)}
	{...restProps}
>
	{@render children?.()}
</div>
