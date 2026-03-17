<script lang="ts">
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
    import { cn, focusRingClass } from "$lib/utils";

    let { 
        class: className = "", 
        children, 
        ref = $bindable(null), 
        ...restProps 
    }: DropdownMenuPrimitive.TriggerProps = $props();
</script>

<DropdownMenuPrimitive.Trigger 
    bind:ref 
    class={cn(
        "inline-flex size-9 items-center justify-center rounded-lg border border-input bg-card font-sans text-sm font-medium text-card-foreground shadow-sm",
        "transition-all duration-200",
        "hover:bg-accent hover:text-accent-foreground",
        focusRingClass,
        "disabled:pointer-events-none disabled:opacity-50",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</DropdownMenuPrimitive.Trigger>