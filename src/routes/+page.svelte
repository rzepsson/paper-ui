<script lang="ts">
  import ThemeSwitcher from "$lib/components/theme-switcher.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Button } from "$lib/components/ui/button";
  import { 
    Image as ImageIcon, Frame, MonitorSmartphone, Tablet,
    Download, Plus, Trash, ExternalLink,
    ArrowUpDown
  } from "lucide-svelte";
  
  // Stany dla pierwszego menu
  let showFiles = $state(true);
  let showFolders = $state(false);

  // Stan dla Radio Group (Domyślnie zaznaczona opcja "date")
  let sortBy = $state("date");
</script>

<div class="flex min-h-screen items-start justify-center gap-12 bg-background p-12">
  
  <div class="w-72">
    <ThemeSwitcher />
  </div>

  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="w-auto px-4">
      Publish
    </DropdownMenu.Trigger>

    <DropdownMenu.Content>
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

        <DropdownMenu.CheckboxItem bind:checked={showFiles}>
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
            <DropdownMenu.ItemDescription>Different options</DropdownMenu.ItemDescription>
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

<div class="flex min-h-screen flex-col items-center justify-center gap-12 bg-background p-12 text-foreground">
	
	<div class="flex flex-col gap-4 text-center">
		<h2 class="font-sans text-lg font-semibold">Warianty przycisków</h2>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<Button variant="default">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="link">Link text</Button>
		</div>
	</div>

	<div class="flex flex-col gap-4 text-center">
		<h2 class="font-sans text-lg font-semibold">Rozmiary i ikony</h2>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<Button size="sm">Small (32px)</Button>
			<Button size="default">Default (36px)</Button>
			<Button size="lg">Large (40px)</Button>
			
			<Button>
				<Download class="mr-2 size-4" />
				Zapisz
			</Button>

			<Button variant="outline" size="icon" aria-label="Dodaj">
				<Plus class="size-4" />
			</Button>
		</div>
	</div>

	<div class="flex flex-col gap-4 text-center">
		<h2 class="font-sans text-lg font-semibold">API Bits UI (Link & Disabled)</h2>
		<div class="flex flex-wrap items-center justify-center gap-4">
			
			<Button disabled>
				<Trash class="mr-2 size-4" />
				Nieaktywny
			</Button>

			<Button href="https://github.com" target="_blank" variant="secondary">
				<ExternalLink class="mr-2 size-4" />
				Otwórz link
			</Button>
			
		</div>
	</div>

</div>