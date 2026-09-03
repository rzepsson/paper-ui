<script lang="ts">
	import { Checkbox } from "$lib/components/ui/checkbox";

	let plain = $state(false);
	let drawn = $state(false);
</script>

<div class="space-y-4">
	<Checkbox bind:checked={plain}>Default — the tick fades in</Checkbox>
	<Checkbox bind:checked={drawn} variant="draw">Draw — the tick strokes itself on</Checkbox>
	<p class="text-xs text-muted-foreground">Tick each one to compare.</p>
</div>
