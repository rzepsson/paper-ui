<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		...restProps
	}: AlertDialogPrimitive.ContentProps = $props();
</script>

<AlertDialogPrimitive.Content 
	bind:ref 
	class={cn(
		"alert-dialog-content fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg gap-6 rounded-2xl border border-border/60 bg-card p-6 shadow-sm outline-none",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</AlertDialogPrimitive.Content>

<style>
	:global(.alert-dialog-content) {
		transform: translate(-50%, -50%);
	}

	:global(.alert-dialog-content[data-state="open"]) {
		animation: alert-dialog-in 400ms cubic-bezier(0.22, 1, 0.36, 1) 50ms both;
	}
	
	:global(.alert-dialog-content[data-state="closed"]) {
		animation: alert-dialog-out 200ms ease-in both;
	}

	@keyframes alert-dialog-in {
		from {
			opacity: 0;
			transform: translate(-50%, calc(-50% + 35px)) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@keyframes alert-dialog-out {
		from {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
		to {
			opacity: 0;
			transform: translate(-50%, calc(-50% + 15px)) scale(0.98);
		}
	}
</style>