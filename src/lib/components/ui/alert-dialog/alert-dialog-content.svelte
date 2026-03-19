<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import { fly, fade } from "svelte/transition";
	import { cn } from "$lib/utils";

	let {
		class: className = "",
		ref = $bindable(null),
		children,
		...restProps
	}: AlertDialogPrimitive.ContentProps = $props();
</script>

<AlertDialogPrimitive.Content forceMount bind:ref {...restProps}>
	{#snippet child({ props, open })}
		{#if open}
			<div
				{...props}
				transition:fly={{ y: 15, duration: 200, opacity: 0 }}
				class={cn(
					"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 rounded-xl border border-border/60 bg-card p-6 shadow-xl outline-none sm:rounded-2xl",
					className
				)}
			>
				{@render children?.()}
			</div>
		{/if}
	{/snippet}
</AlertDialogPrimitive.Content>