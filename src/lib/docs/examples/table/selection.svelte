<script lang="ts">
	import { Table } from "$lib/components/ui/table";
	import { Badge } from "$lib/components/ui/badge";

	const columns = [
		{ key: "name", label: "File name", sortable: true },
		{ key: "type", label: "Type", sortable: true },
		{ key: "status", label: "Status" }
	];

	type Row = { id: string; name: string; type: string; status: string; [key: string]: string };

	const rows: Row[] = [
		{ id: "1", name: "report_q3.pdf", type: "PDF", status: "Ready" },
		{ id: "2", name: "logo_vector.svg", type: "Image", status: "Pending" },
		{ id: "3", name: "budget_2026.xlsx", type: "Sheet", status: "Failed" },
		{ id: "4", name: "meeting_notes.txt", type: "Text", status: "Ready" }
	];

	let selected = $state<(string | number)[]>(["2"]);
	let sort = $state<any>(null);

	const tone = (status: string) =>
		status === "Ready" ? "success" : status === "Pending" ? "warning" : "destructive";
</script>

<div class="w-full space-y-3">
	<Table
		{columns}
		{rows}
		selectionMode="multiple"
		bind:selectedKeys={selected}
		bind:sortConfig={sort}
		maxHeight="none"
	>
		{#snippet cell(row, col)}
			{#if col.key === "status"}
				<Badge variant={tone(row.status)}>{row.status}</Badge>
			{:else}
				<span class={col.key === "name" ? "font-medium" : "text-muted-foreground"}>
					{row[col.key]}
				</span>
			{/if}
		{/snippet}
	</Table>

	<p class="rounded bg-muted p-2 font-mono text-[10px] text-muted-foreground">
		selected {JSON.stringify(selected)} · sort {JSON.stringify(sort)}
	</p>
</div>
