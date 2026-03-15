<script lang="ts">
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		children,
		...restProps
	}: { class?: string; children?: import("svelte").Snippet } = $props();
</script>

<span
	class={cn("truncate font-sans text-[0.84rem] leading-5 font-medium text-current", className)}
	{...restProps}
>
	{@render children?.()}
</span>
