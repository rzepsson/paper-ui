<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import { fade } from "svelte/transition";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		...restProps
	}: AlertDialogPrimitive.OverlayProps = $props();
</script>

<AlertDialogPrimitive.Overlay forceMount bind:ref {...restProps}>
	{#snippet child({ props, open })}
		{#if open}
			<div
				{...props}
				transition:fade={{ duration: 150 }}
				class={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)}
			></div>
		{/if}
	{/snippet}
</AlertDialogPrimitive.Overlay>