<script lang="ts">
	import CodeBlock from "$lib/docs/ui/code-block.svelte";
	import TocRail from "$lib/docs/ui/toc-rail.svelte";
	import type { TocItem } from "$lib/docs/types";

	const toc: TocItem[] = [
		{ id: "requirements", label: "Requirements" },
		{ id: "create-a-project", label: "Create a project" },
		{ id: "add-the-base", label: "Add the base" },
		{ id: "add-components", label: "Add components" },
		{ id: "dark-mode", label: "Dark mode" },
		{ id: "manual-setup", label: "Manual setup" }
	];

	const createProject = `npx sv create my-app
cd my-app
npx sv add tailwindcss`;

	const init = `npx shadcn-svelte@latest add https://paper-ui.com/r/init.json`;

	const add = `# one component
npx shadcn-svelte@latest add https://paper-ui.com/r/button.json

# several at once
npx shadcn-svelte@latest add \\
  https://paper-ui.com/r/dialog.json \\
  https://paper-ui.com/r/dropdown-menu.json`;

	const usage = `<script lang="ts">
  import { Button } from "$lib/components/ui/button";
<\/script>

<Button>Click me</Button>`;

	const darkMode = `<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
<\/script>

<ModeWatcher />
{@render children()}`;

	const manualDeps = `npm install bits-ui clsx tailwind-merge lucide-svelte mode-watcher`;

	const manualUtils = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}`;

	const manualTokens = `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.3211 0 0);
  --primary: oklch(0.6231 0.188 259.8145);
  --primary-foreground: oklch(1 0 0);
  --muted: oklch(0.9846 0.0017 247.8389);
  --muted-foreground: oklch(0.551 0.0234 264.3637);
  --accent: oklch(0.954 0.0035 264.5419);
  --border: oklch(0.9276 0.0058 264.5313);
  --ring: oklch(0.6231 0.188 259.8145);
  --radius: 1rem;
  /* ...the rest is in the file linked above */
}`;
</script>

<svelte:head>
	<title>Installation — paperui</title>
	<meta name="description" content="Add paperui to a SvelteKit project." />
</svelte:head>

<div class="mx-auto flex w-full max-w-6xl gap-8">
	<article class="min-w-0 flex-1 py-10 pb-24 xl:max-w-3xl">
		<p class="text-sm font-medium text-primary">Getting started</p>
		<h1 class="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Installation</h1>
		<p class="mt-4 text-lg leading-relaxed text-muted-foreground">
			Two commands from an empty SvelteKit app to a working button.
		</p>

		<section id="requirements" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Requirements</h2>
			<ul class="space-y-2 text-sm text-muted-foreground">
				<li>· Svelte 5 — the components are written in runes and will not compile on Svelte 4.</li>
				<li>
					· Tailwind CSS v4 — the theme is declared with <code
						class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@theme inline</code
					>, which v3 does not understand.
				</li>
				<li>· TypeScript is assumed, though nothing stops you stripping the annotations.</li>
			</ul>
		</section>

		<section id="create-a-project" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Create a project</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Skip this if you already have a SvelteKit app with Tailwind v4.
			</p>
			<CodeBlock code={createProject} lang="bash" />
		</section>

		<section id="add-the-base" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Add the base</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Run this once. It installs the runtime packages, writes
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/lib/utils.ts</code>
				with the
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">cn()</code> helper, and merges the
				full token set — light, dark, the radius scale and the base layer — into your Tailwind stylesheet.
			</p>
			<CodeBlock code={init} lang="bash" />
			<div class="rounded-lg border border-border/60 bg-muted/30 p-4">
				<p class="text-sm leading-relaxed text-muted-foreground">
					Components only depend on
					<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">utils</code>, never on the
					token set. Adding a component months later will not overwrite colours you have since
					changed.
				</p>
			</div>
		</section>

		<section id="add-components" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Add components</h2>
			<CodeBlock code={add} lang="bash" />
			<p class="text-sm leading-relaxed text-muted-foreground">
				Anything a component imports comes with it — adding
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">table</code> also pulls in
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">checkbox</code>,
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">skeleton</code> and
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">scroll-area</code>. Then import
				and use it:
			</p>
			<CodeBlock code={usage} lang="svelte" />
		</section>

		<section id="dark-mode" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Dark mode</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				Dark mode is the <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.dark</code>
				class on the html element.
				<code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">mode-watcher</code> puts it there,
				remembers the choice and blocks the flash on first paint. Mount it once in your root layout.
			</p>
			<CodeBlock code={darkMode} lang="svelte" />
		</section>

		<section id="manual-setup" class="mt-12 scroll-mt-24 space-y-4">
			<h2 class="text-xl font-semibold tracking-tight">Manual setup</h2>
			<p class="text-sm leading-relaxed text-muted-foreground">
				If you would rather not run the CLI, the same three pieces by hand. Every registry item is
				plain JSON, so
				<a
					href="/r/init.json"
					target="_blank"
					rel="noreferrer"
					class="text-foreground underline underline-offset-2">/r/init.json</a
				>
				holds the complete token set and
				<a
					href="/r/button.json"
					target="_blank"
					rel="noreferrer"
					class="text-foreground underline underline-offset-2">/r/button.json</a
				> holds a component's files.
			</p>

			<div class="space-y-3">
				<p class="text-sm font-medium">1. Packages</p>
				<CodeBlock code={manualDeps} lang="bash" />
			</div>

			<div class="space-y-3">
				<p class="text-sm font-medium">
					2. <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/lib/utils.ts</code>
				</p>
				<CodeBlock code={manualUtils} lang="typescript" />
			</div>

			<div class="space-y-3">
				<p class="text-sm font-medium">3. Tokens, in the CSS your root layout imports</p>
				<CodeBlock code={manualTokens} lang="css" maxHeight="24rem" />
			</div>
		</section>
	</article>

	<TocRail items={toc} />
</div>
