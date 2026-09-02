<script lang="ts">
	import { Pagination } from "$lib/components/ui/pagination";

	let page = $state(6);
</script>

<div class="w-full max-w-xl space-y-6">
	<div class="space-y-2">
		<p class="text-center text-xs text-muted-foreground">siblingCount = 0</p>
		<Pagination count={200} perPage={10} bind:page siblingCount={0} />
	</div>
	<div class="space-y-2">
		<p class="text-center text-xs text-muted-foreground">siblingCount = 2</p>
		<Pagination count={200} perPage={10} bind:page siblingCount={2} />
	</div>
</div>
