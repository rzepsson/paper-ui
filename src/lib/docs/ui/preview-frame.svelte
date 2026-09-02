<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	let {
		children,
		class: className = "",
		align = "center",
		padded = true
	}: {
		children: Snippet;
		class?: string;
		align?: "center" | "start";
		padded?: boolean;
	} = $props();
</script>

<div
	class={cn(
		"preview-grid flex min-h-52 w-full flex-col justify-center rounded-lg border border-border/60 bg-background",
		align === "center" ? "items-center" : "items-stretch",
		padded && "p-8",
		className
	)}
>
	{@render children()}
</div>

<style>
	.preview-grid {
		background-image: radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0);
		background-size: 16px 16px;
	}
</style>
