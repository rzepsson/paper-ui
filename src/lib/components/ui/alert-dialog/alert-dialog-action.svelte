<script lang="ts">
    import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "", 
        ref = $bindable(null), 
        children,
        child,
        ...restProps 
    }: AlertDialogPrimitive.ActionProps = $props();
</script>

<AlertDialogPrimitive.Action
    bind:ref
    class={cn("outline-none", className)}
    {child}
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</AlertDialogPrimitive.Action>