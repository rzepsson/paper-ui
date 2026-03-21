<script lang="ts">
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
    import { Check, Minus } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        children,
        child,
        checked = $bindable(false),
        indeterminate = $bindable(false),
        variant = "default",
        closeOnSelect = false,
        ref = $bindable(null),
        ...restProps
    }: DropdownMenuPrimitive.CheckboxItemProps & { variant?: "default" | "basic" } = $props();

    const controlVariants = {
        default: "group-data-[state=checked]:border-primary group-data-[state=checked]:bg-primary group-data-[state=indeterminate]:border-primary group-data-[state=indeterminate]:bg-primary text-primary-foreground group-data-highlighted:border-primary/80",
        basic: "group-data-[state=checked]:border-foreground group-data-[state=checked]:bg-foreground group-data-[state=indeterminate]:border-foreground group-data-[state=indeterminate]:bg-foreground text-background group-data-highlighted:border-foreground/80"
    };
</script>

<DropdownMenuPrimitive.CheckboxItem
    bind:checked
    bind:indeterminate
    bind:ref
    {closeOnSelect}
    {child}
    class={cn(
        "group relative flex cursor-default select-none items-center gap-3 rounded-md px-2.5 py-1.5 font-sans text-sm font-medium outline-none",
        "transition-all duration-75 active:scale-[0.98]",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:outline data-highlighted:outline-primary data-highlighted:-outline-offset-2",
        "data-disabled:pointer-events-none data-disabled:opacity-45",
        className
    )}
    {...restProps}
>
    {#if !child}
        <span
            aria-hidden="true"
            class={cn(
                "checkbox-transitions relative flex size-4.5 shrink-0 items-center justify-center rounded border-2 border-input bg-muted outline-none",
                controlVariants[variant]
            )}
        >
            <Check class="size-3.5 opacity-0 transition-opacity duration-50 group-data-[state=checked]:opacity-100" strokeWidth={3} />
            <Minus class="absolute size-3.5 opacity-0 transition-opacity duration-50 group-data-[state=indeterminate]:opacity-100" strokeWidth={3} />
        </span>
        {@render children?.({ checked, indeterminate })}
    {/if}
</DropdownMenuPrimitive.CheckboxItem>

<style>
    :global(.checkbox-transitions) {
        transition-property: border-color, background-color, transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms, 70ms, 70ms; 
    }
</style>