<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	let {
		variant = "default",
		size = "default",
		disabled = false,
		label = "Click me"
	}: {
		variant?: any;
		size?: any;
		disabled?: boolean;
		label?: string;
	} = $props();
</script>

<Button {variant} {size} {disabled}>
	{size === "icon" ? "+" : label}
</Button>
