<script lang="ts">
	import * as Command from "$lib/components/ui/command";
	import { goto } from "$app/navigation";
	import { navGroups } from "../registry";
	import { Search } from "lucide-svelte";
	import { cn } from "$lib/utils";

	let { class: className = "" }: { class?: string } = $props();

	let open = $state(false);
	let isMac = $state(false);

	$effect(() => {
		isMac = /mac/i.test(navigator.platform ?? navigator.userAgent);

		function onKeydown(event: KeyboardEvent) {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				open = !open;
			}
		}

		document.addEventListener("keydown", onKeydown);
		return () => document.removeEventListener("keydown", onKeydown);
	});

	function select(slug: string) {
		open = false;
		goto(`/docs/components/${slug}`);
	}
</script>

<button
	type="button"
	onclick={() => (open = true)}
	class={cn(
		"inline-flex h-9 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-input bg-background px-3 text-sm text-muted-foreground",
		"transition-colors hover:border-foreground/30 hover:text-foreground",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		className
	)}
>
	<Search class="size-4" />
	<span class="hidden sm:inline">Search</span>
	<kbd
		class="ml-auto hidden rounded border border-border/70 bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline-block"
	>
		{isMac ? "⌘" : "Ctrl"} K
	</kbd>
</button>

<Command.Dialog bind:open>
	<Command.Input placeholder="Search components..." />
	<Command.List>
		<Command.Empty>No component matches that search.</Command.Empty>
		{#each navGroups as group (group.category)}
			<Command.Group heading={group.category}>
				{#each group.items as item (item.slug)}
					<Command.Item value={`${group.category} ${item.title}`} onSelect={() => select(item.slug)}>
						{item.title}
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
	</Command.List>
</Command.Dialog>
