<script lang="ts">
	import { Table } from "$lib/components/ui/table";
	import { Button } from "$lib/components/ui/button";

	const columns = [
		{ key: "name", label: "File name" },
		{ key: "type", label: "Type" },
		{ key: "size", label: "Size" }
	];

	let loading = $state(true);
	let rows = $state<any[]>([]);

	async function refresh() {
		loading = true;
		rows = [];
		await new Promise((resolve) => setTimeout(resolve, 1400));
		rows = [
			{ id: "1", name: "report_q3.pdf", type: "PDF", size: "2.4 MB" },
			{ id: "2", name: "logo_vector.svg", type: "Image", size: "124 KB" }
		];
		loading = false;
	}
</script>

<div class="w-full space-y-3">
	<Button size="sm" variant="outline" onclick={refresh} disabled={loading}>
		{loading ? "Loading..." : "Reload"}
	</Button>
	<Table {columns} {rows} isLoading={loading} maxHeight="none" />
</div>
