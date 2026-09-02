<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";
</script>

<div class="w-full max-w-xl">
	<Accordion.Root type="single" variant="quiet" value="a">
		<Accordion.Item value="a">
			<Accordion.Header>
				<Accordion.Trigger>Where does the border go?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				The quiet variant drops the rules between rows, which suits a sidebar or a nested panel.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="b">
			<Accordion.Header>
				<Accordion.Trigger>Anything else?</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>The triggers also gain a rounded hover surface.</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>
