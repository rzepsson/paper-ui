<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";
	import { Download, Pencil, Trash2 } from "lucide-svelte";
	import { toast } from "svelte-sonner";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Actions</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="w-56">
		<DropdownMenu.Group>
			<DropdownMenu.GroupHeading>File</DropdownMenu.GroupHeading>

			<DropdownMenu.Item onSelect={() => toast("Renaming")}>
				<Pencil class="size-4 opacity-70" />
				Rename
			</DropdownMenu.Item>

			<DropdownMenu.Item onSelect={() => toast("Exporting")}>
				<Download class="size-4 opacity-70" />
				Export
				<DropdownMenu.Shortcut>⌘E</DropdownMenu.Shortcut>
			</DropdownMenu.Item>

			<DropdownMenu.Separator class="my-1" />

			<DropdownMenu.Item
				class="text-destructive data-highlighted:bg-destructive/10 data-highlighted:text-destructive data-highlighted:outline-destructive"
				onSelect={() => toast.error("Deleted")}
			>
				<Trash2 class="size-4 opacity-70" />
				Delete
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
