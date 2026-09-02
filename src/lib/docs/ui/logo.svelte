<script lang="ts">
	import { cn } from "$lib/utils";

	let { class: className = "" }: { class?: string } = $props();
</script>

<svg
	class={cn("text-primary", className)}
	viewBox="0 0 32 32"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<rect width="32" height="32" rx="9" fill="currentColor" />
	<path
		d="M9 11.5A2.5 2.5 0 0 1 11.5 9h6.09a2.5 2.5 0 0 1 1.77.73l3.41 3.41a2.5 2.5 0 0 1 .73 1.77V20.5A2.5 2.5 0 0 1 21 23h-9.5A2.5 2.5 0 0 1 9 20.5v-9Z"
		fill="white"
		fill-opacity="0.92"
	/>
	<path d="M18 9.4V13a1.5 1.5 0 0 0 1.5 1.5h3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
	<path d="M13 17.5h6M13 20h3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
</svg>
