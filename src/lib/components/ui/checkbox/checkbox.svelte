<script lang="ts" module>
	export type CheckboxVariant = "default" | "draw";
</script>

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
        variant?: CheckboxVariant;
        children?: import("svelte").Snippet;
    } = $props();
</script>

<div class="group/row flex items-center gap-3 w-fit">
    <CheckboxPrimitive.Root
        {id}
        bind:checked
        bind:indeterminate
        bind:ref
        class={cn(
            "checkbox-transitions group relative flex size-4.5 shrink-0 items-center justify-center rounded-xs border-2 border-input bg-background outline-none",
            "active:scale-[0.92]",
            focusRingClass,
            "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary text-primary-foreground group-hover/row:border-foreground/30",
            variant === "draw" && "checkbox-draw",
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

    /* 24 covers the length of the tick path, so the stroke reveals from its start. */
    :global(.checkbox-draw svg path) {
        stroke-dasharray: 24;
    }

    :global(.checkbox-draw[data-state="checked"]) {
        animation: checkbox-pop 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    :global(.checkbox-draw[data-state="checked"] svg path) {
        animation: checkbox-draw 300ms cubic-bezier(0.65, 0, 0.35, 1) both;
    }

    @keyframes checkbox-draw {
        from {
            stroke-dashoffset: 24;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes checkbox-pop {
        0% {
            transform: scale(1);
        }
        45% {
            transform: scale(0.86);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.checkbox-draw[data-state="checked"]),
        :global(.checkbox-draw[data-state="checked"] svg path) {
            animation: none;
        }

        :global(.checkbox-draw svg path) {
            stroke-dasharray: none;
        }
    }
</style>
