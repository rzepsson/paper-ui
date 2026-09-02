<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { toast } from "svelte-sonner";
</script>

<div class="flex flex-wrap items-center gap-3">
	<Button
		variant="outline"
		onclick={() => toast("Saved", { description: "Your project has been updated." })}
	>
		Default
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.success("Payment accepted", { description: "The invoice is on its way." })}
	>
		Success
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.error("Session expired", { description: "Log in again to continue." })}
	>
		Error
	</Button>
	<Button
		variant="outline"
		onclick={() => toast.warning("Storage almost full", { description: "92% of your quota is used." })}
	>
		Warning
	</Button>
	<Button variant="outline" onclick={() => toast.info("A new version is available.")}>Info</Button>
</div>
