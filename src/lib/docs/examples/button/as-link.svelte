<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ExternalLink } from "lucide-svelte";
</script>

<div class="flex flex-wrap items-center gap-3">
	<Button href="https://bits-ui.com" target="_blank" rel="noreferrer">
		Open bits-ui
		<ExternalLink />
	</Button>
	<Button variant="outline" disabled>Disabled</Button>
</div>
