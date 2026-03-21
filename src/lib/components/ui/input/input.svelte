<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    import { cn, focusRingClass } from "$lib/utils";

    let {
        class: className = "",
        value = $bindable(),
        ref = $bindable(null),
        variant = "default",
        ...restProps
    }: HTMLInputAttributes & { 
        ref?: HTMLInputElement | null;
        variant?: "default" | "basic";
    } = $props();

    const variantClasses = {
        default: "hover:border-primary/80",
        basic: "hover:border-foreground/80"
    };
</script>

<input
    bind:this={ref}
    bind:value
    class={cn(
        "peer flex h-9 w-full rounded-md border-2 border-input bg-background px-3 py-1 text-sm shadow-sm transition-all duration-200",
        variantClasses[variant],
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground",
        focusRingClass,
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input",
        className
    )}
    {...restProps}
/>