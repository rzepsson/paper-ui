<script lang="ts">
  import ThemeSwitcher from "$lib/components/theme-switcher.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { 
    Image as ImageIcon, Frame, MonitorSmartphone, Tablet,
    User, Settings, LogOut, Keyboard, Bell, Sparkles, Command, CheckSquare,
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