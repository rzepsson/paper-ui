<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="w-full max-w-sm space-y-2">
	<Label for="in-disabled">Workspace ID</Label>
	<Input id="in-disabled" disabled value="ws_8f21c04b" />
	<p class="text-xs text-muted-foreground">Disabled fields keep their border on hover.</p>
</div>
