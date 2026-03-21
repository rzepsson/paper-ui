<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	let { class: className = "", children, ref = $bindable(null), ...restProps }: SelectPrimitive.GroupProps = $props();
</script>
<SelectPrimitive.Group bind:ref class={cn("py-1 w-full", className)} {...restProps}>
	{@render children?.()}
</SelectPrimitive.Group>