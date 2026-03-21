<script lang="ts">
    import { Dialog as DialogPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "", 
        ref = $bindable(null), 
        children,
        child,
        ...restProps 
    }: DialogPrimitive.CloseProps = $props();
</script>

<DialogPrimitive.Close
    bind:ref
    class={cn("outline-none", className)}
    {child}
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</DialogPrimitive.Close>