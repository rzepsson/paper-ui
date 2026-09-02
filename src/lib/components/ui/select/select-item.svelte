<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import { Check } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        value,
        label,
        type = "default",
        variant = "default",
        ref = $bindable(null),
        children: childrenProp,
        ...restProps
    }: SelectPrimitive.ItemProps & { 
        type?: "default" | "checkbox",
        variant?: "default" | "basic" 
    } = $props();

    const checkboxVariants = {
        default: "group-data-selected:border-primary group-data-selected:bg-primary text-primary-foreground group-data-highlighted:border-foreground/30",
        basic: "group-data-selected:border-foreground group-data-selected:bg-foreground text-background group-data-highlighted:border-foreground/30"
    };

    const checkVariants = {
        default: "text-primary",
        basic: "text-foreground"
    };
</script>

<SelectPrimitive.Item
    bind:ref
    {value}
    {label}
    class={cn(
        "group relative flex cursor-default select-none items-center rounded-md px-2.5 py-1.5 font-sans text-sm font-medium outline-none",
        "transition-all duration-200 active:scale-[0.98]",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:outline data-highlighted:outline-primary data-highlighted:-outline-offset-2",
        "data-disabled:pointer-events-none data-disabled:opacity-45",
        type === "checkbox" ? "gap-3" : "",
        className
    )}
    {...restProps}
>
    {#snippet children({ selected, highlighted })}
        
        {#if type === "checkbox"}
            <span
                aria-hidden="true"
                class={cn(
                    "checkbox-transitions relative flex size-[18px] shrink-0 items-center justify-center rounded-xs border-2 border-input bg-background outline-none",
                    checkboxVariants[variant]
                )}
            >
                <Check class="size-3.5 opacity-0 transition-opacity duration-50 group-data-selected:opacity-100" strokeWidth={3} />
            </span>
        {:else}
            <span class="absolute left-2.5 flex size-4 items-center justify-center">
                <Check 
                    class={cn(
                        "size-4 opacity-0 transition-opacity group-data-selected:opacity-100",
                        checkVariants[variant]
                    )} 
                    strokeWidth={3} 
                />
            </span>
        {/if}

        <span class={cn(
            "truncate text-foreground/90 group-data-highlighted:text-foreground",
            type === "default" ? "pl-6" : ""
        )}>
            {@render childrenProp?.({ selected, highlighted })}
            {#if !childrenProp}
                {label}
            {/if}
        </span>

    {/snippet}
</SelectPrimitive.Item>

<style>
    :global(.checkbox-transitions) {
        transition-property: border-color, background-color, transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms, 70ms, 70ms; 
    }
</style>