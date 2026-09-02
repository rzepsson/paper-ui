<script lang="ts">
	import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-svelte";
	import CodeBlock from "$lib/docs/ui/code-block.svelte";
	import ComponentPreview from "$lib/docs/ui/component-preview.svelte";
	import CopyPage from "$lib/docs/ui/copy-page.svelte";
	import Playground from "$lib/docs/ui/playground.svelte";
	import PropsTable from "$lib/docs/ui/props-table.svelte";
	import RichText from "$lib/docs/ui/rich-text.svelte";
	import TocRail from "$lib/docs/ui/toc-rail.svelte";
	import type { TocItem } from "$lib/docs/types";
	import { Badge } from "$lib/components/ui/badge";
	import { cliCommand, componentFiles } from "$lib/docs/install";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();

	const entry = $derived(data.entry);
	const files = $derived(componentFiles(entry));

	const toc = $derived.by(() => {
		const items: TocItem[] = [{ id: "installation", label: "Installation" }];
		if (entry.anatomy) items.push({ id: "anatomy", label: "Anatomy" });
		if (entry.playground) items.push({ id: "playground", label: "Playground" });
		if (entry.examples.length) {
			items.push({ id: "examples", label: "Examples" });
			for (const example of entry.examples) {
				items.push({ id: example.id, label: example.title, depth: 2 });
			}
		}
		items.push({ id: "api-reference", label: "API reference" });
		if (entry.keyboard?.length) items.push({ id: "keyboard", label: "Keyboard" });
		return items;
	});
</script>

<svelte:head>
	<title>{entry.title} — paperui</title>
	<meta name="description" content={entry.description} />
</svelte:head>

<div class="mx-auto flex w-full max-w-6xl gap-8">
	<article class="min-w-0 flex-1 py-10 pb-24 xl:max-w-3xl">
		<nav class="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
			<a href="/docs" class="hover:text-foreground">Docs</a>
			<span aria-hidden="true">/</span>
			<span>{entry.category}</span>
			<span aria-hidden="true">/</span>
			<span class="text-foreground">{entry.title}</span>
		</nav>

		<header class="space-y-4">
			<div class="flex flex-wrap items-start justify-between gap-4">
				<h1 class="text-3xl font-bold tracking-tight md:text-4xl">{entry.title}</h1>
				<CopyPage {entry} />
			</div>

			<p class="text-lg leading-relaxed text-muted-foreground">{entry.description}</p>

			<div class="flex flex-wrap items-center gap-2">
				<Badge variant="outline">{entry.category}</Badge>
				{#if entry.primitive}
					<a
						href={`https://bits-ui.com/docs/components/${entry.slug}`}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
					>
						bits-ui {entry.primitive}
						<ExternalLink class="size-3" />
					</a>
				{/if}
				{#each entry.dependencies ?? [] as dependency (dependency)}
					<Badge variant="secondary">{dependency}</Badge>
				{/each}
			</div>
		</header>

		<section id="installation" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Installation</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Pull the source into your project with the shadcn CLI, or copy the files listed below.
			</p>
			<CodeBlock code={cliCommand(entry.slug)} lang="bash" />
			{#if files.length}
				<details class="rounded-lg border border-border/60 bg-card px-4 py-3 text-sm">
					<summary class="cursor-pointer select-none font-medium">
						Files this adds ({files.length})
					</summary>
					<ul class="mt-3 space-y-1 font-mono text-xs text-muted-foreground">
						{#each files as file (file)}
							<li>src/lib/components/ui/{file}</li>
						{/each}
					</ul>
				</details>
			{/if}
		</section>

		{#if entry.anatomy}
			<section id="anatomy" class="mt-12 scroll-mt-24 space-y-4">
				<h2 class="text-xl font-semibold tracking-tight">Anatomy</h2>
				<p class="text-sm leading-relaxed text-muted-foreground">
					How the parts nest. Each one is a separate export you can style on its own.
				</p>
				<CodeBlock code={entry.anatomy} lang="svelte" />
			</section>
		{/if}

		{#if entry.playground}
			<section id="playground" class="mt-12 scroll-mt-24 space-y-4">
				<h2 class="text-xl font-semibold tracking-tight">Playground</h2>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Change the props and the snippet underneath updates with them.
				</p>
				{#key entry.slug}
					<Playground playground={entry.playground} />
				{/key}
			</section>
		{/if}

		{#if entry.examples.length}
			<section id="examples" class="mt-12 scroll-mt-24 space-y-8">
				<h2 class="text-xl font-semibold tracking-tight">Examples</h2>
				{#each entry.examples as example (example.id)}
					<ComponentPreview slug={entry.slug} {example} />
				{/each}
			</section>
		{/if}

		<section id="api-reference" class="mt-12 scroll-mt-24 space-y-6">
			<h2 class="text-xl font-semibold tracking-tight">API reference</h2>
			{#each entry.props as group (group.title)}
				<PropsTable {group} />
			{/each}
		</section>

		{#if entry.keyboard?.length}
			<section id="keyboard" class="mt-12 scroll-mt-24 space-y-4">
				<h2 class="text-xl font-semibold tracking-tight">Keyboard</h2>
				<div class="overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm">
					<table class="w-full border-collapse text-left text-sm">
						<thead
							class="border-b border-border/60 bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground"
						>
							<tr>
								<th scope="col" class="px-5 py-3 font-medium">Key</th>
								<th scope="col" class="px-5 py-3 font-medium">Behaviour</th>
							</tr>
						</thead>
						<tbody>
							{#each entry.keyboard as shortcut (shortcut.keys)}
								<tr class="border-b border-border/40 last:border-0">
									<td class="whitespace-nowrap px-5 py-3 align-top">
										<kbd
											class="rounded border border-border/70 bg-muted px-1.5 py-0.5 font-mono text-[11px]"
										>
											{shortcut.keys}
										</kbd>
									</td>
									<td class="px-5 py-3 align-top text-xs leading-relaxed text-muted-foreground">
										<RichText value={shortcut.description} />
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		{/if}

		<nav
			class="mt-16 flex items-center justify-between gap-4 border-t border-border/60 pt-6"
			aria-label="Component pagination"
		>
			{#if data.previous}
				<a
					href={`/docs/components/${data.previous.slug}`}
					class="inline-flex min-w-0 flex-col gap-0.5 rounded-lg border border-border/60 px-4 py-3 transition-colors hover:border-foreground/25"
				>
					<span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
						<ArrowLeft class="size-3.5" /> Previous
					</span>
					<span class="truncate text-sm font-medium">{data.previous.title}</span>
				</a>
			{:else}
				<span></span>
			{/if}

			{#if data.next}
				<a
					href={`/docs/components/${data.next.slug}`}
					class="inline-flex min-w-0 flex-col items-end gap-0.5 rounded-lg border border-border/60 px-4 py-3 text-right transition-colors hover:border-foreground/25"
				>
					<span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
						Next <ArrowRight class="size-3.5" />
					</span>
					<span class="truncate text-sm font-medium">{data.next.title}</span>
				</a>
			{/if}
		</nav>
	</article>

	<TocRail items={toc} />
</div>
