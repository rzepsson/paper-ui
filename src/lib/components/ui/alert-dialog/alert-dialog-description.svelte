<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), children, ...restProps }: AlertDialogPrimitive.DescriptionProps = $props();
</script>

<AlertDialogPrimitive.Description bind:ref class={cn("font-sans text-sm text-muted-foreground", className)} {...restProps}>
	{@render children?.()}
</AlertDialogPrimitive.Description>