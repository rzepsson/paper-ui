<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";

	let { variant = "default", label = "Badge" }: { variant?: any; label?: string } = $props();
</script>

<Badge {variant}>{label}</Badge>
