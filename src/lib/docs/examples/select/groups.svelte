<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	let stack = $state("");
</script>

<div class="w-64">
	<Select.Root type="single" bind:value={stack}>
		<Select.Trigger>{stack || "Choose a runtime..."}</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.GroupHeading>Frontend</Select.GroupHeading>
				<Select.Item value="Svelte" label="Svelte" />
				<Select.Item value="React" label="React" />
			</Select.Group>

			<Select.Separator />

			<Select.Group>
				<Select.GroupHeading>Backend</Select.GroupHeading>
				<Select.Item value="Node" label="Node.js" />
				<Select.Item value="Deno" label="Deno" />
				<Select.Item value="Bun" label="Bun" />
			</Select.Group>
		</Select.Content>
	</Select.Root>
</div>
