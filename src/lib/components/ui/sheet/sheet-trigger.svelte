<script lang="ts">
    import { Dialog as SheetPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "",
        ref = $bindable(null), 
        children, 
        child,
        ...restProps 
    }: SheetPrimitive.TriggerProps = $props();
</script>

<SheetPrimitive.Trigger 
    bind:ref 
    class={cn("outline-none select-none", className)}
    {child} 
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</SheetPrimitive.Trigger>