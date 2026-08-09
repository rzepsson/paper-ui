<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Checkbox from "$lib/components/ui/checkbox";
  import { Copy, Check } from "lucide-svelte";

  // Interactive Playground State
  let selectedVariant = $state<"default" | "destructive" | "outline" | "secondary" | "ghost" | "link">("default");
  let selectedSize = $state<"default" | "sm" | "lg" | "icon">("default");
  let isDisabled = $state(false);
  let isHref = $state(false);
  let copiedCode = $state(false);

  const variants: Array<"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"> = [
    "default",
    "secondary",
    "outline",
    "ghost",
    "destructive",
    "link"
  ];

  const sizes: Array<"default" | "sm" | "lg" | "icon"> = ["sm", "default", "lg", "icon"];

  // Generate dynamic code based on selections
  function generateCode() {
    const props = [];

    if (selectedVariant !== "default") {
      props.push(`variant="${selectedVariant}"`);
    }
    if (selectedSize !== "default") {
      props.push(`size="${selectedSize}"`);
    }
    if (isDisabled) {
      props.push("disabled");
    }
    if (isHref) {
      props.push(`href="https://paper-ui.com"`);
    }

    // Keep the tag on one line while it has nothing to hold
    const openTag = props.length ? `<Button\n  ${props.join("\n  ")}\n>` : "<Button>";
    const label = selectedSize === "icon" ? "+" : "Click me";

    return `${openTag}\n  ${label}\n</Button>`;
  }

  function copyCode() {
    const code = generateCode();
    navigator.clipboard.writeText(code);
    copiedCode = true;
    setTimeout(() => {
      copiedCode = false;
    }, 2000);
  }

  const hrefCode = `<Button href="https://bits-ui.com" target="_blank" rel="noreferrer">
  Open docs
<\/Button>`;

  const bitsApiRows = [
    {
      property: "href",
      type: "string | undefined",
      defaultValue: "undefined",
      description: "When provided, the root renders as an anchor instead of a native button."
    },
    {
      property: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents interaction and applies disabled behavior."
    },
    {
      property: "type",
      type: '"button" | "submit" | "reset" | undefined',
      defaultValue: '"button" (for button element)',
      description: "Button type for native button rendering."
    },
    {
      property: "ref (bindable)",
      type: "HTMLButtonElement | HTMLAnchorElement | null",
      defaultValue: "null",
      description: "Reference to the underlying DOM element."
    },
    {
      property: "children",
      type: "Snippet",
      defaultValue: "undefined",
      description: "The rendered content inside the root."
    }
  ];

  const customApiRows = [
    {
      property: "variant",
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
      defaultValue: '"default"',
      description: "Adds predefined visual styles on top of BitsUI root behavior."
    },
    {
      property: "size",
      type: '"default" | "sm" | "lg" | "icon"',
      defaultValue: '"default"',
      description: "Controls height, padding, and radius presets."
    },
    {
      property: "class",
      type: "string",
      defaultValue: '""',
      description: "Merged with component classes through cn()."
    }
  ];
</script>

