<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let { class: className = "", children, ...restProps }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span
	class={cn("ml-auto text-[10px] font-mono tracking-widest text-muted-foreground opacity-60", className)}
	{...restProps}
>
	{@render children?.()}
</span>