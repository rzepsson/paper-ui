<script lang="ts">
	import { page } from "$app/state";
	import { navGroups } from "../registry";
	import { cn } from "$lib/utils";

	let { onnavigate }: { onnavigate?: () => void } = $props();

	const startHere = [
		{ href: "/docs", label: "Introduction" },
		{ href: "/docs/installation", label: "Installation" },
		{ href: "/docs/theming", label: "Theming" }
	];

	const isCurrent = (href: string) => page.url.pathname === href;
</script>

<nav class="space-y-6 text-sm" aria-label="Documentation">
	<div class="space-y-1">
		<p class="px-2 pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
			Getting started
		</p>
		{#each startHere as item (item.href)}
			<a
				href={item.href}
				onclick={onnavigate}
				aria-current={isCurrent(item.href) ? "page" : undefined}
				class={cn(
					"block rounded-md px-2 py-1.5 transition-colors",
					isCurrent(item.href)
						? "bg-accent font-medium text-accent-foreground"
						: "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
				)}
			>
				{item.label}
			</a>
		{/each}
	</div>

	{#each navGroups as group (group.category)}
		<div class="space-y-1">
			<p class="px-2 pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
				{group.category}
			</p>
			{#each group.items as item (item.slug)}
				{@const href = `/docs/components/${item.slug}`}
				<a
					{href}
					onclick={onnavigate}
					aria-current={isCurrent(href) ? "page" : undefined}
					class={cn(
						"block rounded-md px-2 py-1.5 transition-colors",
						isCurrent(href)
							? "bg-accent font-medium text-accent-foreground"
							: "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
					)}
				>
					{item.title}
				</a>
			{/each}
		</div>
	{/each}
</nav>
