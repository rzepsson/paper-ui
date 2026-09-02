import type { DocEntry } from "../types";
import Playground from "../playgrounds/button.svelte";

const entry: DocEntry = {
	slug: "button",
	name: "Button",
	title: "Button",
	description:
		"Triggers an action. Renders a native button, or an anchor as soon as you hand it an href, so the semantics follow the intent.",
	category: "Forms",
	primitive: "Button",
	examples: [
		{ id: "variants", title: "Variants", description: "Six weights of emphasis, from the filled primary down to a bare link." },
		{ id: "sizes", title: "Sizes", description: "Three text sizes plus a square icon-only variant." },
		{ id: "with-icon", title: "With an icon", description: "Icons are sized and spaced by the button, so no wrapper classes are needed." },
		{ id: "as-link", title: "Links and disabled state", description: "An href swaps the underlying element for an anchor." }
	],
	playground: {
		component: Playground,
		controls: [
			{
				kind: "select",
				prop: "variant",
				label: "Variant",
				options: ["default", "secondary", "outline", "ghost", "destructive", "link"],
				default: "default"
			},
			{ kind: "select", prop: "size", label: "Size", options: ["sm", "default", "lg", "icon"], default: "default" },
			{ kind: "boolean", prop: "disabled", label: "Disabled", default: false },
			{ kind: "text", prop: "label", label: "Label", default: "Click me" }
		],
		code: ({ variant, size, disabled, label }) => {
			const props: string[] = [];
			if (variant !== "default") props.push(`variant="${variant}"`);
			if (size !== "default") props.push(`size="${size}"`);
			if (disabled) props.push("disabled");
			const open = props.length ? `<Button ${props.join(" ")}>` : "<Button>";
			return `${open}\n  ${size === "icon" ? "+" : label || "Click me"}\n</Button>`;
		}
	},
	props: [
		{
			title: "Button",
			rows: [
				{
					name: "variant",
					type: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`,
					default: `"default"`,
					description: "Visual emphasis."
				},
				{
					name: "size",
					type: `"default" | "sm" | "lg" | "icon"`,
					default: `"default"`,
					description: "Height and horizontal padding. `icon` makes it square."
				},
				{
					name: "href",
					type: "string",
					default: "undefined",
					description: "Renders an anchor instead of a button, keeping the same styling."
				},
				{
					name: "disabled",
					type: "boolean",
					default: "false",
					description: "Blocks interaction and drops the opacity."
				},
				{
					name: "type",
					type: `"button" | "submit" | "reset"`,
					default: `"button"`,
					description: "Native button type. Ignored when `href` is set."
				},
				{
					name: "ref",
					type: "HTMLButtonElement | HTMLAnchorElement | null",
					default: "null",
					description: "Bindable reference to the rendered element."
				},
				{
					name: "class",
					type: "string",
					default: `""`,
					description: "Merged over the defaults with `cn()`, so conflicting utilities win."
				}
			]
		}
	],
	keyboard: [
		{ keys: "Space / Enter", description: "Activates the button." },
		{ keys: "Tab", description: "Moves focus to the button and shows the focus ring." }
	]
};

export default entry;
