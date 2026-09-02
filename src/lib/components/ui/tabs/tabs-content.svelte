<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		value,
		children,
		ref = $bindable(null),
		...restProps
	}: TabsPrimitive.ContentProps = $props();
</script>

<TabsPrimitive.Content
	bind:ref
	{value}
	class={cn(
		"tabs-panel mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		"data-[state=inactive]:hidden",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.Content>

<style>
	:global(.tabs-panel[data-state="active"]) {
		animation: tabs-panel-in 200ms cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes tabs-panel-in {
		from {
			opacity: 0;
			transform: translateY(2px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.tabs-panel[data-state="active"]) {
			animation: none;
		}
	}
</style>