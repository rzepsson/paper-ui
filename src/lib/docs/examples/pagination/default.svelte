<script lang="ts">
	import { Pagination } from "$lib/components/ui/pagination";

	let page = $state(1);
	const total = 100;
	const perPage = 10;
	const from = $derived((page - 1) * perPage + 1);
	const to = $derived(Math.min(page * perPage, total));
</script>

<div class="flex w-full max-w-xl flex-col items-center gap-4">
	<Pagination count={total} {perPage} bind:page />
	<p class="text-xs text-muted-foreground">
		Showing <span class="font-medium text-foreground">{from}-{to}</span> of
		<span class="font-medium text-foreground">{total}</span>
	</p>
</div>
