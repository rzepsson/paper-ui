<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
</script>

<div class="w-full max-w-sm space-y-3">
	{#each [{ name: "report_q3.pdf", state: "success", label: "Ready" }, { name: "budget.xlsx", state: "destructive", label: "Failed" }] as file (file.name)}
		<div class="flex items-center justify-between rounded-lg border border-border/60 bg-card px-4 py-3">
			<span class="text-sm font-medium">{file.name}</span>
			<Badge variant={file.state as any}>{file.label}</Badge>
		</div>
	{/each}
</div>
