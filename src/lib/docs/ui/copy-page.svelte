<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";
	import { Check, ChevronDown, ExternalLink, FileText } from "lucide-svelte";
	import { entryToMarkdown } from "../markdown";
	import type { DocEntry } from "../types";

	let { entry }: { entry: DocEntry } = $props();

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	async function copyMarkdown() {
		try {
			await navigator.clipboard.writeText(entryToMarkdown(entry));
		} catch {
			return;
		}
		copied = true;
		clearTimeout(timer);
		timer = setTimeout(() => (copied = false), 2000);
	}

	$effect(() => () => clearTimeout(timer));
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="outline" size="sm">
				{#if copied}
					<Check class="text-emerald-600 dark:text-emerald-400" />
					Copied
				{:else}
					<FileText />
					Copy page
				{/if}
				<ChevronDown class="opacity-60" />
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="end" class="min-w-64">
		<DropdownMenu.Item onSelect={copyMarkdown}>
			<FileText class="size-4 shrink-0 text-muted-foreground" />
			<DropdownMenu.ItemText>
				<DropdownMenu.ItemLabel>Copy as Markdown</DropdownMenu.ItemLabel>
				<DropdownMenu.ItemDescription>
					The whole page, ready to paste into an LLM.
				</DropdownMenu.ItemDescription>
			</DropdownMenu.ItemText>
		</DropdownMenu.Item>

		<DropdownMenu.Item>
			{#snippet child({ props })}
				<a {...props} href={`/docs/components/${entry.slug}.md`} target="_blank" rel="noreferrer">
					<ExternalLink class="size-4 shrink-0 text-muted-foreground" />
					<DropdownMenu.ItemText>
						<DropdownMenu.ItemLabel>View as Markdown</DropdownMenu.ItemLabel>
						<DropdownMenu.ItemDescription>Opens the raw .md in a new tab.</DropdownMenu.ItemDescription>
					</DropdownMenu.ItemText>
				</a>
			{/snippet}
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
