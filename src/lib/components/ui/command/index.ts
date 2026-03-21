import { Command as CommandPrimitive } from "bits-ui";
import Root from "./command.svelte";
import Input from "./command-input.svelte";
import List from "./command-list.svelte";
import Group from "./command-group.svelte";
import Item from "./command-item.svelte";
import Separator from "./command-separator.svelte";
import Empty from "./command-empty.svelte";
import Loading from "./command-loading.svelte";
import Dialog from "./command-dialog.svelte";
import Shortcut from "./command-shortcut.svelte";

export {
	Root,
	Input,
	List,
	Group,
	Item,
	Separator,
	Empty,
	Loading,
	Dialog,
    Shortcut,

	Root as Command,
	Input as CommandInput,
	List as CommandList,
	Group as CommandGroup,
	Item as CommandItem,
	Separator as CommandSeparator,
	Empty as CommandEmpty,
	Loading as CommandLoading,
	Dialog as CommandDialog,
    Shortcut as CommandShortcut,
};