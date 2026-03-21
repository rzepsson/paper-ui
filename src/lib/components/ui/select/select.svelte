<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";

    let {
        value = $bindable(),
        children,
        ...restProps
    }: SelectPrimitive.RootProps = $props();
</script>

<SelectPrimitive.Root bind:value={value as never} {...restProps}>
    {@render children?.()}
</SelectPrimitive.Root>