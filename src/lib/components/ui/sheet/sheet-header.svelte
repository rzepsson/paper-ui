<script lang="ts">
	import { cn } from "$lib/utils";
	let { class: className = "", children, ...restProps }: { class?: string, children: import('svelte').Snippet, [key: string]: any } = $props();
</script>
<div class={cn("flex flex-col space-y-1.5 text-left", className)} {...restProps}>
	{@render children()}
</div>