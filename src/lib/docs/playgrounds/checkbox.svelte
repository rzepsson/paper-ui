<script lang="ts">
	import { Checkbox } from "$lib/components/ui/checkbox";

	let {
		variant = "default",
		checked = false,
		indeterminate = false,
		disabled = false,
		label = "Accept the terms"
	}: {
		variant?: any;
		checked?: boolean;
		indeterminate?: boolean;
		disabled?: boolean;
		label?: string;
	} = $props();
</script>

<Checkbox {variant} {checked} {indeterminate} {disabled}>{label}</Checkbox>
