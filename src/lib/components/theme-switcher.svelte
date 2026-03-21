<script lang="ts">
	import { Switch } from "$lib/components/ui/switch";
	import { Moon, Sun } from "lucide-svelte";

	let isDark = $state(false);

	$effect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});
</script>

<div class="flex items-center justify-between rounded-xl border border-border bg-card p-4">
	<div class="flex items-center gap-3">
		<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/50 text-accent-foreground">
			{#if isDark}
				<Moon class="size-5" />
			{:else}
				<Sun class="size-5" />
			{/if}
		</div>
		<div class="flex flex-col">
			<span class="text-sm font-medium text-foreground">Theme Switcher</span>
			<span class="text-xs text-muted-foreground">Switch to {isDark ? 'light' : 'dark'} mode</span>
		</div>
	</div>
	
	<Switch bind:checked={isDark} />
</div>