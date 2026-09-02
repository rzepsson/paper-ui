<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Plus } from "lucide-svelte";
</script>

<div class="flex flex-wrap items-center gap-3">
	<Button size="sm">Small</Button>
	<Button size="default">Default</Button>
	<Button size="lg">Large</Button>
	<Button size="icon" aria-label="Add item">
		<Plus />
	</Button>
</div>
