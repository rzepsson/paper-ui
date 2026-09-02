<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";

	let open = $state(["notifications"]);
</script>

<div class="w-full max-w-xl">
	<Accordion.Root type="multiple" bind:value={open}>
		<Accordion.Item value="notifications">
			<Accordion.Header>
				<Accordion.Trigger>Notifications</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>Daily digests, instant alerts, or nothing at all.</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="privacy">
			<Accordion.Header>
				<Accordion.Trigger>Privacy</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>Your profile is public; your email address stays hidden.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>

	<p class="mt-3 rounded bg-muted p-2 font-mono text-[10px] text-muted-foreground">
		{JSON.stringify(open)}
	</p>
</div>
