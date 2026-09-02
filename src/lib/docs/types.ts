import type { Component } from "svelte";

export type PropDef = {
	name: string;
	type: string;
	default?: string;
	description: string;
};

export type PropGroup = {
	title: string;
	description?: string;
	rows: PropDef[];
};

export type ExampleDef = {
	id: string;
	title: string;
	description?: string;
};

export type ControlDef =
	| { kind: "select"; prop: string; label: string; options: string[]; default: string }
	| { kind: "boolean"; prop: string; label: string; default: boolean }
	| { kind: "text"; prop: string; label: string; default: string; placeholder?: string };

export type PlaygroundDef = {
	component: Component<any>;
	controls: ControlDef[];
	code: (values: Record<string, any>) => string;
};

export type KeyboardShortcut = {
	keys: string;
	description: string;
};

export type DocEntry = {
	slug: string;
	name: string;
	title: string;
	description: string;
	category: string;
	dir?: string;
	primitive?: string;
	dependencies?: string[];
	anatomy?: string;
	examples: ExampleDef[];
	props: PropGroup[];
	keyboard?: KeyboardShortcut[];
	playground?: PlaygroundDef;
};

export type TocItem = {
	id: string;
	label: string;
	depth?: number;
};
