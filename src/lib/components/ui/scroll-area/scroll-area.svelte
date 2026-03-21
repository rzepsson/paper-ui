<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive, type WithoutChild } from "bits-ui";
	import { cn } from "$lib/utils";

	type Props = WithoutChild<ScrollAreaPrimitive.RootProps> & {
		orientation?: "vertical" | "horizontal" | "both";
		viewportClass?: string;
	};

	let {
		class: className = "",
		viewportClass = "",
		orientation = "vertical",
		children,
		ref = $bindable(null),
		...restProps
	}: Props = $props();
</script>

{#snippet scrollbar(dir: "vertical" | "horizontal")}
	<ScrollAreaPrimitive.Scrollbar
		orientation={dir}
		class={cn(
			"flex touch-none select-none transition-all duration-200",
			dir === "vertical" && "h-full w-2 border-l border-l-transparent p-px hover:w-2.5",
			dir === "horizontal" && "h-2 flex-col border-t border-t-transparent p-px hover:h-2.5"
		)}
	>
		<ScrollAreaPrimitive.Thumb 
			class="relative flex-1 rounded-full bg-border/60 transition-colors hover:bg-border/80 dark:bg-muted-foreground/20 dark:hover:bg-muted-foreground/40" 
		/>
	</ScrollAreaPrimitive.Scrollbar>
{/snippet}

<ScrollAreaPrimitive.Root
	bind:ref
	class={cn("relative overflow-hidden", className)}
	{...restProps}
>
	<ScrollAreaPrimitive.Viewport class={cn("h-full w-full rounded-[inherit]", viewportClass)}>
		{@render children?.()}
	</ScrollAreaPrimitive.Viewport>

	{#if orientation === "vertical" || orientation === "both"}
		{@render scrollbar("vertical")}
	{/if}

	{#if orientation === "horizontal" || orientation === "both"}
		{@render scrollbar("horizontal")}
	{/if}

	<ScrollAreaPrimitive.Corner />
</ScrollAreaPrimitive.Root>