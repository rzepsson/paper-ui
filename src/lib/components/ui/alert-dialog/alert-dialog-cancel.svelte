<script lang="ts">
    import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "", 
        ref = $bindable(null), 
        children,
        child,
        ...restProps 
    }: AlertDialogPrimitive.CancelProps = $props();
</script>

<AlertDialogPrimitive.Cancel
    bind:ref
    class={cn("outline-none mt-2 sm:mt-0", className)}
    {child}
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</AlertDialogPrimitive.Cancel>