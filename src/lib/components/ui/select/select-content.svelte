<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { ChevronUp, ChevronDown } from "lucide-svelte";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		side = "bottom",
		align = "start",
		sideOffset = 6,
		children,
		ref = $bindable(null),
		...restProps
	}: SelectPrimitive.ContentProps = $props();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content
		bind:ref
		{side}
		{align}
		{sideOffset}
		class={cn(
			"select-surface z-50 overflow-hidden rounded-xl border border-border/80 bg-popover p-1 text-popover-foreground shadow-sm outline-none",
			"min-w-56",
			"max-h-[calc(var(--bits-select-content-available-height)-12px)]",
			"data-[state=closed]:pointer-events-none",
			className
		)}
		{...restProps}
	>
		<SelectPrimitive.ScrollUpButton class="flex w-full items-center justify-center py-1 cursor-default text-muted-foreground hover:bg-accent/40">
			<ChevronUp class="size-3" />
		</SelectPrimitive.ScrollUpButton>
		
		<SelectPrimitive.Viewport class="p-0">
			{@render children?.()}
		</SelectPrimitive.Viewport>
		
		<SelectPrimitive.ScrollDownButton class="flex w-full items-center justify-center py-1 cursor-default text-muted-foreground hover:bg-accent/40">
			<ChevronDown class="size-3" />
		</SelectPrimitive.ScrollDownButton>
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>

<style>
	:global(.select-surface) {
		transform-origin: var(--bits-select-content-transform-origin);
		font-family: var(--font-sans);
		--select-slide-x: 0px;
		--select-slide-y: 0px;
	}

	:global(.select-surface[data-side="bottom"]) { --select-slide-y: -4px; }
	:global(.select-surface[data-side="top"]) { --select-slide-y: 4px; }
	:global(.select-surface[data-side="left"]) { --select-slide-x: 4px; }
	:global(.select-surface[data-side="right"]) { --select-slide-x: -4px; }

	:global(.select-surface[data-state="open"]) {
		animation: select-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	:global(.select-surface[data-state="closed"]) {
		animation: select-out 110ms ease-in;
	}

	@keyframes select-in {
		from {
			opacity: 0;
			transform: translate3d(var(--select-slide-x), var(--select-slide-y), 0) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}
	}

	@keyframes select-out {
		from { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
		to { opacity: 0; transform: scale(0.98); }
	}
</style>