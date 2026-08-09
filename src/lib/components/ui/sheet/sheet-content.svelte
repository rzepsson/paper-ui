<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";
	import { X } from "lucide-svelte";
	import { cn, focusRingClass, closeButtonClass } from "$lib/utils";
	import Portal from "./sheet-portal.svelte";
	import Overlay from "./sheet-overlay.svelte";

	let {
		class: className = "",
		side = "right",
		children,
		ref = $bindable(null),
		...restProps
	}: SheetPrimitive.ContentProps & { side?: "left" | "right" | "top" | "bottom" } = $props();
</script>

<Portal>
	<Overlay />
	<SheetPrimitive.Content
		bind:ref
		{...restProps}
		data-side={side}
		class={cn(
			"sheet-content fixed z-50 flex flex-col bg-card shadow-sm border-border/60 outline-none",
			side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-md",
			side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-md",
			side === "top" && "inset-x-0 top-0 w-full border-b h-auto",
			side === "bottom" && "inset-x-0 bottom-0 w-full border-t h-auto",
			className
		)}
	>
		<div class="flex flex-col h-full relative p-6">
			{@render children?.()}
			
			<SheetPrimitive.Close
				class={cn(
					"absolute right-4 top-4 size-8 opacity-70 transition-opacity hover:opacity-100",
					closeButtonClass,
					focusRingClass
				)}
			>
				<X class="size-4" />
				<span class="sr-only">Close</span>
			</SheetPrimitive.Close>
		</div>
	</SheetPrimitive.Content>
</Portal>

<style>
	:global(.sheet-content[data-state="open"][data-side="right"]) { animation: sheet-in-right 400ms cubic-bezier(0.22, 1, 0.36, 1) both; }
	:global(.sheet-content[data-state="closed"][data-side="right"]) { animation: sheet-out-right 300ms cubic-bezier(0.22, 1, 0.36, 1) both; }

	:global(.sheet-content[data-state="open"][data-side="left"]) { animation: sheet-in-left 400ms cubic-bezier(0.22, 1, 0.36, 1) both; }
	:global(.sheet-content[data-state="closed"][data-side="left"]) { animation: sheet-out-left 300ms cubic-bezier(0.22, 1, 0.36, 1) both; }

	:global(.sheet-content[data-state="open"][data-side="top"]) { animation: sheet-in-top 400ms cubic-bezier(0.22, 1, 0.36, 1) both; }
	:global(.sheet-content[data-state="closed"][data-side="top"]) { animation: sheet-out-top 300ms cubic-bezier(0.22, 1, 0.36, 1) both; }

	:global(.sheet-content[data-state="open"][data-side="bottom"]) { animation: sheet-in-bottom 400ms cubic-bezier(0.22, 1, 0.36, 1) both; }
	:global(.sheet-content[data-state="closed"][data-side="bottom"]) { animation: sheet-out-bottom 300ms cubic-bezier(0.22, 1, 0.36, 1) both; }

	@keyframes sheet-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
	@keyframes sheet-out-right { from { transform: translateX(0); } to { transform: translateX(100%); } }

	@keyframes sheet-in-left { from { transform: translateX(-100%); } to { transform: translateX(0); } }
	@keyframes sheet-out-left { from { transform: translateX(0); } to { transform: translateX(-100%); } }

	@keyframes sheet-in-top { from { transform: translateY(-100%); } to { transform: translateY(0); } }
	@keyframes sheet-out-top { from { transform: translateY(0); } to { transform: translateY(-100%); } }

	@keyframes sheet-in-bottom { from { transform: translateY(100%); } to { transform: translateY(0); } }
	@keyframes sheet-out-bottom { from { transform: translateY(0); } to { transform: translateY(100%); } }
</style>