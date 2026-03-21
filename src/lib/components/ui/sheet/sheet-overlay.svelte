<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		...restProps
	}: SheetPrimitive.OverlayProps = $props();
</script>

<SheetPrimitive.Overlay 
	bind:ref 
	class={cn(
		"sheet-overlay fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", 
		className
	)}
	{...restProps} 
/>

<style>
	:global(.sheet-overlay[data-state="open"]) {
		animation: sheet-overlay-in 300ms ease-out both;
	}
	:global(.sheet-overlay[data-state="closed"]) {
		animation: sheet-overlay-out 200ms ease-in both;
	}

	@keyframes sheet-overlay-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes sheet-overlay-out {
		from { opacity: 1; }
		to { opacity: 0; }
	}
</style>