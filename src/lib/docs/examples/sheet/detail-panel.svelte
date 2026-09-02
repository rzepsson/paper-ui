<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Badge } from "$lib/components/ui/badge";

	let name = $state("report_q3.pdf");
</script>

<Sheet.Root>
	<Sheet.Trigger>
		{#snippet child({ props })}
			<Button {...props}>Open file details</Button>
		{/snippet}
	</Sheet.Trigger>

	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>File details</Sheet.Title>
			<Sheet.Description>Metadata and permissions for the selected resource.</Sheet.Description>
		</Sheet.Header>

		<div class="grid flex-1 gap-6 py-8">
			<div class="space-y-3 rounded-lg border border-border/40 bg-muted/30 p-4 text-sm">
				<div class="flex justify-between">
					<span class="text-muted-foreground">Resource ID</span>
					<span class="font-mono text-[11px]">res_8f21c04b</span>
				</div>
				<div class="flex justify-between">
					<span class="text-muted-foreground">Last modified</span>
					<span class="font-medium">Today, 14:20</span>
				</div>
			</div>

			<div class="space-y-2">
				<Label for="sheet-name">Display name</Label>
				<Input id="sheet-name" bind:value={name} />
			</div>

			<div class="space-y-2">
				<Label>Tags</Label>
				<div class="flex flex-wrap gap-2">
					<Badge variant="outline">#internal</Badge>
					<Badge variant="outline">#q3-report</Badge>
				</div>
			</div>
		</div>

		<Sheet.Footer>
			<Sheet.Close>
				{#snippet child({ props })}
					<Button {...props} class="w-full sm:w-auto">Save changes</Button>
				{/snippet}
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
