<script lang="ts">
	import { ArrowRight, Check, Github, Keyboard, Palette, PackageOpen } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import { Toaster } from "$lib/components/ui/sonner";
	import SiteHeader from "$lib/docs/ui/site-header.svelte";
	import AppShowcase from "$lib/docs/ui/app-showcase.svelte";
	import { reveal } from "$lib/docs/ui/reveal";
	import { entries } from "$lib/docs/registry";
	import { cliCommand } from "$lib/docs/install";

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	const command = cliCommand("button");

	const features = [
		{
			icon: Keyboard,
			title: "Keyboard complete",
			body: "Focus traps, roving tabindex, typeahead and ARIA come from bits-ui. Every component page documents its shortcuts."
		},
		{
			icon: Palette,
			title: "One token, whole theme",
			body: "Colours are OKLCH custom properties. Change the accent and every filled button, active tab and focus ring follows."
		},
		{
			icon: PackageOpen,
			title: "The source is yours",
			body: "The CLI copies files into your repo. No wrapper package, no override fights, no waiting on a release."
		}
	];

	async function copyCommand() {
		try {
			await navigator.clipboard.writeText(command);
		} catch {
			return;
		}
		copied = true;
		clearTimeout(timer);
		timer = setTimeout(() => (copied = false), 2000);
	}

	$effect(() => () => clearTimeout(timer));
</script>

<svelte:head>
	<title>paperui — Svelte 5 component library</title>
	<meta
		name="description"
		content="An open-source Svelte 5 component library built on bits-ui primitives and Tailwind v4. Install it with the shadcn CLI and own the source."
	/>
</svelte:head>

<div class="landing min-h-screen bg-background font-sans text-foreground">
	<SiteHeader />

	<main>
		<section class="mx-auto max-w-6xl px-6 pb-14 pt-20 text-center md:pt-28">
			<div class="rise" style="--rise-delay: 0ms">
				<Badge variant="outline" class="mb-6 gap-1.5 py-1">
					<span class="size-1.5 rounded-full bg-primary"></span>
					{entries.length} components · Svelte 5 · Tailwind v4
				</Badge>
			</div>

			<h1
				class="rise text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
				style="--rise-delay: 60ms"
			>
				Ship interfaces that<br class="hidden sm:block" />
				already feel finished.
			</h1>

			<p
				class="rise mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
				style="--rise-delay: 130ms"
			>
				A Svelte 5 component library built on bits-ui primitives. Accessible by construction, themed
				by token, and copied straight into your project so nothing is out of reach.
			</p>

			<div
				class="rise mt-9 flex flex-wrap items-center justify-center gap-3"
				style="--rise-delay: 200ms"
			>
				<Button size="lg" href="/docs">
					Get started
					<ArrowRight />
				</Button>
				<Button
					size="lg"
					variant="outline"
					href="https://github.com/paperui/paperui"
					target="_blank"
					rel="noreferrer"
				>
					<Github />
					GitHub
				</Button>
			</div>

			<div class="rise" style="--rise-delay: 270ms">
				<button
					type="button"
					onclick={copyCommand}
					class="mx-auto mt-8 flex max-w-full items-center gap-3 rounded-lg border border-border/60 bg-muted/40 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					<span class="select-none text-primary">$</span>
					<span class="truncate">{command}</span>
					{#if copied}
						<Check class="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
					{:else}
						<span class="shrink-0 text-[10px] uppercase tracking-widest opacity-60">copy</span>
					{/if}
				</button>
			</div>
		</section>

		<section class="mx-auto max-w-6xl px-6 pb-24">
			<div use:reveal>
				<AppShowcase />
			</div>
			<p class="mt-4 text-center text-xs text-muted-foreground" use:reveal={{ delay: 120 }}>
				Everything above is live, and every part of it is in the library.
			</p>
		</section>

		<section class="border-t border-border/60 bg-muted/20">
			<div class="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
				{#each features as feature, index (feature.title)}
					{@const Icon = feature.icon}
					<div use:reveal={{ delay: index * 90 }}>
						<div
							class="mb-4 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary"
						>
							<Icon class="size-4.5" />
						</div>
						<h2 class="text-sm font-semibold">{feature.title}</h2>
						<p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
					</div>
				{/each}
			</div>
		</section>

		<footer class="border-t border-border/60">
			<div
				class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row"
			>
				<p>Open source, MIT licensed.</p>
				<div class="flex items-center gap-5">
					<a href="/docs" class="hover:text-foreground">Documentation</a>
					<a href="/docs/theming" class="hover:text-foreground">Theming</a>
					<a
						href="https://github.com/paperui/paperui"
						target="_blank"
						rel="noreferrer"
						class="hover:text-foreground">GitHub</a
					>
				</div>
			</div>
		</footer>
	</main>

	<Toaster />
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		.rise {
			animation: rise 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
			animation-delay: var(--rise-delay, 0ms);
		}

		:global(.landing .reveal) {
			opacity: 0;
			transform: translateY(16px);
			transition:
				opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
				transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
		}

		:global(.landing .reveal-in) {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
