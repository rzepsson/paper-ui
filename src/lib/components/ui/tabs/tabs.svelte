<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";

	let {
		value = $bindable(),
		class: className = "",
		children,
		...restProps
	}: TabsPrimitive.RootProps = $props();
</script>

<TabsPrimitive.Root
	bind:value
	class={cn("relative flex w-full flex-col", className)}
	{...restProps}
>
	{@render children?.()}
</TabsPrimitive.Root>