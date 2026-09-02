<script lang="ts">
	import { cn } from "$lib/utils";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { highlight, type CodeLang } from "./highlighter";
	import CopyButton from "./copy-button.svelte";

	let {
		code,
		lang = "svelte",
		class: className = "",
		maxHeight = "",
		copyable = true
	}: {
		code: string;
		lang?: CodeLang;
		class?: string;
		maxHeight?: string;
		copyable?: boolean;
	} = $props();

	let html = $state("");

	$effect(() => {
		const source = code;
		let cancelled = false;
		highlight(source, lang).then((result) => {
			if (!cancelled) html = result;
		});
		return () => {
			cancelled = true;
		};
	});
</script>

<div class={cn("group relative", className)}>
	{#if copyable}
		<div
			class="absolute right-2 top-2 z-10 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100"
		>
			<CopyButton value={code} />
		</div>
	{/if}

	<ScrollArea
		orientation="both"
		class="code-surface rounded-lg border border-border/60 bg-muted/40 text-[13px] leading-relaxed"
		style={maxHeight ? `max-height: ${maxHeight}` : undefined}
	>
		{#if html}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- shiki output, generated from trusted source files -->
			{@html html}
		{:else}
			<pre class="p-4 font-mono"><code>{code}</code></pre>
		{/if}
	</ScrollArea>
</div>

<style>
	:global(.code-surface pre) {
		margin: 0;
		padding: 1rem;
		background: transparent !important;
		font-family: var(--font-mono);
		tab-size: 2;
		width: max-content;
		min-width: 100%;
	}

	:global(.code-surface code) {
		font-family: inherit;
	}
</style>
