<script lang="ts" module>
	export type SwitchVariant = "default" | "spring";
</script>

<script lang="ts">
	import { Switch as SwitchPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import { cn, focusRingClass } from "$lib/utils";

	let {
		class: className = "",
		checked = $bindable(false),
		variant = "default",
		ref = $bindable(null),
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> & {
		variant?: SwitchVariant;
	} = $props();
</script>

<SwitchPrimitive.Root
	bind:checked
	bind:ref
	class={cn(
		"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors",
		focusRingClass,
		"disabled:cursor-not-allowed disabled:opacity-50",
		"data-[state=checked]:bg-primary data-[state=unchecked]:bg-input data-[state=unchecked]:shadow-inner",
		variant === "spring" && "switch-spring",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
	/>
</SwitchPrimitive.Root>

<style>
	/* An overshooting curve reads as a physical throw rather than a slide. `scale` is its
	   own property here, so squashing on press cannot cancel the travel transform. */
	:global(.switch-spring [data-switch-thumb]) {
		transition-property: transform, translate, scale;
		transition-duration: 380ms;
		transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	:global(.switch-spring:active [data-switch-thumb]) {
		scale: 0.9;
		transition-duration: 120ms;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.switch-spring [data-switch-thumb]) {
			transition-duration: 1ms;
		}

		:global(.switch-spring:active [data-switch-thumb]) {
			scale: 1;
		}
	}
</style>
