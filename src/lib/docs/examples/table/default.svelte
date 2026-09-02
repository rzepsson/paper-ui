<script lang="ts">
	import { Table } from "$lib/components/ui/table";

	const columns = [
		{ key: "name", label: "File name" },
		{ key: "type", label: "Type" },
		{ key: "size", label: "Size", class: "text-right" }
	];

	const rows = [
		{ id: "1", name: "report_q3.pdf", type: "PDF", size: "2.4 MB" },
		{ id: "2", name: "logo_vector.svg", type: "Image", size: "124 KB" },
		{ id: "3", name: "budget_2026.xlsx", type: "Sheet", size: "4.1 MB" }
	];
</script>

<div class="w-full">
	<Table {columns} {rows} maxHeight="none" />
</div>
