<script lang="ts">
    import { Dialog as DialogPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let { 
        class: className = "",
        ref = $bindable(null), 
        children, 
        child,
        ...restProps 
    }: DialogPrimitive.TriggerProps = $props();
</script>

<DialogPrimitive.Trigger 
    bind:ref 
    class={cn("outline-none select-none", className)}
    {child} 
    {...restProps}
>
    {#if !child}
        {@render children?.()}
    {/if}
</DialogPrimitive.Trigger>