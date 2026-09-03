<script lang="ts">
	import * as Select from "$lib/components/ui/select";
	import { Label } from "$lib/components/ui/label";

	let boxed = $state("");
	let underlined = $state("");
</script>

<div class="grid w-full max-w-lg gap-6 sm:grid-cols-2">
	<div class="space-y-2">
		<Label>Default</Label>
		<Select.Root type="single" bind:value={boxed}>
			<Select.Trigger>{boxed || "Pick one..."}</Select.Trigger>
			<Select.Content>
				<Select.Item value="Svelte" label="Svelte" />
				<Select.Item value="React" label="React" />
			</Select.Content>
		</Select.Root>
	</div>

	<div class="space-y-2">
		<Label>Underline</Label>
		<Select.Root type="single" bind:value={underlined}>
			<Select.Trigger variant="underline">{underlined || "Pick one..."}</Select.Trigger>
			<Select.Content>
				<Select.Item value="Svelte" label="Svelte" />
				<Select.Item value="React" label="React" />
			</Select.Content>
		</Select.Root>
	</div>
</div>
