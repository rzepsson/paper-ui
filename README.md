# paperui

_[Polski](README.pl.md)_

21 Svelte 5 components - dialogs, dropdowns, tables, toasts, the usual. Built on bits-ui primitives, styled with Tailwind v4, light and dark.

I built all of these for other projects of mine, taking styling cues from the macOS and Adobe design systems.

**Stack:** Svelte 5 (runes) · SvelteKit · Tailwind v4 · bits-ui · Lucide

## Screenshots

The button playground.

![Button playground](docs/screenshots/button-docs.png)

The command palette on ⌘J, in dark mode.

![Command palette](docs/screenshots/command.png)

## What's inside

Accordion, alert dialog, badge, button, checkbox, command, dialog, dropdown menu, input, label, pagination, popover, scroll area, select, sheet, skeleton, switch, table, tabs, toast, tooltip.

- **bits-ui underneath** - keyboard handling, focus traps and ARIA come from the primitives, and I only write the classes.
- **Tokens, not colours** - every colour is an OKLCH variable handed to Tailwind through `@theme inline`. Dark mode is the same names with different numbers, so no component knows which theme is on.
- **Classes you can override** - everything runs through `cn()` (clsx + tailwind-merge).

## Running it

```bash
npm install
npm run dev
```

`/` puts every component on one page.
