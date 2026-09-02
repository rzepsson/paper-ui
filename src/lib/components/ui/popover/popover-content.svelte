<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import Portal from "./popover-portal.svelte";

	let {
		class: className = "",
		side = "bottom",
		align = "center",
		sideOffset = 8,
		children,
		ref = $bindable(null),
		...restProps
	}: PopoverPrimitive.ContentProps = $props();
</script>

<Portal>
	<PopoverPrimitive.Content
		bind:ref
		{side}
		{align}
		{sideOffset}
		class={cn(
			"popover-surface z-50 overflow-hidden rounded-xl border border-border/60 bg-popover/95 p-4 text-popover-foreground shadow-lg outline-none",
			"min-w-72 backdrop-blur-xl",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</PopoverPrimitive.Content>
</Portal>

<style>
	:global(.popover-surface) {
		transform-origin: var(--bits-popover-content-transform-origin);
		font-family: var(--font-sans);
		--popover-slide-x: 0px;
		--popover-slide-y: 0px;
	}

	:global(.popover-surface[data-side="bottom"]) { --popover-slide-y: -4px; }
	:global(.popover-surface[data-side="top"]) { --popover-slide-y: 4px; }
	:global(.popover-surface[data-side="left"]) { --popover-slide-x: 4px; }
	:global(.popover-surface[data-side="right"]) { --popover-slide-x: -4px; }

	:global(.popover-surface[data-state="open"]) {
		animation: popover-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.popover-surface[data-state="closed"]) {
		animation: popover-out 110ms ease-in;
	}

	@keyframes popover-in {
		from {
			opacity: 0;
			transform: translate3d(var(--popover-slide-x), var(--popover-slide-y), 0) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
	}

	@keyframes popover-out {
		from { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
		to { opacity: 0; transform: scale(0.98); }
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.popover-surface[data-state="open"]),
		:global(.popover-surface[data-state="closed"]) {
			animation-duration: 1ms;
		}
	}
</style>