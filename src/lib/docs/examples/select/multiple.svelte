<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	let modules = $state<string[]>(["auth"]);
</script>

<div class="w-64">
	<Select.Root type="multiple" bind:value={modules}>
		<Select.Trigger>
			{modules.length > 0 ? `${modules.length} selected` : "Pick modules..."}
		</Select.Trigger>
		<Select.Content>
			<Select.Item type="checkbox" value="auth" label="Authentication" />
			<Select.Item type="checkbox" value="db" label="Database" />
			<Select.Item type="checkbox" value="storage" label="Object storage" />
			<Select.Item type="checkbox" value="queue" label="Job queue" />
		</Select.Content>
	</Select.Root>
</div>
