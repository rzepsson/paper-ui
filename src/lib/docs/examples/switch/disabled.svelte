<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="space-y-4">
	<div class="flex items-center gap-3">
		<Switch id="sw-off" disabled />
		<Label for="sw-off">Disabled, off</Label>
	</div>
	<div class="flex items-center gap-3">
		<Switch id="sw-on" disabled checked />
		<Label for="sw-on">Disabled, on</Label>
	</div>
</div>
