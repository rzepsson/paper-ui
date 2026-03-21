<script lang="ts">
    import { Dialog as SheetPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "", 
        ref = $bindable(null), 
        children,
        child,
        ...restProps 
    }: SheetPrimitive.CloseProps = $props();
</script>

<SheetPrimitive.Close
    bind:ref
    class={cn("outline-none", className)}
    {child}
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</SheetPrimitive.Close>