<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn(
		"skeleton-shimmer relative overflow-hidden rounded-md bg-muted/60",
		className
	)}
	{...restProps}
></div>

<style>
	:global(.skeleton-shimmer) {
		pointer-events: none;
	}

	:global(.skeleton-shimmer::after) {
		content: "";
		position: absolute;
		inset: 0;
		transform: translateX(-100%);
		background-image: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.05),
			transparent
		);
		animation: shimmer 1.8s infinite;
	}

	:global(.dark .skeleton-shimmer::after) {
		background-image: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.08),
			transparent
		);
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.skeleton-shimmer::after) {
			animation: none;
			display: none;
		}
	}
</style>