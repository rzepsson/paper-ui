<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";

	let value = $state("");
</script>

<div class="w-full max-w-sm space-y-2">
	<Label for="project">Project name</Label>
	<Input id="project" bind:value placeholder="Untitled project" />
	<p class="text-xs text-muted-foreground">Bound value: {value || "(empty)"}</p>
</div>
