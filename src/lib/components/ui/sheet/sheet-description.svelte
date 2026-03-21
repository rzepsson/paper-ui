<script lang="ts">
	import { Dialog as SheetPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), children, ...restProps }: SheetPrimitive.DescriptionProps = $props();
</script>

<SheetPrimitive.Description bind:ref class={cn("font-sans text-sm text-muted-foreground", className)} {...restProps}>
	{@render children?.()}
</SheetPrimitive.Description>