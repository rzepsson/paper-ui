<script lang="ts">
	import { cn } from "$lib/utils";
	let { class: className = "", ...restProps } = $props();
</script>
<div class={cn("-mx-2 my-1 h-px bg-border/95", className)} {...restProps}></div>