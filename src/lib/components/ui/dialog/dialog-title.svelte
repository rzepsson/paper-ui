<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), children, ...restProps }: DialogPrimitive.TitleProps = $props();
</script>

<DialogPrimitive.Title bind:ref class={cn("font-sans text-lg font-semibold tracking-tight", className)} {...restProps}>
	{@render children?.()}
</DialogPrimitive.Title>