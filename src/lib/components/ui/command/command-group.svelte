<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let {
		class: className = "",
		heading,
		children,
		...restProps
	}: CommandPrimitive.GroupProps & { heading?: string | Snippet } = $props();
</script>

<CommandPrimitive.Group
	class={cn("overflow-hidden p-1 text-foreground", className)}
	{...restProps}
>
	{#if heading}
		<div
			data-command-group-heading
			class="px-2.5 py-1.5 font-sans text-sm font-semibold text-foreground"
		>
			{#if typeof heading === "string"}
				{heading}
			{:else}
				{@render heading()}
			{/if}
		</div>
	{/if}
	
	{@render children?.()}
</CommandPrimitive.Group>