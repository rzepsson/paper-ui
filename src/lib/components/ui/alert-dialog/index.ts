import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

import Root from "./alert-dialog.svelte";
import Trigger from "./alert-dialog-trigger.svelte";
import Portal from "./alert-dialog-portal.svelte";
import Overlay from "./alert-dialog-overlay.svelte";
import Content from "./alert-dialog-content.svelte";
import Title from "./alert-dialog-title.svelte";
import Description from "./alert-dialog-description.svelte";
import Action from "./alert-dialog-action.svelte";
import Cancel from "./alert-dialog-cancel.svelte";

export {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
	Description,
	Action,
	Cancel,

	Root as AlertDialog,
	Trigger as AlertDialogTrigger,
	Portal as AlertDialogPortal,
	Overlay as AlertDialogOverlay,
	Content as AlertDialogContent,
	Title as AlertDialogTitle,
	Description as AlertDialogDescription,
	Action as AlertDialogAction,
	Cancel as AlertDialogCancel,
};