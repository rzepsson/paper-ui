<script lang="ts" module>
	export type InputVariant = "default" | "underline";
</script>

<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    import { cn } from "$lib/utils";

    let {
        class: className = "",
        value = $bindable(),
        ref = $bindable(null),
        variant = "default",
        ...restProps
    }: HTMLInputAttributes & {
        ref?: HTMLInputElement | null;
        variant?: InputVariant;
    } = $props();

    const variantClasses: Record<InputVariant, string> = {
        default: "rounded-lg border-2 border-input bg-background px-3 hover:border-foreground/30 focus:border-primary",
        underline: "input-underline rounded-none border-0 border-b-2 border-transparent bg-transparent px-1"
    };
</script>

<input
    bind:this={ref}
    bind:value
    class={cn(
        "peer flex h-9 w-full py-1 text-sm transition-all duration-200",
        variantClasses[variant],
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground",
        "focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input",
        className
    )}
    {...restProps}
/>

<style>
    /* Two layers on one line: the resting rule underneath, the primary rule growing over
       it. `border-box` origin lets them paint across the border area, and the border is
       kept transparent purely to reserve those 2px so the field height never shifts. */
    :global(.input-underline) {
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

    :global(.input-underline:hover) {
        --underline-rest: color-mix(in oklch, var(--foreground) 40%, transparent);
    }

    :global(.input-underline:focus) {
        background-size:
            100% 2px,
            100% 2px;
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.input-underline) {
            transition-duration: 1ms;
        }
    }
</style>
