<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs";
	import { Button } from "$lib/components/ui/button";

	let tab = $state("account");
</script>

<div class="w-full max-w-xl space-y-4">
	<div class="flex items-center gap-2">
		<Button size="sm" variant="outline" onclick={() => (tab = "account")}>Go to account</Button>
		<Button size="sm" variant="outline" onclick={() => (tab = "billing")}>Go to billing</Button>
	</div>

	<Tabs.Root bind:value={tab}>
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="billing">Billing</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account">
			<p class="p-4 text-sm text-muted-foreground">Current tab: <code>{tab}</code></p>
		</Tabs.Content>
		<Tabs.Content value="billing">
			<p class="p-4 text-sm text-muted-foreground">Current tab: <code>{tab}</code></p>
		</Tabs.Content>
	</Tabs.Root>
</div>
