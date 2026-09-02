<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";

	let open = $state("item-1");
</script>

<div class="w-full max-w-xl">
	<Accordion.Root type="single" bind:value={open}>
		<Accordion.Item value="item-1">
			<Accordion.Header>
				<Accordion.Trigger>Personal information</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				Your name and contact preferences. The body text is indented to line up past the chevron.
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-2">
			<Accordion.Header>
				<Accordion.Trigger>Billing address</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				The postcode and city have to match your bank's records for the card to authorise.
			</Accordion.Content>
		</Accordion.Item>

		<Accordion.Item value="item-3" disabled>
			<Accordion.Header>
				<Accordion.Trigger>Danger zone (disabled)</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>Never reachable while the item is disabled.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
