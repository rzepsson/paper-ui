<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";
	import { Frame, Image as ImageIcon, MonitorSmartphone, Tablet } from "lucide-svelte";

	let showFiles = $state(true);
	let showFolders = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">Publish and export</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="w-72">
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<ImageIcon class="size-5 opacity-80" />
				<DropdownMenu.ItemText>
					<DropdownMenu.ItemLabel>Quick export</DropdownMenu.ItemLabel>
					<DropdownMenu.ItemDescription>Share a low-res snapshot.</DropdownMenu.ItemDescription>
				</DropdownMenu.ItemText>
				<DropdownMenu.Shortcut>⌘E</DropdownMenu.Shortcut>
			</DropdownMenu.Item>

			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					<Frame class="size-5 opacity-80" />
					<DropdownMenu.ItemText>
						<DropdownMenu.ItemLabel>Open a copy</DropdownMenu.ItemLabel>
						<DropdownMenu.ItemDescription>On iPad or desktop</DropdownMenu.ItemDescription>
					</DropdownMenu.ItemText>
				</DropdownMenu.SubTrigger>

				<DropdownMenu.SubContent class="w-60">
					<DropdownMenu.Item>
						<Tablet class="size-5 opacity-80" />
						<span>Illustrator for iPad</span>
					</DropdownMenu.Item>
					<DropdownMenu.Item disabled>
						<MonitorSmartphone class="size-5 opacity-80" />
						<span>Illustrator for desktop</span>
					</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>

			<DropdownMenu.Separator class="my-2" />

			<DropdownMenu.CheckboxItem bind:checked={showFiles}>Show files</DropdownMenu.CheckboxItem>
			<DropdownMenu.CheckboxItem bind:checked={showFolders}>Show folders</DropdownMenu.CheckboxItem>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
