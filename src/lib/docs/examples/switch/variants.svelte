<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";
	import { Label } from "$lib/components/ui/label";

	let plain = $state(true);
	let springy = $state(true);
</script>

<div class="space-y-4">
	<div class="flex items-center gap-3">
		<Switch id="sw-default" bind:checked={plain} />
		<Label for="sw-default">Default — the thumb slides</Label>
	</div>
	<div class="flex items-center gap-3">
		<Switch id="sw-spring" variant="spring" bind:checked={springy} />
		<Label for="sw-spring">Spring — it overshoots and squashes on press</Label>
	</div>
</div>
