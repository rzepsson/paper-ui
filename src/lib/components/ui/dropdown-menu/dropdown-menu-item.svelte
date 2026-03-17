<script lang="ts">
    import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        children,
        ref = $bindable(null),
        ...restProps
    }: DropdownMenuPrimitive.ItemProps = $props();
</script>

<DropdownMenuPrimitive.Item
    bind:ref
    class={cn(
        "group relative flex cursor-default select-none items-center gap-3 rounded-md px-2.5 py-1.5 font-sans text-sm font-medium outline-none",
        "transition-all duration-200 active:scale-[0.98]",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground data-highlighted:outline data-highlighted:outline-primary data-highlighted:-outline-offset-2",
        "data-disabled:pointer-events-none data-disabled:opacity-45",
        className
    )}
    {...restProps}
>
    {@render children?.()}
</DropdownMenuPrimitive.Item>