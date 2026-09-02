<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs";
	import CodeBlock from "./code-block.svelte";
	import PreviewFrame from "./preview-frame.svelte";
	import DemoBoundary from "./demo-boundary.svelte";
	import RichText from "./rich-text.svelte";
	import { getExampleComponent, getExampleSource } from "../source";
	import type { ExampleDef } from "../types";

	let {
		slug,
		example,
		align = "center"
	}: { slug: string; example: ExampleDef; align?: "center" | "start" } = $props();

	const Demo = $derived(getExampleComponent(slug, example.id));
	const source = $derived(getExampleSource(slug, example.id));
	const headingId = $derived(`${example.id}`);
</script>

<section id={headingId} class="scroll-mt-24 space-y-4">
	<div class="space-y-1.5">
		<h3 class="text-base font-semibold tracking-tight">
			<a href={`#${headingId}`} class="group inline-flex items-center gap-2 hover:text-primary">
				{example.title}
				<span
					aria-hidden="true"
					class="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">#</span
				>
			</a>
		</h3>
		{#if example.description}
			<p class="text-sm leading-relaxed text-muted-foreground">
				<RichText value={example.description} />
			</p>
		{/if}
	</div>

	<Tabs.Root value="preview">
		<Tabs.List>
			<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
			<Tabs.Trigger value="code">Code</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="preview">
			<PreviewFrame {align}>
				{#if Demo}
					<DemoBoundary>
						<Demo />
					</DemoBoundary>
				{:else}
					<p class="text-sm text-muted-foreground">This example is missing its source file.</p>
				{/if}
			</PreviewFrame>
		</Tabs.Content>

		<Tabs.Content value="code">
			<CodeBlock code={source} lang="svelte" maxHeight="32rem" />
		</Tabs.Content>
	</Tabs.Root>
</section>
