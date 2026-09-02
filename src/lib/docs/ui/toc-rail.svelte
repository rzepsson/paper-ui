<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import Toc from "./toc.svelte";
	import type { TocItem } from "../types";

	let { items }: { items: TocItem[] } = $props();
</script>

<aside class="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 xl:block">
	<ScrollArea class="h-full" viewportClass="py-10 pr-2">
		<Toc {items} />
	</ScrollArea>
</aside>
