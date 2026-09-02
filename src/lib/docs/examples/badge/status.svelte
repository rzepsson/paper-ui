<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { CircleCheck, CircleAlert, Info } from "lucide-svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
	<Badge variant="success">
		<CircleCheck />
		Ready
	</Badge>
	<Badge variant="warning">
		<CircleAlert />
		Pending
	</Badge>
	<Badge variant="info">
		<Info />
		Queued
	</Badge>
</div>
