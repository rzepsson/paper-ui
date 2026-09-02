<script lang="ts">
	import { untrack } from "svelte";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { cn } from "$lib/utils";
	import CodeBlock from "./code-block.svelte";
	import PreviewFrame from "./preview-frame.svelte";
	import DemoBoundary from "./demo-boundary.svelte";
	import type { PlaygroundDef } from "../types";

	let { playground }: { playground: PlaygroundDef } = $props();

	const Demo = $derived(playground.component);

	let values = $state<Record<string, any>>(
		untrack(() =>
			Object.fromEntries(playground.controls.map((control) => [control.prop, control.default]))
		)
	);

	const code = $derived(playground.code(values));
</script>

<div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
	<div class="min-w-0 space-y-4">
		<PreviewFrame class="min-h-64">
			<DemoBoundary>
				<Demo {...values} />
			</DemoBoundary>
		</PreviewFrame>
		<CodeBlock {code} lang="svelte" />
	</div>

	<div class="rounded-lg border border-border/60 bg-card p-5 shadow-sm lg:sticky lg:top-24">
		<h3 class="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Props</h3>

		<div class="mt-4 space-y-5">
			{#each playground.controls as control (control.prop)}
				<div class="space-y-2">
					{#if control.kind === "select"}
						<Label class="text-xs text-muted-foreground">{control.label}</Label>
						<div class="flex flex-wrap gap-1.5">
							{#each control.options as option (option)}
								<button
									type="button"
									onclick={() => (values[control.prop] = option)}
									aria-pressed={values[control.prop] === option}
									class={cn(
										"rounded-full px-2.5 py-1 font-mono text-[11px] transition-colors",
										"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
										values[control.prop] === option
											? "bg-primary text-primary-foreground"
											: "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
									)}
								>
									{option}
								</button>
							{/each}
						</div>
					{:else if control.kind === "boolean"}
						<Checkbox bind:checked={values[control.prop]}>
							<span class="text-xs text-muted-foreground">{control.label}</span>
						</Checkbox>
					{:else}
						<Label for={`pg-${control.prop}`} class="text-xs text-muted-foreground">
							{control.label}
						</Label>
						<Input
							id={`pg-${control.prop}`}
							bind:value={values[control.prop]}
							placeholder={control.placeholder}
						/>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
