<script lang="ts">
	import { Tooltip as TooltipPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import Portal from "./tooltip-portal.svelte";

	let {
		class: className = "",
		side = "top",
		align = "center",
		sideOffset = 8,
		children,
		ref = $bindable(null),
		...restProps
	}: TooltipPrimitive.ContentProps = $props();
</script>

<Portal>
	<TooltipPrimitive.Content
		bind:ref
		{side}
		{align}
		{sideOffset}
		class={cn(
			"tooltip-surface z-100 rounded-sm px-2.5 py-1.5",
			"bg-neutral-950 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950",
			"text-[11px] font-medium border border-white/10 dark:border-black/10",
			"select-none outline-none backdrop-blur-md", 
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</TooltipPrimitive.Content>
</Portal>

<style>
	:global(.tooltip-surface) {
		transform-origin: var(--bits-tooltip-content-transform-origin);
		--tooltip-slide-x: 0px;
		--tooltip-slide-y: 0px;
	}

	:global(.tooltip-surface[data-side="bottom"]) { --tooltip-slide-y: -4px; }
	:global(.tooltip-surface[data-side="top"]) { --tooltip-slide-y: 4px; }
	:global(.tooltip-surface[data-side="left"]) { --tooltip-slide-x: 4px; }
	:global(.tooltip-surface[data-side="right"]) { --tooltip-slide-x: -4px; }

	:global(.tooltip-surface[data-state="delayed-open"]),
	:global(.tooltip-surface[data-state="instant-open"]) {
		animation: tooltip-fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.tooltip-surface[data-state="closed"]) {
		animation: tooltip-fade-out 150ms ease-in;
		pointer-events: none;
	}

	@keyframes tooltip-fade-in {
		from {
			opacity: 0;
			transform: translate3d(var(--tooltip-slide-x), var(--tooltip-slide-y), 0);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes tooltip-fade-out {
		from { opacity: 1; }
		to { opacity: 0; }
	}
</style>