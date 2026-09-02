<script lang="ts">
	import { ArrowRight, Boxes, Keyboard, Palette, Terminal } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { entries, navGroups } from "$lib/docs/registry";
	import CodeBlock from "$lib/docs/ui/code-block.svelte";

	const principles = [
		{
			icon: Boxes,
			title: "bits-ui underneath",
			body: "Focus traps, roving tabindex, typeahead and ARIA all come from the primitives. This library only writes the classes on top."
		},
		{
			icon: Palette,
			title: "Tokens, not colours",
			body: "Every colour is an OKLCH custom property handed to Tailwind through @theme inline. Dark mode is the same names with different numbers, so no component knows which theme is on."
		},
		{
			icon: Terminal,
			title: "You own the source",
			body: "Nothing is imported from a package at runtime. The CLI copies the files into your repo and they are yours to edit."
		},
		{
			icon: Keyboard,
			title: "Keyboard first",
			body: "Every interactive component documents its shortcuts, and every one of them is tested against the primitive that supplies it."
		}
	];
</script>

<svelte:head>
	<title>Introduction — paperui</title>
	<meta
		name="description"
		content="A Svelte 5 component library built on bits-ui primitives and styled with Tailwind v4."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl py-10 pb-24">
	<p class="text-sm font-medium text-primary">Getting started</p>
	<h1 class="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Introduction</h1>
	<p class="mt-4 text-lg leading-relaxed text-muted-foreground">
		paperui is {entries.length} Svelte 5 components built on bits-ui primitives and styled with Tailwind
		v4. Install them with the shadcn CLI and the source lands in your project, where you can change
		anything.
	</p>

	<div class="mt-8 flex flex-wrap gap-3">
		<Button href="/docs/installation">
			Install
			<ArrowRight />
		</Button>
		<Button variant="outline" href="/docs/components/button">Browse components</Button>
	</div>

	<section class="mt-14 space-y-4">
		<h2 class="text-xl font-semibold tracking-tight">How it works</h2>
		<p class="text-sm leading-relaxed text-muted-foreground">
			There is no <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">npm i paperui</code>.
			Each component is a small set of files that the CLI writes into
			<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs"
				>src/lib/components/ui/</code
			>. Editing a component means editing a file you can see, not overriding a package.
		</p>
		<CodeBlock
			lang="bash"
			code={`npx shadcn-svelte@latest add https://paper-ui.com/r/button.json`}
		/>
	</section>

	<section class="mt-14 space-y-5">
		<h2 class="text-xl font-semibold tracking-tight">Principles</h2>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each principles as principle (principle.title)}
				{@const Icon = principle.icon}
				<div class="rounded-lg border border-border/60 bg-card p-5">
					<div
						class="mb-3 flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary"
					>
						<Icon class="size-4" />
					</div>
					<h3 class="text-sm font-semibold">{principle.title}</h3>
					<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mt-14 space-y-5">
		<h2 class="text-xl font-semibold tracking-tight">What is inside</h2>
		{#each navGroups as group (group.category)}
			<div>
				<h3 class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
					{group.category}
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each group.items as item (item.slug)}
						<a
							href={`/docs/components/${item.slug}`}
							class="rounded-full border border-border/60 px-3 py-1 text-sm transition-colors hover:border-foreground/25 hover:bg-accent"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</section>
</div>
