<script lang="ts">
  import ThemeSwitcher from "$lib/components/theme-switcher.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Accordion from "$lib/components/ui/accordion";
  import * as Checkbox from "$lib/components/ui/checkbox";
  import { Button } from "$lib/components/ui/button";
  
  import { 
    Image as ImageIcon, Frame, MonitorSmartphone, Tablet,
    Download, Plus, Trash, ExternalLink, ArrowUpDown
  } from "lucide-svelte";
  
  // States for Menu 1 (Checkbox)
  let showFiles = $state(true);
  let showFolders = $state(false);

  // State for Menu 2 (Radio)
  let sortBy = $state("date");

  // States for Accordions
  let activeAccordionItem = $state("item-1");
  let activeMultipleItems = $state(["item-4"]); 

  // Single Checkbox States
  let termsAccepted = $state(false);
  let newsletterIndeterminate = $state(true);
  
  // Checkbox Group State
  let selectedFeatures = $state(["analytics", "reporting"]);
</script>

<div class="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
  <div class="mx-auto max-w-4xl space-y-16 p-8 py-12 md:p-12">
    
    <header class="flex flex-col items-start justify-between gap-6 border-b border-border/50 pb-8 sm:flex-row sm:items-center">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">PaperUI Showroom</h1>
        <p class="text-muted-foreground mt-1 text-sm">Component showcase in React Spectrum / macOS style</p>
      </div>
      <div class="w-full sm:w-72">
        <ThemeSwitcher />
      </div>
    </header>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Accordion</h2>
        <p class="text-sm text-muted-foreground">Collapsible panels with smooth animation and keyboard support.</p>
      </div>
      
      <div class="rounded-xl border border-border/60 bg-card p-6 shadow-sm space-y-8">
        
        <div>
          <h3 class="mb-4 text-sm font-medium text-muted-foreground">Single & Default Variant</h3>
          <Accordion.Root type="single" bind:value={activeAccordionItem}>
            
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger>Personal Information</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                This is the personal information form. Fill in your name and contact preferences so we can customize the system for you. Notice the text indentation relative to the arrow icon.
              </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item value="item-2">
              <Accordion.Header>
                <Accordion.Trigger>Billing Address</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Enter your billing address. Ensure the zip code and city match your bank's records for proper card authorization.
              </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item value="item-3" disabled>
              <Accordion.Header>
                <Accordion.Trigger>Danger Zone (Disabled)</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                This content won't be shown because the entire section is disabled by the property.
              </Accordion.Content>
            </Accordion.Item>

          </Accordion.Root>
        </div>

        <div>
          <h3 class="mb-4 text-sm font-medium text-muted-foreground">Multiple & Quiet Variant</h3>
          <Accordion.Root type="multiple" variant="quiet" bind:value={activeMultipleItems}>
            
            <Accordion.Item value="item-4">
              <Accordion.Header>
                <Accordion.Trigger>Notification Preferences</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Manage how you receive notifications. You can choose to receive daily digests, instant alerts, or turn off email communications completely.
              </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item value="item-5">
              <Accordion.Header>
                <Accordion.Trigger>Privacy Settings</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Control who can see your profile. Your public profile is currently visible to everyone, but your email address remains hidden by default.
              </Accordion.Content>
            </Accordion.Item>
            
            <Accordion.Item value="item-6" disabled>
              <Accordion.Header>
                <Accordion.Trigger>Developer Tools (Disabled)</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Developer tools and experimental features are disabled for this account tier.
              </Accordion.Content>
            </Accordion.Item>

          </Accordion.Root>
        </div>

      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Dropdown Menu</h2>
        <p class="text-sm text-muted-foreground">Complex context menu supporting submenus, checkboxes, and radio options.</p>
      </div>
      
      <div class="flex flex-wrap gap-6 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <DropdownMenu.Root>
          <DropdownMenu.Trigger class="w-auto px-4">
            Publish Options
          </DropdownMenu.Trigger>

          <DropdownMenu.Content class="w-72">
            <DropdownMenu.Group>
              <DropdownMenu.GroupHeading class="pb-3">
                <DropdownMenu.ItemText>
                  <DropdownMenu.ItemLabel>Publish and export</DropdownMenu.ItemLabel>
                  <DropdownMenu.ItemDescription>Social media, other formats</DropdownMenu.ItemDescription>
                </DropdownMenu.ItemText>
              </DropdownMenu.GroupHeading>

              <DropdownMenu.Item>
                <ImageIcon class="size-5 opacity-80" />
                <DropdownMenu.ItemText>
                  <DropdownMenu.ItemLabel>Quick Export</DropdownMenu.ItemLabel>
                  <DropdownMenu.ItemDescription>Share a low-res snapshot.</DropdownMenu.ItemDescription>
                </DropdownMenu.ItemText>
                <DropdownMenu.Shortcut>⌘E</DropdownMenu.Shortcut>
              </DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <Frame class="size-5 opacity-80" />
                  <DropdownMenu.ItemText>
                    <DropdownMenu.ItemLabel>Open a copy</DropdownMenu.ItemLabel>
                    <DropdownMenu.ItemDescription>Illustrator for iPad or desktop</DropdownMenu.ItemDescription>
                  </DropdownMenu.ItemText>
                </DropdownMenu.SubTrigger>
                
                <DropdownMenu.SubContent class="w-60">
                  <DropdownMenu.GroupHeading>Open a copy in</DropdownMenu.GroupHeading>
                  <DropdownMenu.Item>
                    <Tablet class="size-5 opacity-80" />
                    <span>Illustrator for iPad</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item disabled={true}>
                    <MonitorSmartphone class="size-5 opacity-80" />
                    <span>Illustrator for desktop</span>
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator class="my-2" />

              <DropdownMenu.CheckboxItem variant="primary" bind:checked={showFiles}>
                Show files
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem bind:checked={showFolders}>
                Show folders
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger class="w-auto px-4">
            <ArrowUpDown class="mr-2 size-4 opacity-70" />
            Sort
          </DropdownMenu.Trigger>

          <DropdownMenu.Content class="w-48">
            <DropdownMenu.Group>
              <DropdownMenu.GroupHeading class="pb-3">
                <DropdownMenu.ItemText>
                  <DropdownMenu.ItemLabel>Sort by</DropdownMenu.ItemLabel>
                  <DropdownMenu.ItemDescription>Choose sorting method</DropdownMenu.ItemDescription>
                </DropdownMenu.ItemText>
              </DropdownMenu.GroupHeading>
              
              <DropdownMenu.Separator class="mb-2" />
              
              <DropdownMenu.RadioGroup bind:value={sortBy}>
                <DropdownMenu.RadioItem value="date" disabled={true}>
                  Date
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="name">
                  Name
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="size">
                  Size
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        
      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Buttons</h2>
        <p class="text-sm text-muted-foreground">Primary interactive element in various variants and sizes.</p>
      </div>
      
      <div class="flex flex-col gap-8 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Variants</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link text</Button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Sizes & Icons</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Button size="sm">Small (32px)</Button>
            <Button size="default">Default (36px)</Button>
            <Button size="lg">Large (40px)</Button>
            
            <Button>
              <Download class="mr-2 size-4" />
              Save
            </Button>

            <Button variant="outline" size="icon" aria-label="Add">
              <Plus class="size-4" />
            </Button>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Special States (Disabled & Links)</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Button disabled>
              <Trash class="mr-2 size-4" />
              Disabled
            </Button>

            <Button href="https://github.com" target="_blank" variant="secondary">
              <ExternalLink class="mr-2 size-4" />
              Open link
            </Button>
          </div>
        </div>

      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Checkboxes</h2>
        <p class="text-sm text-muted-foreground">Versatile selection controls with tri-state support and grouping.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <div class="space-y-6">
          <h3 class="text-sm font-medium text-muted-foreground">Individual States</h3>
          <div class="space-y-4">
            <Checkbox.Root bind:checked={termsAccepted} variant="primary">
              Accept terms and conditions
            </Checkbox.Root>
            
            <Checkbox.Root bind:indeterminate={newsletterIndeterminate}>
              Enable daily digests
            </Checkbox.Root>

            <Checkbox.Root disabled checked>
              Disabled checked state
            </Checkbox.Root>
          </div>
        </div>

        <div class="space-y-6">
          <h3 class="text-sm font-medium text-muted-foreground">Checkbox Group</h3>
          <Checkbox.Group bind:value={selectedFeatures} class="space-y-4">
            <Checkbox.GroupLabel class="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Platform Features
            </Checkbox.GroupLabel>
            
            <div class="space-y-3 pt-1">
              <Checkbox.Root value="analytics">Real-time Analytics</Checkbox.Root>
              <Checkbox.Root value="reporting">Advanced Reporting</Checkbox.Root>
              <Checkbox.Root value="api">API Access</Checkbox.Root>
              <Checkbox.Root value="sso" disabled>SSO Integration (Enterprise)</Checkbox.Root>
            </div>
          </Checkbox.Group>
          
          <p class="text-[10px] font-mono text-muted-foreground bg-muted p-2 rounded">
            Selected: {JSON.stringify(selectedFeatures)}
          </p>
        </div>

      </div>
    </section>

  </div>
</div>