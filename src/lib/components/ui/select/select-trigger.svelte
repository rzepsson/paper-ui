<script lang="ts" module>
	export type SelectTriggerVariant = "default" | "underline";
</script>

<script lang="ts">
    import { Select as SelectPrimitive } from "bits-ui";
    import { ChevronDown } from "lucide-svelte";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        children,
        child,
        variant = "default",
        ref = $bindable(null),
        ...restProps
    }: SelectPrimitive.TriggerProps & {
        variant?: SelectTriggerVariant;
    } = $props();

    const variantClasses: Record<SelectTriggerVariant, string> = {
        default:
            "rounded-lg border-2 border-input bg-background px-3 hover:border-foreground/30 focus-visible:border-primary data-[state=open]:border-primary",
        underline:
            "select-underline rounded-none border-0 border-b-2 border-transparent bg-transparent px-1"
    };
</script>

<SelectPrimitive.Trigger
    bind:ref
    class={cn(
        "flex h-9 w-full items-center justify-between py-1 text-sm transition-all duration-200 outline-none select-none",
        variantClasses[variant],
        "data-placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input",
        className
    )}
    {child}
    {...restProps}
>
    {#if !child}
        <span class="truncate">
            {@render children?.()}
        </span>
        <ChevronDown class="size-4 shrink-0 opacity-50 transition-transform duration-200 data-[state=open]:rotate-180" />
    {/if}
</SelectPrimitive.Trigger>

<style>
    :global(.select-underline) {
        --underline-rest: var(--input);
        background-image:
            linear-gradient(var(--primary), var(--primary)),
            linear-gradient(var(--underline-rest), var(--underline-rest));
        background-repeat: no-repeat;
        background-origin: border-box;
        background-position: 50% 100%;
        background-size:
            0% 2px,
            100% 2px;
        transition: background-size 280ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    :global(.select-underline:hover) {
        --underline-rest: color-mix(in oklch, var(--foreground) 40%, transparent);
    }

    :global(.select-underline:focus-visible),
    :global(.select-underline[data-state="open"]) {
        background-size:
            100% 2px,
            100% 2px;
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.select-underline) {
            transition-duration: 1ms;
        }
    }
</style>
