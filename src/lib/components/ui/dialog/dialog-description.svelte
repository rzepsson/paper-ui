<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), children, ...restProps }: DialogPrimitive.DescriptionProps = $props();
</script>

<DialogPrimitive.Description bind:ref class={cn("font-sans text-sm text-muted-foreground", className)} {...restProps}>
	{@render children?.()}
</DialogPrimitive.Description>