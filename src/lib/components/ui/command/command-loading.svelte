<script lang="ts">
	import { Command as CommandPrimitive } from "bits-ui";
	import { Skeleton } from "$lib/components/ui/skeleton";
	import { cn } from "$lib/utils";

	let { class: className = "", ...restProps }: CommandPrimitive.LoadingProps = $props();
</script>

<CommandPrimitive.Loading class={cn("px-4 py-2", className)} {...restProps}>
	<div class="flex items-center gap-2">
		<Skeleton class="h-4 w-4 rounded-full" />
		<Skeleton class="h-4 flex-1" />
	</div>
</CommandPrimitive.Loading>