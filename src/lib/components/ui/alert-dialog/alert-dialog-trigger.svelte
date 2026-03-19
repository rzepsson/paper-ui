<script lang="ts">
    import { AlertDialog as AlertDialogPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "",
        ref = $bindable(null), 
        children, 
        child,
        ...restProps 
    }: AlertDialogPrimitive.TriggerProps = $props();
</script>

<AlertDialogPrimitive.Trigger 
    bind:ref 
    class={cn("outline-none select-none", className)}
    {child} 
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</AlertDialogPrimitive.Trigger>