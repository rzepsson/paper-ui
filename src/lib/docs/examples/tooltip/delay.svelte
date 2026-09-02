<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="flex flex-wrap items-center gap-3">
	<Tooltip.Root delayDuration={0}>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Instant</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>Shows the moment you hover</Tooltip.Content>
	</Tooltip.Root>

	<Tooltip.Root delayDuration={700}>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline" size="sm">Default (700ms)</Button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>Waits, so a passing cursor does not trigger it</Tooltip.Content>
	</Tooltip.Root>
</div>
