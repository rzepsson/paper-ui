<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	let framework = $state("");
</script>

<div class="w-64">
	<Select.Root type="single" bind:value={framework}>
		<Select.Trigger>
			{framework || "Pick a framework..."}
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="Svelte" label="Svelte" />
			<Select.Item value="React" label="React" />
			<Select.Item value="Vue" label="Vue" />
			<Select.Item value="Solid" label="Solid" disabled />
		</Select.Content>
	</Select.Root>
</div>
