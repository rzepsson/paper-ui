<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import { X } from "lucide-svelte";
	import { cn, focusRingClass, closeButtonClass } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		...restProps
	}: DialogPrimitive.ContentProps = $props();
</script>

<DialogPrimitive.Content 
	bind:ref 
	class={cn(
		"dialog-content fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg gap-6 rounded-xl border border-border/60 bg-card p-6 shadow-sm outline-none sm:rounded-2xl",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	
	<DialogPrimitive.Close
		class={cn(
			"absolute right-1 top-1 size-8",
			closeButtonClass,
			focusRingClass
		)}
	>
		<X class="size-4" />
		<span class="sr-only">Zamknij okno</span>
	</DialogPrimitive.Close>
</DialogPrimitive.Content>

<style>
	:global(.dialog-content) {
		transform: translate(-50%, -50%);
	}

	:global(.dialog-content[data-state="open"]) {
		animation: dialog-in 400ms cubic-bezier(0.22, 1, 0.36, 1) 50ms both;
	}
	
	:global(.dialog-content[data-state="closed"]) {
		animation: dialog-out 200ms ease-in both;
	}

	@keyframes dialog-in {
		from {
			opacity: 0;
			transform: translate(-50%, calc(-50% + 35px)) scale(0.96);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@keyframes dialog-out {
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