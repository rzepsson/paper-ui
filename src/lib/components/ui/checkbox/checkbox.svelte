<script lang="ts">
	import { Checkbox as CheckboxPrimitive, Label, useId, type WithoutChildrenOrChild } from "bits-ui";
	import { Check, Minus } from "lucide-svelte";
	import { cn } from "$lib/utils";

	let {
		id = useId(),
		class: className = "",
		checked = $bindable(false),
		indeterminate = $bindable(false),
		variant = "primary",
		ref = $bindable(null),
		children,
		...restProps
	}: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
		variant?: "default" | "primary";
		children?: import("svelte").Snippet;
	} = $props();

	const variantClasses = {
		primary: "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary text-primary-foreground",
		default: "data-[state=checked]:bg-foreground data-[state=checked]:border-foreground data-[state=indeterminate]:bg-foreground data-[state=indeterminate]:border-foreground text-background"
	};
</script>

<div class="flex items-center gap-3">
	<CheckboxPrimitive.Root
		{id}
		bind:checked
		bind:indeterminate
		bind:ref
		class={cn(
			"group relative flex size-4.5 shrink-0 items-center justify-center rounded-[3px] border border-muted-foreground/50 outline-none transition-all duration-75",
			"active:scale-[0.92] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
			variantClasses[variant],
			"disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...restProps}
	>
		{#snippet children({ checked, indeterminate })}
			<Check class="size-3.5 opacity-0 transition-opacity group-data-[state=checked]:opacity-100" strokeWidth={3} />
			<Minus class="absolute size-3.5 opacity-0 transition-opacity group-data-[state=indeterminate]:opacity-100" strokeWidth={3} />
		{/snippet}
	</CheckboxPrimitive.Root>

	{#if children}
		<Label.Root for={id} class="select-none font-sans text-sm font-medium leading-none">
			{@render children()}
		</Label.Root>
	{/if}
</div>