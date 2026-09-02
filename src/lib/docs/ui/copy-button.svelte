<script lang="ts">
	import { Check, Copy } from "lucide-svelte";
	import { cn } from "$lib/utils";
	import * as Tooltip from "$lib/components/ui/tooltip";

	let {
		value,
		label = "Copy code",
		class: className = ""
	}: { value: string | (() => string); label?: string; class?: string } = $props();

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	async function copy() {
		const text = typeof value === "function" ? value() : value;
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			return;
		}
		copied = true;
		clearTimeout(timer);
		timer = setTimeout(() => (copied = false), 2000);
	}

	$effect(() => () => clearTimeout(timer));
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<button
				{...props}
				type="button"
				onclick={copy}
				aria-label={copied ? "Copied" : label}
				class={cn(
					"inline-flex size-7 items-center justify-center rounded-md border border-border/60 bg-background/80 text-muted-foreground backdrop-blur",
					"transition-colors hover:bg-accent hover:text-accent-foreground",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					className
				)}
			>
				{#if copied}
					<Check class="size-3.5 text-emerald-600 dark:text-emerald-400" />
				{:else}
					<Copy class="size-3.5" />
				{/if}
			</button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content>{copied ? "Copied" : label}</Tooltip.Content>
</Tooltip.Root>
