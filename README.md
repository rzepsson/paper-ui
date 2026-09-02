# paperui

_[Polski](README.pl.md)_

21 Svelte 5 components - dialogs, dropdowns, tables, toasts, the usual. Built on bits-ui primitives, styled with Tailwind v4, light and dark.

I built all of these for other projects of mine and pulled them into one place.

**Stack:** Svelte 5 (runes) · SvelteKit · Tailwind v4 · bits-ui · Lucide

## Screenshots

The landing page.

![Landing page](docs/screenshots/home.png)

Every component gets a playground where the snippet follows the controls.

![Button playground](docs/screenshots/button-docs.png)

The theme panel: mode, accent presets and the radius scale.

![Theme panel](docs/screenshots/theme.png)

The component search on ⌘K, in dark mode.

![Command palette](docs/screenshots/command.png)

## What's inside

Accordion, alert dialog, badge, button, checkbox, command, dialog, dropdown menu, input, label, pagination, popover, scroll area, select, sheet, skeleton, switch, table, tabs, toast, tooltip.

- **bits-ui underneath** - keyboard handling, focus traps and ARIA come from the primitives, and I only write the classes.
- **Tokens, not colours** - every colour is an OKLCH variable handed to Tailwind through `@theme inline`. Dark mode is the same names with different numbers, so no component knows which theme is on.
- **Classes you can override** - everything runs through `cn()` (clsx + tailwind-merge).

## Installing

The components are served as a shadcn registry, so the CLI copies the source into your
project rather than adding a dependency. Run the base once:

```bash
npx shadcn-svelte@latest add https://paper-ui.com/r/init.json
```

That installs the runtime packages, writes `src/lib/utils.ts` with `cn()`, and merges the
whole token set - light, dark, the radius scale and the base layer - into your Tailwind
stylesheet. Then add whatever you need:

```bash
npx shadcn-svelte@latest add https://paper-ui.com/r/button.json
```

Components pull in what they import - adding `table` also brings `checkbox`, `skeleton`
and `scroll-area` - but they depend on `utils` alone, so a later install never rewrites
tokens you have customised. The full index lives at
[`/registry.json`](https://paper-ui.com/registry.json).

## Running the docs

```bash
npm install
npm run dev
```

| Route | What's there |
| --- | --- |
| `/` | Landing page |
| `/docs` | Introduction, installation, theming |
| `/docs/components/<name>` | Playground, examples, API reference, keyboard map |
| `/docs/components/<name>.md` | The same page as Markdown |
| `/r/init.json` | Base tokens, `cn()` and packages |
| `/r/<name>.json` | Registry item for the shadcn CLI |
| `/registry.json` | Registry index |

Every example on a component page is a real file under `src/lib/docs/examples/`. The page
renders it and shows its source from the same file, so the two cannot drift apart.

```bash
npm run check   # svelte-check
npm run build   # prerenders the registry and the .md pages
npm run shots   # regenerates the screenshots above (dev server must be running)
```