<div class="min-h-screen bg-linear-to-br from-background via-background to-muted/30 text-foreground">
  <div class="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 md:px-10 md:py-16">
    <!-- Enhanced Header -->
    <header class="space-y-6">
      <div class="space-y-2">
        <h1 class="text-4xl font-bold tracking-tight md:text-5xl">Button</h1>
        <p class="text-lg text-muted-foreground">
          A flexible, composable action component with multiple variants and sizes.
        </p>
      </div>
      <p class="max-w-3xl text-sm text-muted-foreground leading-relaxed">
        Built on <span class="font-semibold text-foreground">BitsUI Button.Root</span>, this component provides a rich API for creating buttons that adapt to your design system. Automatically switches between native <code class="inline-block rounded bg-muted px-2 py-1 font-mono text-xs">button</code> and <code class="inline-block rounded bg-muted px-2 py-1 font-mono text-xs">a</code> elements based on the <code class="inline-block rounded bg-muted px-2 py-1 font-mono text-xs">href</code> prop.
      </p>
    </header>

    <!-- Interactive Playground -->
    <section id="interactive-playground" class="scroll-mt-24 space-y-6">
      <div class="space-y-2">
        <h2 class="text-2xl font-bold tracking-tight">Interactive Playground</h2>
        <p class="text-sm text-muted-foreground">Customize your button and see the code update in real-time</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <!-- Preview Panel -->
        <div class="lg:col-span-2 flex flex-col gap-4">
          <!-- Live Preview -->
          <div class="rounded-2xl border border-border/60 bg-card p-8 shadow-sm flex items-center justify-center min-h-64">
            <Button
              variant={selectedVariant}
              size={selectedSize}
              disabled={isDisabled}
              href={isHref ? "https://paper-ui.com" : undefined}
            >
              {selectedSize === "icon" ? "+" : "Click me"}
            </Button>
          </div>

          <!-- Code Block with Copy -->
          <div class="rounded-2xl border border-border/60 bg-muted/30 p-4 relative group">
            <pre class="overflow-x-auto text-xs leading-relaxed"><code class="text-foreground/80">{generateCode()}</code></pre>
            <button
              onclick={copyCode}
              class="absolute top-3 right-3 p-2 rounded-lg bg-muted opacity-0 group-hover:opacity-100 transition-all hover:bg-muted/80 flex items-center gap-2 text-xs"
              aria-label="Copy code"
            >
              {#if copiedCode}
                <Check class="size-4" />
                <span>Copied!</span>
              {:else}
                <Copy class="size-4" />
                <span>Copy</span>
              {/if}
            </button>
          </div>
        </div>

        <!-- Controls Panel -->
        <div class="rounded-2xl border border-border/60 bg-card p-6 shadow-sm h-fit space-y-6 sticky top-6">
          <div class="space-y-3">
            <h3 class="font-semibold text-sm">Variant</h3>
            <div class="grid grid-cols-2 gap-2">
              {#each variants as variant}
                <button
                  onclick={()=> selectedVariant = variant}
                  class="px-3 py-2 rounded-lg text-xs font-medium transition-all
                    {selectedVariant === variant ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
                >
                  {variant}
                </button>
              {/each}
            </div>
          </div>

          <div class="h-px bg-border/40"></div>

          <div class="space-y-3">
            <h3 class="font-semibold text-sm">Size</h3>
            <div class="space-y-2">
              {#each sizes as size}
                <button
                  onclick={()=> selectedSize = size}
                  class="w-full px-3 py-2 rounded-lg text-xs font-medium transition-all text-left
                    {selectedSize === size ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}"
                >
                  {size}
                </button>
              {/each}
            </div>
          </div>

          <div class="h-px bg-border/40"></div>

          <div class="space-y-3">
            <h3 class="font-semibold text-sm">Modifiers</h3>
            <div class="space-y-3">
              <label class="flex items-center gap-3 cursor-pointer group">
                <Checkbox.Root bind:checked={isDisabled} class="rounded" />
                <span class="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Disabled</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer group">
                <Checkbox.Root bind:checked={isHref} class="rounded" />
                <span class="text-xs text-muted-foreground group-hover:text-foreground transition-colors">As link (href)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Variants Gallery -->
    <section id="variant-gallery" class="scroll-mt-24 space-y-6">
      <div class="space-y-2">
        <h2 class="text-2xl font-bold tracking-tight">Variant Gallery</h2>
        <p class="text-sm text-muted-foreground">All available button variants at a glance</p>
      </div>

      <div class="rounded-2xl border border-border/60 bg-card p-8 shadow-sm space-y-8">
        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-muted-foreground">Variants</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div class="h-px bg-border/40"></div>

        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-muted-foreground">Sizes</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Icon">+</Button>
          </div>
        </div>

        <div class="h-px bg-border/40"></div>

        <div class="space-y-4">
          <h3 class="text-sm font-semibold text-muted-foreground">States</h3>
          <div class="flex flex-wrap gap-3">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button href="https://paper-ui.com" target="_blank">As Link</Button>
          </div>
        </div>
      </div>
    </section>

    <!-- API Reference -->
    <section id="api-reference" class="scroll-mt-24 space-y-6">
      <div class="space-y-2">
        <h2 class="text-2xl font-bold tracking-tight">API Reference</h2>
        <p class="text-sm text-muted-foreground">Complete documentation of all available props</p>
      </div>

      <!-- BitsUI API -->
      <article class="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-sm">
        <div class="border-b border-border/60 px-6 py-5">
          <h3 class="text-sm font-semibold">BitsUI Button.Root Props</h3>
          <p class="mt-2 text-xs text-muted-foreground">Core behavior from BitsUI Button component</p>
        </div>
        <table class="w-full min-w-190 text-left text-sm">
          <thead class="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground border-b border-border/60">
            <tr>
              <th class="px-6 py-4 font-medium">Property</th>
              <th class="px-6 py-4 font-medium">Type</th>
              <th class="px-6 py-4 font-medium">Default</th>
              <th class="px-6 py-4 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {#each bitsApiRows as row}
              <tr class="border-t border-border/60 hover:bg-muted/20 transition-colors">
                <td class="px-6 py-4 font-mono text-xs text-primary">{row.property}</td>
                <td class="px-6 py-4 font-mono text-xs">{row.type}</td>
                <td class="px-6 py-4 font-mono text-xs text-muted-foreground">{row.defaultValue}</td>
                <td class="px-6 py-4 text-xs text-muted-foreground">{row.description}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </article>

      <!-- Custom API -->
      <article class="overflow-x-auto rounded-2xl border border-border/60 bg-card shadow-sm">
        <div class="border-b border-border/60 px-6 py-5">
          <h3 class="text-sm font-semibold">Custom Props</h3>
          <p class="mt-2 text-xs text-muted-foreground">Additional styling props added by the wrapper component</p>
        </div>
        <table class="w-full min-w-190 text-left text-sm">
          <thead class="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground border-b border-border/60">
            <tr>
              <th class="px-6 py-4 font-medium">Property</th>
              <th class="px-6 py-4 font-medium">Type</th>
              <th class="px-6 py-4 font-medium">Default</th>
              <th class="px-6 py-4 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {#each customApiRows as row}
              <tr class="border-t border-border/60 hover:bg-muted/20 transition-colors">
                <td class="px-6 py-4 font-mono text-xs text-primary">{row.property}</td>
                <td class="px-6 py-4 font-mono text-xs">{row.type}</td>
                <td class="px-6 py-4 font-mono text-xs text-muted-foreground">{row.defaultValue}</td>
                <td class="px-6 py-4 text-xs text-muted-foreground">{row.description}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </article>

      <!-- Data Attributes -->
      <article id="data-attributes" class="scroll-mt-24 rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-sm">
        <h3 class="text-sm font-semibold mb-3">Data Attributes</h3>
        <div class="space-y-3 text-xs">
          <div class="flex items-start gap-3">
            <code class="rounded bg-muted px-2 py-1 font-mono text-primary">data-button-root</code>
            <span class="text-muted-foreground">Present on the root element for styling hooks</span>
          </div>
        </div>
      </article>
    </section>

    <!-- Footer -->
    <footer class="border-t border-border/40 pt-8 mt-8">
    </footer>
  </div>
</div>
