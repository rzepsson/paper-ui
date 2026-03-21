<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		...restProps
	}: AlertDialogPrimitive.OverlayProps = $props();
</script>

<AlertDialogPrimitive.Overlay 
	bind:ref 
	class={cn(
		"alert-dialog-overlay fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", 
		className
	)}
	{...restProps} 
/>

<style>
	:global(.alert-dialog-overlay[data-state="open"]) {
		animation: alert-overlay-in 250ms ease-out both;
	}
	:global(.alert-dialog-overlay[data-state="closed"]) {
		animation: alert-overlay-out 150ms ease-in both;
	}

	@keyframes alert-overlay-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes alert-overlay-out {
		from { opacity: 1; }
		to { opacity: 0; }
	}
</style>