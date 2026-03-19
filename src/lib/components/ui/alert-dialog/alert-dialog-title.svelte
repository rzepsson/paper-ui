<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let { class: className = "", ref = $bindable(null), children, ...restProps }: AlertDialogPrimitive.TitleProps = $props();
</script>

<AlertDialogPrimitive.Title bind:ref class={cn("font-sans text-lg font-semibold tracking-tight", className)} {...restProps}>
	{@render children?.()}
</AlertDialogPrimitive.Title>