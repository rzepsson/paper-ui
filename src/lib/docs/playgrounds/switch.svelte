<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";

	let {
		variant = "default",
		checked = false,
		disabled = false
	}: { variant?: any; checked?: boolean; disabled?: boolean } = $props();
</script>

<Switch {variant} {checked} {disabled} aria-label="Playground switch" />
