<script lang="ts">
	import { Checkbox } from "$lib/components/ui/checkbox";

	let accepted = $state(false);
</script>

<Checkbox bind:checked={accepted}>Accept the terms and conditions</Checkbox>
