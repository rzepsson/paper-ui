<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs";
	import { Badge } from "$lib/components/ui/badge";
</script>

<div class="w-full max-w-xl">
	<Tabs.Root value="all">
		<Tabs.List>
			<Tabs.Trigger value="all">
				All
				<Badge variant="secondary" class="ml-2 h-4 px-1 text-[10px]">128</Badge>
			</Tabs.Trigger>
			<Tabs.Trigger value="active">Active</Tabs.Trigger>
			<Tabs.Trigger value="archived">Archived</Tabs.Trigger>
			<Tabs.Trigger value="settings" disabled>Settings</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="all">
			<div class="rounded-lg border border-dashed border-border/60 p-8 text-center text-sm text-muted-foreground">
				Every record, unfiltered.
			</div>
		</Tabs.Content>
		<Tabs.Content value="active">
			<div class="p-4 text-sm">Active records only.</div>
		</Tabs.Content>
		<Tabs.Content value="archived">
			<div class="p-4 text-sm text-muted-foreground">The archive is empty.</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
