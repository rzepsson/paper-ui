<script lang="ts">
	import CodeBlock from "$lib/docs/ui/code-block.svelte";
	import TocRail from "$lib/docs/ui/toc-rail.svelte";
	import type { TocItem } from "$lib/docs/types";

	const toc: TocItem[] = [
		{ id: "how-it-works", label: "How it works" },
		{ id: "colour-tokens", label: "Colour tokens" },
		{ id: "radius", label: "Radius" },
		{ id: "typography", label: "Typography" },
		{ id: "recolouring", label: "Recolouring" }
	];

	const tokens = [
		{ name: "background / foreground", use: "The page itself, and body text on it." },
		{ name: "card / card-foreground", use: "A raised surface: panels, table frames, popovers." },
		{ name: "popover / popover-foreground", use: "Floating surfaces: menus, select lists, popovers." },
		{ name: "primary / primary-foreground", use: "The filled action colour and what sits on it." },
		{ name: "secondary / secondary-foreground", use: "The quieter filled button." },
		{ name: "muted / muted-foreground", use: "Recessed fills and the text that goes dim." },
		{ name: "accent / accent-foreground", use: "Hover and highlight surfaces. Deliberately neutral, not blue." },
		{ name: "destructive / destructive-foreground", use: "Anything irreversible." },
		{ name: "border", use: "Every rule and outline." },
		{ name: "input", use: "The border of a field at rest." },
		{ name: "ring", use: "The focus ring." }
	];

	const radiusScale = [
		{ name: "xs", size: "4px", used: "Checkboxes and the smallest controls." },
		{ name: "sm", size: "6px", used: "Small chips and inline markers." },
		{ name: "md", size: "8px", used: "Menu items, list rows, tooltips, skeletons." },
		{ name: "lg", size: "12px", used: "Fields: inputs and select triggers." },
		{ name: "xl", size: "16px", used: "Cards, tables, popovers, menus, command." },
		{ name: "2xl", size: "20px", used: "Dialogs and alert dialogs." }
	];

	const swatches = [
		["bg-background", "background"],
		["bg-card", "card"],
		["bg-muted", "muted"],
		["bg-accent", "accent"],
		["bg-secondary", "secondary"],
		["bg-primary", "primary"],
		["bg-destructive", "destructive"]
	];

	const themeBlock = `@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  /* ...one line per token... */

  --radius-xs: calc(var(--radius) * 0.25);
  --radius-sm: calc(var(--radius) * 0.375);
  --radius-md: calc(var(--radius) * 0.5);
  --radius-lg: calc(var(--radius) * 0.75);
  --radius-xl: var(--radius);
  --radius-2xl: calc(var(--radius) * 1.25);
}`;

	const darkBlock = `.dark {
  --background: oklch(0.2046 0 0);
  --foreground: oklch(0.9219 0 0);
  --card: oklch(0.2686 0 0);
  --muted: oklch(0.2393 0 0);
  --accent: oklch(0.321 0 0);
  --border: oklch(0.3715 0 0);
  /* the same names, different numbers */
}`;

	const recolour = `:root {
  /* One line changes every filled button, focus ring and
     selected state in the library. */
  --primary: oklch(0.62 0.19 25);
  --ring: oklch(0.62 0.19 25);
}`;

	const radius = `:root {
  --radius: 1rem;
}`;
</script>

<svelte:head>
	<title>Theming — paperui</title>
	<meta name="description" content="How paperui's design tokens are structured and how to change them." />
</svelte:head>

