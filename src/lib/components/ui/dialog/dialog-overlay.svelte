<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		...restProps
	}: DialogPrimitive.OverlayProps = $props();
</script>

<DialogPrimitive.Overlay 
	bind:ref 
	class={cn(
		"dialog-overlay fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", 
		className
	)}
	{...restProps} 
/>

<style>
	:global(.dialog-overlay[data-state="open"]) {
		animation: dialog-overlay-in 250ms ease-out both;
	}
	:global(.dialog-overlay[data-state="closed"]) {
		animation: dialog-overlay-out 150ms ease-in both;
	}

	@keyframes dialog-overlay-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes dialog-overlay-out {
		from { opacity: 1; }
		to { opacity: 0; }
	}
</style>