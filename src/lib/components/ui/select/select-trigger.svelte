<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import { ChevronDown } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        children,
        child,
        variant = "default",
        ref = $bindable(null),
        ...restProps
    }: SelectPrimitive.TriggerProps & { 
        variant?: "default" | "basic" 
    } = $props();

    const variantClasses = {
        default: "hover:border-foreground/30 focus-visible:border-primary data-[state=open]:border-primary",
        basic: "hover:border-foreground/30 focus-visible:border-foreground data-[state=open]:border-foreground"
    };
</script>

<SelectPrimitive.Trigger
    bind:ref
    class={cn(
        "flex h-9 w-full items-center justify-between rounded-lg border-2 border-input bg-background px-3 py-1 text-sm transition-all duration-200 outline-none select-none",
        variantClasses[variant],
        "data-placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input",
        className
    )}
    {child}
    {...restProps}
>
    {#if !child}
        <span class="truncate">
            {@render children?.()}
        </span>
        <ChevronDown class="size-4 opacity-50 shrink-0" />
    {/if}
</SelectPrimitive.Trigger>