<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

	let {
		children,
		value = $bindable(),
		ref = $bindable(null),
		...restProps
	}: DropdownMenuPrimitive.RadioGroupProps = $props();
</script>

<DropdownMenuPrimitive.RadioGroup bind:value bind:ref {...restProps}>
	{@render children?.()}
</DropdownMenuPrimitive.RadioGroup>