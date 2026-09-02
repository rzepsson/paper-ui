<script lang="ts">
	import { Table } from "$lib/components/ui/table";

	const columns = [
		{ key: "metric", label: "Metric" },
		{ key: "value", label: "Value", class: "text-right" }
	];

	const rows = [
		{ id: "1", metric: "Requests", value: "1.2M" },
		{ id: "2", metric: "Errors", value: "412" },
		{ id: "3", metric: "p95 latency", value: "184 ms" }
	];
</script>

<div class="w-full">
	<Table {columns} {rows} variant="quiet" maxHeight="none" />
</div>
