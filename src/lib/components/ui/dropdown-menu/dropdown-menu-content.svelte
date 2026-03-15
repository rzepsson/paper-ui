<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	type MenuSize = "s" | "m" | "l" | "xl";
	type ContentProps = DropdownMenuPrimitive.ContentProps & {
		size?: MenuSize;
	};

	const sizeClassMap: Record<MenuSize, string> = {
		s: "min-w-44",
		m: "min-w-56",
		l: "min-w-64",
		xl: "min-w-72"
	};

	let {
		class: className = "",
		side = "bottom",
		align = "start",
		sideOffset = 6,
		size = "m",
		children,
		ref = $bindable(null),
		...restProps
	}: ContentProps = $props();
</script>

<DropdownMenuPrimitive.Portal>
	<DropdownMenuPrimitive.Content
		bind:ref
		{side}
		{align}
		{sideOffset}
		class={cn(
			"dropdown-menu-surface z-50 overflow-hidden rounded-lg border border-border/80 bg-popover p-2 text-popover-foreground shadow-lg outline-none",
			sizeClassMap[size as MenuSize] ?? sizeClassMap.m,
			"max-h-[calc(var(--bits-dropdown-menu-content-available-height)-12px)]",
			"data-[state=closed]:pointer-events-none",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</DropdownMenuPrimitive.Content>
</DropdownMenuPrimitive.Portal>

<style>
	:global(.dropdown-menu-surface) {
		transform-origin: var(--bits-dropdown-menu-content-transform-origin);
		font-family: var(--font-sans);
		--dropdown-slide-x: 0px;
		--dropdown-slide-y: 0px;
	}

	:global(.dropdown-menu-surface[data-side="bottom"]) {
		--dropdown-slide-y: -4px;
	}

	:global(.dropdown-menu-surface[data-side="top"]) {
		--dropdown-slide-y: 4px;
	}

	:global(.dropdown-menu-surface[data-side="left"]) {
		--dropdown-slide-x: 4px;
	}

	:global(.dropdown-menu-surface[data-side="right"]) {
		--dropdown-slide-x: -4px;
	}

	:global(.dropdown-menu-surface[data-state="open"]) {
		animation: dropdown-menu-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.dropdown-menu-surface[data-state="closed"]) {
		animation: dropdown-menu-out 110ms ease-in;
	}

	@keyframes dropdown-menu-in {
		from {
			opacity: 0;
			transform: translate3d(var(--dropdown-slide-x), var(--dropdown-slide-y), 0) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
	}

	@keyframes dropdown-menu-out {
		from {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.98);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.dropdown-menu-surface[data-state="open"]),
		:global(.dropdown-menu-surface[data-state="closed"]) {
			animation-duration: 1ms;
		}
	}
</style>