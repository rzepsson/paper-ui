import { Tooltip as TooltipPrimitive } from "bits-ui";

import Root from "./tooltip.svelte";
import Content from "./tooltip-content.svelte";
import Trigger from "./tooltip-trigger.svelte";
import Portal from "./tooltip-portal.svelte";

const Provider = TooltipPrimitive.Provider;

export {
	Root,
	Trigger,
	Content,
	Portal,
	Provider,

	Root as Tooltip,
	Trigger as TooltipTrigger,
	Content as TooltipContent,
	Portal as TooltipPortal,
	Provider as TooltipProvider,
};