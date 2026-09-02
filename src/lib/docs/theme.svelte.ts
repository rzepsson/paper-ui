import { browser } from "$app/environment";

export type ThemePreset = {
	id: string;
	name: string;
	primary: string;
	primaryForeground: string;
};

export const PRESETS: ThemePreset[] = [
	{
		id: "blue",
		name: "Blue",
		primary: "oklch(0.6231 0.1880 259.8145)",
		primaryForeground: "oklch(1 0 0)"
	},
	{
		id: "violet",
		name: "Violet",
		primary: "oklch(0.5854 0.2041 292.72)",
		primaryForeground: "oklch(1 0 0)"
	},
	{
		id: "teal",
		name: "Teal",
		primary: "oklch(0.6 0.118 184.7)",
		primaryForeground: "oklch(1 0 0)"
	},
	{
		id: "emerald",
		name: "Emerald",
		primary: "oklch(0.596 0.145 163.2)",
		primaryForeground: "oklch(1 0 0)"
	},
	{
		id: "amber",
		name: "Amber",
		primary: "oklch(0.7686 0.1647 70.08)",
		primaryForeground: "oklch(0.2 0 0)"
	},
	{
		id: "rose",
		name: "Rose",
		primary: "oklch(0.6368 0.2078 15)",
		primaryForeground: "oklch(1 0 0)"
	},
	{
		id: "graphite",
		name: "Graphite",
		primary: "oklch(0.4 0 0)",
		primaryForeground: "oklch(1 0 0)"
	}
];

export const RADII = [
	{ id: "0", label: "0", value: "0rem" },
	{ id: "sm", label: "S", value: "0.25rem" },
	{ id: "md", label: "M", value: "0.5rem" },
	{ id: "lg", label: "L", value: "0.75rem" },
	{ id: "xl", label: "XL", value: "1rem" }
] as const;

export const DEFAULT_PRESET = "blue";
export const DEFAULT_RADIUS = "xl";
export const STORAGE_KEY = "paperui:theme";

type Stored = { preset: string; radius: string };

function read(): Stored {
	if (!browser) return { preset: DEFAULT_PRESET, radius: DEFAULT_RADIUS };
	try {
		const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
		return {
			preset: PRESETS.some((p) => p.id === raw.preset) ? raw.preset : DEFAULT_PRESET,
			radius: RADII.some((r) => r.id === raw.radius) ? raw.radius : DEFAULT_RADIUS
		};
	} catch {
		return { preset: DEFAULT_PRESET, radius: DEFAULT_RADIUS };
	}
}

class ThemeState {
	preset = $state(DEFAULT_PRESET);
	radius = $state(DEFAULT_RADIUS);

	constructor() {
		const stored = read();
		this.preset = stored.preset;
		this.radius = stored.radius;
	}

	get isDefault() {
		return this.preset === DEFAULT_PRESET && this.radius === DEFAULT_RADIUS;
	}

	setPreset(id: string) {
		this.preset = id;
		this.apply();
	}

	setRadius(id: string) {
		this.radius = id;
		this.apply();
	}

	reset() {
		this.preset = DEFAULT_PRESET;
		this.radius = DEFAULT_RADIUS;
		this.apply();
	}

	// Inline styles beat both :root and .dark, so one set covers either mode. A default
	// choice removes its override rather than restating the stylesheet's own value.
	apply() {
		if (!browser) return;

		const root = document.documentElement;
		const accentProps = ["--primary", "--ring", "--sidebar-primary", "--sidebar-ring"];

		if (this.preset === DEFAULT_PRESET) {
			for (const prop of [...accentProps, "--primary-foreground"]) root.style.removeProperty(prop);
		} else {
			const preset = PRESETS.find((p) => p.id === this.preset)!;
			for (const prop of accentProps) root.style.setProperty(prop, preset.primary);
			root.style.setProperty("--primary-foreground", preset.primaryForeground);
		}

		if (this.radius === DEFAULT_RADIUS) {
			root.style.removeProperty("--radius");
		} else {
			root.style.setProperty("--radius", RADII.find((r) => r.id === this.radius)!.value);
		}

		if (this.isDefault) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({ preset: this.preset, radius: this.radius }));
		}
	}
}

export const theme = new ThemeState();
