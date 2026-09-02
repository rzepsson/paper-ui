<script lang="ts">
	import { resetMode, setMode, userPrefersMode } from "mode-watcher";
	import { Check, Monitor, Moon, Palette, RotateCcw, Sun } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Popover from "$lib/components/ui/popover";
	import { cn } from "$lib/utils";
	import { DEFAULT_RADIUS, PRESETS, RADII, theme } from "$lib/docs/theme.svelte";

	const modes = [
		{ id: "light", label: "Light", icon: Sun },
		{ id: "dark", label: "Dark", icon: Moon },
		{ id: "system", label: "System", icon: Monitor }
	] as const;

	let open = $state(false);
</script>

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="ghost" size="icon" aria-label="Customise the theme">
				<Palette />
			</Button>
		{/snippet}
	</Popover.Trigger>

	<Popover.Content align="end" class="w-72 p-5">
		<div class="flex items-center justify-between">
			<h2 class="text-sm font-semibold">Theme</h2>
			{#if !theme.isDefault}
				<Button
					variant="ghost"
					size="sm"
					class="h-7 px-2 text-xs text-muted-foreground"
					onclick={() => theme.reset()}
				>
					<RotateCcw />
					Reset
				</Button>
			{/if}
		</div>

		<div class="mt-5 space-y-2">
			<p class="text-xs font-medium text-muted-foreground">Mode</p>
			<div class="grid grid-cols-3 gap-1.5 rounded-lg bg-muted/60 p-1">
				{#each modes as item (item.id)}
					{@const Icon = item.icon}
					<button
						type="button"
						onclick={() => (item.id === "system" ? resetMode() : setMode(item.id))}
						aria-pressed={userPrefersMode.current === item.id}
						class={cn(
							"flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition-colors",
							"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							userPrefersMode.current === item.id
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground"
						)}
					>
						<Icon class="size-3.5" />
						{item.label}
					</button>
				{/each}
			</div>
		</div>

		<div class="mt-5 space-y-2">
			<p class="text-xs font-medium text-muted-foreground">Accent</p>
			<div class="grid grid-cols-7 gap-1.5">
				{#each PRESETS as preset (preset.id)}
					<button
						type="button"
						onclick={() => theme.setPreset(preset.id)}
						title={preset.name}
						aria-label={preset.name}
						aria-pressed={theme.preset === preset.id}
						class={cn(
							"flex aspect-square items-center justify-center rounded-md border transition-all",
							"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-popover",
							theme.preset === preset.id
								? "border-foreground/30 scale-105"
								: "border-transparent hover:scale-105"
						)}
						style={`background-color: ${preset.primary}`}
					>
						{#if theme.preset === preset.id}
							<Check class="size-3.5" style={`color: ${preset.primaryForeground}`} />
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div class="mt-5 space-y-2">
			<div class="flex items-baseline justify-between">
				<p class="text-xs font-medium text-muted-foreground">Radius</p>
				<p class="text-[10px] text-muted-foreground">XL recommended</p>
			</div>
			<div class="grid grid-cols-5 gap-1.5">
				{#each RADII as item (item.id)}
					<button
						type="button"
						onclick={() => theme.setRadius(item.id)}
						aria-pressed={theme.radius === item.id}
						title={item.id === DEFAULT_RADIUS ? `${item.label} (recommended)` : item.label}
						class={cn(
							"relative rounded-md border py-1.5 font-mono text-[11px] transition-colors",
							"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							theme.radius === item.id
								? "border-primary bg-primary/10 font-medium text-foreground"
								: "border-border/60 text-muted-foreground hover:border-foreground/25 hover:text-foreground"
						)}
					>
						{item.label}
						{#if item.id === DEFAULT_RADIUS}
							<span
								aria-hidden="true"
								class="absolute -top-1 right-0.5 size-1.5 rounded-full bg-primary"
							></span>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<p class="mt-5 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground">
			These only change custom properties on the root element. The
			<a href="/docs/theming" class="text-foreground underline underline-offset-2">Theming</a> page shows
			the same values in CSS.
		</p>
	</Popover.Content>
</Popover.Root>
