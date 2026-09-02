<script lang="ts">
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
</script>

<div class="w-full max-w-sm space-y-2">
	<div class="flex items-baseline justify-between">
		<Label for="handle">Workspace handle</Label>
		<span class="text-xs text-muted-foreground">Required</span>
	</div>
	<Input id="handle" placeholder="acme" />
	<p class="text-xs text-muted-foreground">Lowercase letters, numbers and dashes.</p>
</div>
