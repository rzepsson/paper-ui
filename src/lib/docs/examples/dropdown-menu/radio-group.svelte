<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";

	let sortBy = $state("date");
</script>

<div class="flex items-center gap-3">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Sort by</Button>
			{/snippet}
		</DropdownMenu.Trigger>

		<DropdownMenu.Content class="w-48">
			<DropdownMenu.RadioGroup bind:value={sortBy}>
				<DropdownMenu.GroupHeading>Sort by</DropdownMenu.GroupHeading>
				<DropdownMenu.Separator class="mb-1" />

				<DropdownMenu.RadioItem value="date" closeOnSelect={false}>Date</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="name" closeOnSelect={false}>Name</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="size" closeOnSelect={false}>Size</DropdownMenu.RadioItem>
			</DropdownMenu.RadioGroup>
		</DropdownMenu.Content>
	</DropdownMenu.Root>

	<span class="font-mono text-xs text-muted-foreground">{sortBy}</span>
</div>
