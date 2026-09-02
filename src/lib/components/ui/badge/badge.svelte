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
	}: HTMLAttributes<HTMLSpanElement> & {
		variant?: BadgeVariant;
	} = $props();

	const badgeVariants: Record<BadgeVariant, string> = {
		default: "border-transparent bg-primary text-primary-foreground",
		secondary: "border-transparent bg-secondary text-secondary-foreground",
		destructive: "border-transparent bg-destructive text-destructive-foreground",
		outline: "text-foreground border-border/60",

		success: "border-transparent bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
		warning: "border-transparent bg-amber-500/15 text-amber-700 dark:text-amber-400",
		info: "border-transparent bg-blue-500/15 text-blue-700 dark:text-blue-400",
	};
</script>

<span
	class={cn(
		"inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 font-sans text-xs font-medium select-none",
		"[&_svg]:size-3 [&_svg]:shrink-0",
		badgeVariants[variant],
		className
	)}
	{...restProps}
>
	{@render children?.()}
</span>
