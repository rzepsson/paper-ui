<script lang="ts">
	import { Input } from "$lib/components/ui/input";

	let {
		variant = "default",
		placeholder = "Type something",
		disabled = false
	}: { variant?: any; placeholder?: string; disabled?: boolean } = $props();
</script>

<div class="w-full max-w-sm">
	<Input {variant} {placeholder} {disabled} />
</div>
