<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";
	import { Label } from "$lib/components/ui/label";

	const rows = [
		{ id: "digest", title: "Weekly digest", hint: "A summary every Monday morning.", on: true },
		{ id: "mentions", title: "Mentions", hint: "Notify me when someone @-mentions me.", on: true },
		{ id: "marketing", title: "Product news", hint: "Occasional release notes.", on: false }
	];
</script>

<div class="w-full max-w-md divide-y divide-border/60 rounded-lg border border-border/60 bg-card">
	{#each rows as row (row.id)}
		<div class="flex items-center justify-between gap-6 px-4 py-3.5">
			<div class="min-w-0">
				<Label for={row.id} class="cursor-pointer">{row.title}</Label>
				<p class="mt-0.5 text-xs text-muted-foreground">{row.hint}</p>
			</div>
			<Switch id={row.id} checked={row.on} />
		</div>
	{/each}
</div>
