<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), children, ...restProps }: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title bind:ref class={cn("font-sans text-lg font-semibold tracking-tight", className)} {...restProps}>
	{@render children?.()}
</SheetPrimitive.Title>