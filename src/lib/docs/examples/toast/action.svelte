<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { toast } from "svelte-sonner";

	function withUndo() {
		toast("Message deleted", {
			action: {
				label: "Undo",
				onClick: () => toast.success("Restored")
			}
		});
	}
</script>

<Button variant="outline" onclick={withUndo}>Delete with undo</Button>
