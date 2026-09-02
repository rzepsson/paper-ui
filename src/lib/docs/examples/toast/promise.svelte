<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { toast } from "svelte-sonner";

	function exportFiles() {
		const work = new Promise((resolve) => setTimeout(resolve, 2000));

		toast.promise(work, {
			loading: "Exporting files...",
			success: "Export finished",
			error: "The export failed"
		});
	}
</script>

<Button variant="outline" onclick={exportFiles}>Run a promise</Button>
