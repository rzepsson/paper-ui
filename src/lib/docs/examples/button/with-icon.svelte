<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Download, Trash2 } from "lucide-svelte";
</script>

<div class="flex flex-wrap items-center gap-3">
	<Button>
		<Download />
		Export
	</Button>
	<Button variant="destructive">
		<Trash2 />
		Delete
	</Button>
</div>
