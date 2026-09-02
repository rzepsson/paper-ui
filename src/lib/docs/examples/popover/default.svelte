<script lang="ts">
	import * as Popover from "$lib/components/ui/popover";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Settings2 } from "lucide-svelte";

	let width = $state("1024");
	let height = $state("768");
</script>

<Popover.Root>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline">
				<Settings2 />
				Canvas size
			</Button>
		{/snippet}
	</Popover.Trigger>

	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="space-y-1.5">
				<h4 class="font-medium leading-none">Geometry</h4>
				<p class="text-[13px] text-muted-foreground">Set the default render dimensions.</p>
			</div>

			<div class="grid gap-3">
				<div class="flex items-center gap-4">
					<Label for="pop-width" class="w-16 text-[13px]">Width</Label>
					<Input id="pop-width" bind:value={width} class="h-8 text-[13px]" />
				</div>
				<div class="flex items-center gap-4">
					<Label for="pop-height" class="w-16 text-[13px]">Height</Label>
					<Input id="pop-height" bind:value={height} class="h-8 text-[13px]" />
				</div>
			</div>

			<div class="flex justify-end">
				<Popover.Close>
					{#snippet child({ props })}
						<Button {...props} size="sm">Apply</Button>
					{/snippet}
				</Popover.Close>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
