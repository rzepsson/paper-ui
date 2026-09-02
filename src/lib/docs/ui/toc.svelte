<script lang="ts">
	import { cn } from "$lib/utils";
	import type { TocItem } from "../types";

	let { items }: { items: TocItem[] } = $props();

	let active = $state("");

	$effect(() => {
		const ids = items.map((item) => item.id);
		if (ids.length === 0) return;

		active = ids[0];

		const elements = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				if (visible.length > 0) active = visible[0].target.id;
			},
			{ rootMargin: "-80px 0px -65% 0px", threshold: [0, 0.25, 1] }
		);

		for (const element of elements) observer.observe(element);
		return () => observer.disconnect();
	});
</script>

{#if items.length > 0}
	<p class="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
		On this page
	</p>
	<nav class="border-l border-border/70" aria-label="On this page">
		{#each items as item (item.id)}
			<a
				href={`#${item.id}`}
				aria-current={active === item.id ? "location" : undefined}
				class={cn(
					"-ml-px block border-l py-1.5 pl-4 text-sm transition-colors",
					item.depth === 2 && "pl-7",
					active === item.id
						? "border-primary font-medium text-foreground"
						: "border-transparent text-muted-foreground hover:text-foreground"
				)}
			>
				{item.label}
			</a>
		{/each}
	</nav>
{/if}
