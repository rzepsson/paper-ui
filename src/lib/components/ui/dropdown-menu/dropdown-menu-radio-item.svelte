<script lang="ts">
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
    import { Check } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        value,
        ref = $bindable(null),
        closeOnSelect = true,
        children: childrenProp,
        child,
        ...restProps
    }: DropdownMenuPrimitive.RadioItemProps = $props();
</script>

<DropdownMenuPrimitive.RadioItem
    bind:ref
    {value}
    {closeOnSelect} 
    {child} class={cn(
        "group relative flex cursor-default select-none items-center gap-3 rounded-md px-2.5 py-1.5 font-sans text-sm font-medium outline-none transition-all duration-200 active:scale-[0.98]",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:outline data-highlighted:outline-primary data-highlighted:-outline-offset-2",
        "data-disabled:pointer-events-none data-disabled:opacity-45",
        className
    )}
    {...restProps}
>
    {#snippet children({ checked })}
        {#if !child}
            <span class="absolute left-2.5 flex size-4 items-center justify-center">
                <Check
                    class="size-4 text-primary opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
                    strokeWidth={3}
                />
            </span>
            
            <div class="flex w-full items-center gap-2 pl-6">
                {@render childrenProp?.({ checked })}
            </div>
        {/if}
    {/snippet}
</DropdownMenuPrimitive.RadioItem>