<div class="mx-auto flex w-full max-w-6xl gap-8">
	<article class="min-w-0 flex-1 py-10 pb-24 xl:max-w-3xl">
		<p class="text-sm font-medium text-primary">Getting started</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Theming</h1>
		<p class="mt-4 text-lg leading-relaxed text-muted-foreground">
			No component names a colour. They name a role, and the theme decides what colour that role is
			in the current mode.
		</p>

		<div class="mt-8 rounded-lg border border-border/60 bg-muted/30 p-5">
			<p class="text-sm leading-relaxed text-muted-foreground">
				The palette button in the header opens a panel where you can try the accent presets and the
				radius scale on this site. It writes the same custom properties described below onto the root
				element, so whatever you pick there is what you would paste into your own CSS.
			</p>
		</div>

		<section id="how-it-works" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">How it works</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Tokens are declared as OKLCH custom properties on
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">:root</code>, redeclared under
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.dark</code>, and handed to
				Tailwind once through
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@theme inline</code>. That last
				step is what turns
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--color-primary</code> into the
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">bg-primary</code> utility.
			</p>
			<CodeBlock code={themeBlock} lang="css" />
			<p class="text-sm leading-relaxed text-muted-foreground">
				Because the dark theme only redefines the values, no component carries a
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">dark:</code> variant for
				colour. There is one exception in the library — the soft badge tints, which need a different
				text lightness in each mode.
			</p>
			<CodeBlock code={darkBlock} lang="css" />
		</section>

		<section id="colour-tokens" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Colour tokens</h2>

			<div class="flex flex-wrap gap-3">
				{#each swatches as [cls, name] (name)}
					<div class="flex flex-col items-center gap-1.5">
						<div class={`size-14 rounded-lg border border-border/60 ${cls}`}></div>
						<span class="font-mono text-[10px] text-muted-foreground">{name}</span>
					</div>
				{/each}
			</div>

			<div class="overflow-hidden rounded-lg border border-border/60 bg-card">
				<table class="w-full border-collapse text-left text-sm">
					<thead
						class="border-b border-border/60 bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground"
					>
						<tr>
							<th scope="col" class="px-5 py-3 font-medium">Token</th>
							<th scope="col" class="px-5 py-3 font-medium">What it is for</th>
						</tr>
					</thead>
					<tbody>
						{#each tokens as token (token.name)}
							<tr class="border-b border-border/40 last:border-0">
								<td class="whitespace-nowrap px-5 py-3 align-top font-mono text-xs text-primary">
									{token.name}
								</td>
								<td class="px-5 py-3 align-top text-xs leading-relaxed text-muted-foreground">
									{token.use}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<section id="radius" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Radius</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				One number generates the whole scale, and every step is a fraction of it rather than a fixed
				offset. That matters at the ends: an offset scale goes negative at
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">0</code> and leaves small
				controls disproportionately round at large values, while fractions keep the hierarchy intact
				and collapse cleanly to square.
			</p>
			<CodeBlock code={radius} lang="css" />

			<div class="overflow-hidden rounded-lg border border-border/60 bg-card">
				<table class="w-full border-collapse text-left text-sm">
					<thead
						class="border-b border-border/60 bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground"
					>
						<tr>
							<th scope="col" class="px-5 py-3 font-medium">Step</th>
							<th scope="col" class="px-5 py-3 font-medium">At 1rem</th>
							<th scope="col" class="px-5 py-3 font-medium">Used by</th>
						</tr>
					</thead>
					<tbody>
						{#each radiusScale as step (step.name)}
							<tr class="border-b border-border/40 last:border-0">
								<td class="whitespace-nowrap px-5 py-3 align-top font-mono text-xs text-primary">
									{step.name}
								</td>
								<td class="whitespace-nowrap px-5 py-3 align-top font-mono text-xs text-muted-foreground">
									{step.size}
								</td>
								<td class="px-5 py-3 align-top text-xs leading-relaxed text-muted-foreground">
									{step.used}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<p class="text-sm leading-relaxed text-muted-foreground">
				<span class="font-medium text-foreground">1rem is the default and what the components are
				drawn for.</span> Smaller values work and stay consistent, but the surfaces were balanced against
				the full scale. Buttons and badges are the exception at any setting: they are fully rounded, so
				their shape never shifts between sizes.
			</p>
		</section>

		<section id="typography" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Typography</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Three families are declared: <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs"
					>--font-sans</code
				>
				(Inter) for the interface,
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--font-mono</code>
				(JetBrains Mono) for code and values, and
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--font-serif</code> for long-form
				copy. Components set
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">font-sans</code> explicitly so they
				keep the interface face even inside a serif article.
			</p>
			<div class="space-y-3 rounded-lg border border-border/60 bg-card p-5">
				<p class="font-sans text-base">Inter — the interface face.</p>
				<p class="font-serif text-base">Source Serif 4 — for prose.</p>
				<p class="font-mono text-sm">JetBrains Mono — for code.</p>
			</div>
		</section>

		<section id="recolouring" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Recolouring</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Because nothing hardcodes a colour, rebranding is a handful of lines. Change
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--primary</code> and every filled
				button, active tab underline, selected row and focus ring follows.
			</p>
			<CodeBlock code={recolour} lang="css" />
			<p class="text-sm leading-relaxed text-muted-foreground">
				Keep <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--accent</code> neutral. It
				is the hover and highlight surface, and a saturated accent floods every menu row and ghost
				button with colour.
			</p>
		</section>
	</article>

	<TocRail items={toc} />
</div>
