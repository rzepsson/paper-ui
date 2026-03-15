import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

import Trigger from "./dropdown-menu-trigger.svelte";
import Content from "./dropdown-menu-content.svelte";
import Item from "./dropdown-menu-item.svelte";
import CheckboxItem from "./dropdown-menu-checkbox-item.svelte";
import ItemText from "./dropdown-menu-item-text.svelte";
import ItemLabel from "./dropdown-menu-item-label.svelte";
import ItemDescription from "./dropdown-menu-item-description.svelte";
import Separator from "./dropdown-menu-separator.svelte";
import Shortcut from "./dropdown-menu-shortcut.svelte";
import GroupHeading from "./dropdown-menu-group-heading.svelte";
import SubTrigger from "./dropdown-menu-sub-trigger.svelte";
import SubContent from "./dropdown-menu-sub-content.svelte";
import RadioGroup from "./dropdown-menu-radio-group.svelte";
import RadioItem from "./dropdown-menu-radio-item.svelte";

const Root = DropdownMenuPrimitive.Root;
const Group = DropdownMenuPrimitive.Group;
const Sub = DropdownMenuPrimitive.Sub;
const RadioGroupPrimitive = DropdownMenuPrimitive.RadioGroup;

export {
    Root,
    Trigger,
    Content,
    Item,
    CheckboxItem,
    ItemText,
    ItemLabel,
    ItemDescription,
    Separator,
    Shortcut,
    Group,
    GroupHeading,
    GroupHeading as Label,
    Sub,
    SubTrigger,
    SubContent,
    RadioGroup,
    RadioItem,
    
    Root as DropdownMenu,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    Item as DropdownMenuItem,
    CheckboxItem as DropdownMenuCheckboxItem,
    ItemText as DropdownMenuItemText,
    ItemLabel as DropdownMenuItemLabel,
    ItemDescription as DropdownMenuItemDescription,
    Separator as DropdownMenuSeparator,
    Shortcut as DropdownMenuShortcut,
    Group as DropdownMenuGroup,
    GroupHeading as DropdownMenuGroupHeading,
    GroupHeading as DropdownMenuLabel,
    Sub as DropdownMenuSub,
    SubTrigger as DropdownMenuSubTrigger,
    SubContent as DropdownMenuSubContent,
    RadioGroup as DropdownMenuRadioGroup,
    RadioItem as DropdownMenuRadioItem,
};