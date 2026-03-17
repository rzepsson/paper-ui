<script lang="ts" module>
	export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
	export type ButtonSize = "default" | "sm" | "lg" | "icon";
</script>

<script lang="ts">
	import { Button as ButtonPrimitive } from "bits-ui";
	import { cn, focusRingClass } from "$lib/utils";

	let {
		class: className = "",
		variant = "default",
		size = "default",
		ref = $bindable(null),
		children,
		...restProps
	}: ButtonPrimitive.RootProps & {
		variant?: ButtonVariant;
		size?: ButtonSize;
	} = $props();

	const variantClasses: Record<ButtonVariant, string> = {
		default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
		destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
		outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
		secondary: "bg-secondary text-secondary-foreground border border-border/50 shadow-sm hover:bg-secondary/80",
		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-primary underline-offset-4 hover:underline",
	};

	const sizeClasses: Record<ButtonSize, string> = {
		default: "h-9 rounded-lg px-4 py-2",
		sm: "h-8 rounded-lg px-3 text-xs",
		lg: "h-10 rounded-md px-8",
		icon: "size-9 rounded-lg",
	};
</script>

<ButtonPrimitive.Root
	bind:ref
	class={cn(
		"inline-flex items-center justify-center whitespace-nowrap font-sans text-sm font-medium",
		"transition-all active:scale-[0.92] duration-200",
		"disabled:pointer-events-none disabled:opacity-50",
		focusRingClass,
		variantClasses[variant],
		sizeClasses[size],
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ButtonPrimitive.Root>