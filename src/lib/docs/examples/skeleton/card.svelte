<script lang="ts">
	import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<div class="w-full max-w-sm rounded-lg border border-border/60 bg-card p-4">
	<div class="flex items-center gap-3">
		<Skeleton class="size-10 rounded-full" />
		<div class="flex-1 space-y-2">
			<Skeleton class="h-3.5 w-1/2" />
			<Skeleton class="h-3 w-1/3" />
		</div>
	</div>
	<Skeleton class="mt-4 h-28 w-full" />
</div>
