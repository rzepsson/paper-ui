<script lang="ts">
    import { Checkbox as CheckboxPrimitive, useId, type WithoutChildrenOrChild } from "bits-ui";
    import { Check, Minus } from "lucide-svelte";
    import { cn, focusRingClass } from "$lib/utils";
    import { Label } from "$lib/components/ui/label";

    let {
        id = useId(),
        class: className = "",
        checked = $bindable(false),
        indeterminate = $bindable(false),
        variant = "default",
        ref = $bindable(null),
        children,
        ...restProps
    }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> & {
        variant?: "default" | "basic";
        children?: import("svelte").Snippet;
    } = $props();

    const variantClasses = {
        default: "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary text-primary-foreground group-hover/row:border-primary/80",
        basic: "data-[state=checked]:bg-foreground data-[state=checked]:border-foreground data-[state=indeterminate]:bg-foreground data-[state=indeterminate]:border-foreground text-background group-hover/row:border-foreground/80"
    };
</script>

<div class="group/row flex items-center gap-3 w-fit">
    <CheckboxPrimitive.Root
        {id}
        bind:checked
        bind:indeterminate
        bind:ref
        class={cn(
            "checkbox-transitions group relative flex size-4.5 shrink-0 items-center justify-center rounded border-2 border-input bg-muted outline-none",
            "active:scale-[0.92]",
            focusRingClass,
            variantClasses[variant],
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...restProps}
    >
        {#snippet children({ checked, indeterminate })}
            <Check class="size-3.5 opacity-0 transition-opacity duration-50 group-data-[state=checked]:opacity-100" strokeWidth={3} />
            <Minus class="absolute size-3.5 opacity-0 transition-opacity duration-50 group-data-[state=indeterminate]:opacity-100" strokeWidth={3} />
        {/snippet}
    </CheckboxPrimitive.Root>

    {#if children}
        <Label 
            for={id} 
            class="transition-colors duration-200 text-foreground/90 group-hover/row:text-foreground cursor-pointer"
        >
            {@render children()}
        </Label>
    {/if}
</div>

<style>
    :global(.checkbox-transitions) {
        transition-property: border-color, background-color, transform, box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms, 70ms, 70ms, 150ms; 
    }
</style>