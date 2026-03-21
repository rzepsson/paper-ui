<script lang="ts">
	import * as Dialog from "$lib/components/ui/dialog";
	import Root from "./command.svelte";
	import { type Snippet } from "svelte";

	let { open = $bindable(false), children, ...restProps }: { open?: boolean, children: Snippet } = $props();
</script>

<Dialog.Root bind:open {...restProps}>
	<Dialog.Portal>
		<Dialog.Overlay class="bg-background/80 backdrop-blur-sm" />
		<Dialog.Content class="overflow-hidden p-0 shadow-2xl sm:max-w-137.5 border-border/60 bg-card/95 backdrop-blur-xl">
			<Root class="**:data-command-root:h-112.5">
				{@render children()}
			</Root>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>