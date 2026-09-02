import type { DocEntry } from "../types";

const entry: DocEntry = {
	slug: "toast",
	name: "Toaster",
	title: "Toast",
	description:
		"A transient message stacked in the corner of the screen. Mount one Toaster in your root layout, then call `toast()` from anywhere.",
	category: "Feedback",
	dir: "sonner",
	dependencies: ["svelte-sonner"],
	anatomy: `<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner";
</script>

{@render children()}
<Toaster />`,
	examples: [
		{ id: "variants", title: "Variants", description: "Each one brings its own icon and colour." },
		{ id: "action", title: "With an action", description: "A single button, usually an undo." },
		{
			id: "promise",
			title: "Promise",
			description: "Shows a spinner while the promise is pending, then resolves into a success or error toast."
		}
	],
	props: [
		{
			title: "Toaster",
			description: "Mounted once. Every prop of svelte-sonner's Toaster is forwarded on top of these defaults.",
			rows: [
				{
					name: "position",
					type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
					default: '"bottom-right"',
					description: "Corner the stack grows from."
				},
				{ name: "closeButton", type: "boolean", default: "true", description: "Shows a dismiss button on each toast." },
				{ name: "expand", type: "boolean", default: "false", description: "Whether the stack is expanded by default." },
				{ name: "duration", type: "number", default: "4000", description: "Milliseconds before a toast dismisses itself." }
			]
		},
		{
			title: "toast()",
			description: "Imported from `svelte-sonner`.",
			rows: [
				{ name: "toast(message, options?)", type: "function", description: "A plain toast." },
				{
					name: "toast.success / error / warning / info",
					type: "function",
					description: "The same, with a matching icon and colour."
				},
				{
					name: "toast.promise(promise, options)",
					type: "function",
					description: "Tracks a promise through loading, success and error."
				},
				{
					name: "options.description",
					type: "string",
					default: "undefined",
					description: "Second line under the title."
				},
				{
					name: "options.action",
					type: "{ label: string; onClick: () => void }",
					default: "undefined",
					description: "Renders a button inside the toast."
				},
				{ name: "toast.dismiss(id?)", type: "function", description: "Dismisses one toast, or all of them." }
			]
		}
	]
};

export default entry;
