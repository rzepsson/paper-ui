<script lang="ts">
	import { Checkbox } from "$lib/components/ui/checkbox";

	let partial = $state(true);
</script>

<div class="space-y-4">
	<Checkbox checked>Checked</Checkbox>
	<Checkbox bind:indeterminate={partial}>Indeterminate</Checkbox>
	<Checkbox disabled>Disabled</Checkbox>
	<Checkbox disabled checked>Disabled and checked</Checkbox>
</div>
