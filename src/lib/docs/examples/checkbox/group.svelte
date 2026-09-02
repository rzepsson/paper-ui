<script lang="ts">
	import * as Checkbox from "$lib/components/ui/checkbox";

	let features = $state(["analytics", "reporting"]);
</script>

<div class="w-full max-w-sm space-y-4">
	<Checkbox.Group bind:value={features} class="space-y-3">
		<Checkbox.GroupLabel class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
			Platform features
		</Checkbox.GroupLabel>

		<div class="space-y-3 pt-1">
			<Checkbox.Root value="analytics">Real-time analytics</Checkbox.Root>
			<Checkbox.Root value="reporting">Advanced reporting</Checkbox.Root>
			<Checkbox.Root value="api">API access</Checkbox.Root>
			<Checkbox.Root value="sso" disabled>SSO (Enterprise only)</Checkbox.Root>
		</div>
	</Checkbox.Group>

	<p class="rounded bg-muted p-2 font-mono text-[10px] text-muted-foreground">
		{JSON.stringify(features)}
	</p>
</div>
