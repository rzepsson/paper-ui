<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";
	import { Label } from "$lib/components/ui/label";

	let enabled = $state(true);
</script>

<div class="flex items-center gap-3">
	<Switch id="wifi" bind:checked={enabled} />
	<Label for="wifi">Wi-Fi is {enabled ? "on" : "off"}</Label>
</div>
