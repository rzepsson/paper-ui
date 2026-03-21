<script lang="ts" module>
	export type BadgeVariant = 
		| "default" 
		| "secondary" 
		| "destructive" 
		| "outline"
		| "success"
		| "warning"
		| "info";
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		class: className = "",
		variant = "default",
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		variant?: BadgeVariant;
	} = $props();

	const badgeVariants: Record<BadgeVariant, string> = {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground border-border/60",
		
		success: "border-transparent bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25",
		warning: "border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400 hover:bg-amber-500/25",
		info: "border-transparent bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25",
	};
</script>

<div
	class={cn(
		"inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 font-sans text-xs font-medium transition-colors select-none",
		"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", 
		badgeVariants[variant],
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>