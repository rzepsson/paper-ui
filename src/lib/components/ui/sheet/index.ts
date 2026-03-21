import { Dialog as SheetPrimitive } from "bits-ui";
import Root from "./sheet.svelte";
import Trigger from "./sheet-trigger.svelte";
import Content from "./sheet-content.svelte";
import Overlay from "./sheet-overlay.svelte";
import Portal from "./sheet-portal.svelte";
import Header from "./sheet-header.svelte";
import Footer from "./sheet-footer.svelte";
import Title from "./sheet-title.svelte";
import Description from "./sheet-description.svelte";
import Close from "./sheet-close.svelte";

export {
	Root,
	Trigger,
	Content,
	Overlay,
	Portal,
	Header,
	Footer,
	Title,
	Description,
	Close,

	Root as Sheet,
	Trigger as SheetTrigger,
	Content as SheetContent,
	Overlay as SheetOverlay,
	Portal as SheetPortal,
	Header as SheetHeader,
	Footer as SheetFooter,
	Title as SheetTitle,
	Description as SheetDescription,
	Close as SheetClose,
};