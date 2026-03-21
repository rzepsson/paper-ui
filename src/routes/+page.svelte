<script lang="ts">
  import ThemeSwitcher from "$lib/components/theme-switcher.svelte";
  import * as Tabs from "$lib/components/ui/tabs";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Accordion from "$lib/components/ui/accordion";
  import * as Checkbox from "$lib/components/ui/checkbox";
  import * as Select from "$lib/components/ui/select";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Button } from "$lib/components/ui/button";
  import { Pagination } from "$lib/components/ui/pagination";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Toaster } from "$lib/components/ui/sonner";
  import { toast } from "svelte-sonner";
  import { Table } from "$lib/components/ui/table";
  import { Badge } from "$lib/components/ui/badge";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import * as Command from "$lib/components/ui/command";
  import * as Popover from "$lib/components/ui/popover";
  
  import { 
    Image as ImageIcon, Frame, MonitorSmartphone, Tablet,
    Download, Plus, Trash, ExternalLink, ArrowUpDown,
    Settings2,
    User,
    Mail,
    Shield,
    Trash2,
    MoreVertical, FileText, Info as InfoIcon,
    Calculator, Calendar, CreditCard, Smile, Search
  } from "lucide-svelte";

  let commandDialogOpen = $state(false);

  $effect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        commandDialogOpen = !commandDialogOpen;
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  });

  let areaWidth = $state("1024");
  let areaHeight = $state("768");

  let isSheetOpen = $state(false);
  let selectedFileDetails = $state<FileRow | null>(null);

  function openFileDetails(row: FileRow) {
    selectedFileDetails = row;
    isSheetOpen = true;
  }
  
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

  // Select State
  let selectedFramework = $state("");
  let selectedFeatures = $state<string[]>([]);
  
  // Checkbox Group State
  let selectedFeatures2 = $state(["analytics", "reporting"]);

  let currentPage = $state(1);
  const totalItems = 100;
  const itemsPerPage = 10;

  function showDefaultToast() {
    toast("Saved", {
      description: "Your project has been successfully updated on the server.",
    });
  }

  function showSuccessToast() {
    toast.success("Payment accepted!", {
      description: "Invoice has been sent to your email address.",
    });
  }

  function showErrorToast() {
    toast.error("Authentication Error", {
      description: "Your session has expired. Please log in again to continue.",
    });
  }

  function showActionToast() {
    toast("Message deleted", {
      action: {
        label: "Undo",
        onClick: () => toast.success("Undid message deletion"),
      },
    });
  }

  function showPromiseToast() {
    const promise = new Promise((resolve) => setTimeout(resolve, 2000));
    toast.promise(promise, {
      loading: "Exporting files...",
      success: "Export completed successfully!",
      error: "An error occurred while exporting.",
    });
  }

  let isTableLoading = $state(false);
  let currentSort = $state<any>(null);

  // Funkcja symulująca pobieranie danych (Loading state test)
  async function simulateLoading() {
    isTableLoading = true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    isTableLoading = false;
  }

  // Twoje definicje kolumn i wierszy
  const columns = [
    { key: "name", label: "Nazwa pliku", sortable: true }, // Dodano sortable
    { key: "type", label: "Typ", sortable: true },
    { key: "size", label: "Rozmiar", class: "text-right", sortable: true },
    { key: "status", label: "Status" },
  ];

  type FileRow = {
    id: string;
    name: string;
    type: string;
    size: string;
    status: string;
    [key: string]: any;
  };

  const rows: FileRow[] = [
    { id: "1", name: "raport_Q3.pdf", type: "PDF", size: "2.4 MB", status: "Gotowy" },
    { id: "2", name: "logo_wektor.svg", type: "Obraz", size: "124 KB", status: "Oczekujący" },
    { id: "3", name: "budzet_2026.xlsx", type: "Arkusz", size: "4.1 MB", status: "Błąd" },
    { id: "4", name: "notatki_ze_spotkania.txt", type: "Tekst", size: "12 KB", status: "Gotowy" },
  ];

  let selectedFiles = $state<string[]>(["2"]);
</script>

<Toaster />

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
        <h2 class="text-xl font-semibold tracking-tight">Tabs</h2>
        <p class="text-sm text-muted-foreground">Organizuj dane w widoki (Spectrum Style).</p>
      </div>

      <div class="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        <Tabs.Root value="all" class="w-full">
          <Tabs.List>
            <Tabs.Trigger value="all">
              Wszystkie 
              <Badge variant="secondary" class="ml-2 h-4 px-1 text-[10px]">128</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="active">Aktywne</Tabs.Trigger>
            <Tabs.Trigger value="archived">Zarchiwizowane</Tabs.Trigger>
            <Tabs.Trigger value="settings" disabled>Ustawienia</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="all">
            <div class="rounded-lg border border-dashed border-border/60 p-8 text-center">
              <p class="text-sm text-muted-foreground font-sans">Tutaj znajdzie się Twoja główna tabela BaaS.</p>
            </div>
          </Tabs.Content>

          <Tabs.Content value="active">
            <div class="p-4 text-sm font-sans">Widok przefiltrowany: tylko aktywne rekordy.</div>
          </Tabs.Content>

          <Tabs.Content value="archived">
            <div class="p-4 text-sm font-sans text-muted-foreground">Archiwum jest puste.</div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>

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
        <h2 class="text-xl font-semibold tracking-tight">Sonner Toasts</h2>
        <p class="text-sm text-muted-foreground">Powerful, stacking notifications with promise and action support.</p>
      </div>
      
      <div class="flex flex-wrap gap-4 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        <Button variant="outline" onclick={showDefaultToast}>Default</Button>
        <Button variant="secondary" onclick={showSuccessToast}>Success</Button>
        <Button variant="destructive" onclick={showErrorToast}>Error</Button>
        <Button variant="default" onclick={showActionToast}>With Action</Button>
        <Button variant="outline" onclick={showPromiseToast}>Promise (Loading)</Button>
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
            {#snippet child({ props })}
              <Button {...props} variant="outline">
                Options
              </Button>
            {/snippet}
          </DropdownMenu.Trigger>

          <DropdownMenu.Content class="w-72">
            <DropdownMenu.Group>
              <DropdownMenu.GroupHeading>
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
            {#snippet child({ props })}
              <Button {...props} variant="outline">
                Sort by
              </Button>
            {/snippet}
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
                <DropdownMenu.RadioItem value="date" disabled={true} closeOnSelect={false}>
                  Date
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="name" closeOnSelect={false}>
                  Name
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="size" closeOnSelect={false}>
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
        <h2 class="text-xl font-semibold tracking-tight">Alert Dialog</h2>
        <p class="text-sm text-muted-foreground">Krytyczne okno modalne przerywające pracę użytkownika.</p>
      </div>
      
      <div class="flex flex-wrap gap-6 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            {#snippet child({ props })}
              <Button {...props}>
                Alert
              </Button>
            {/snippet}
          </AlertDialog.Trigger>
          
          <AlertDialog.Portal>
            <AlertDialog.Overlay />
            <AlertDialog.Content>
              <div class="flex flex-col gap-2">
                <AlertDialog.Title>Czy na pewno chcesz usunąć projekt?</AlertDialog.Title>
                <AlertDialog.Description>
                  Ta akcja jest nieodwracalna. Spowoduje to trwałe usunięcie projektu oraz wszystkich przypisanych do niego plików z naszych serwerów.
                </AlertDialog.Description>
              </div>
              
              <div class="mt-6 flex flex-col-reverse justify-end gap-3 sm:flex-row">
                <AlertDialog.Cancel>
                  {#snippet child({ props })}
                    <Button {...props} variant="outline" class="w-full sm:w-auto">
                      Anuluj
                    </Button>
                  {/snippet}
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  {#snippet child({ props })}
                    <Button {...props} variant="destructive" class="w-full sm:w-auto">
                      Tak, usuń
                    </Button>
                  {/snippet}
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>

        <Dialog.Root>
          <Dialog.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="secondary">
                Zwykły Dialog
              </Button>
            {/snippet}
          </Dialog.Trigger>
          
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Ustawienia konta</Dialog.Title>
              <Dialog.Description>
                Dokonaj zmian w swoim profilu tutaj. Kliknij przycisk Zapisz, gdy skończysz.
              </Dialog.Description>
              
              <div class="py-4 flex flex-col-reverse gap-2">
                <Input id="name" placeholder="Jan Kowalski" />
                <Label for="name">Imię i nazwisko</Label>
              </div>

              <div class="mt-4 flex justify-end">
                <Dialog.Close>
                  {#snippet child({ props })}
                    <Button {...props}>Zapisz zmiany</Button>
                  {/snippet}
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
    </section>

    <div class="space-y-12">
      <section class="space-y-4">
        <div class="flex items-end justify-between">
          <div>
            <h2 class="text-xl font-semibold tracking-tight">Table & Sheet Integration</h2>
            <p class="text-sm text-muted-foreground">Kliknij wiersz lub ikonę, aby edytować rekord w panelu bocznym.</p>
          </div>
          <Button variant="outline" size="sm" onclick={simulateLoading} disabled={isTableLoading}>
            {isTableLoading ? "Ładowanie..." : "Odśwież dane"}
          </Button>
        </div>

        <Table 
          columns={[...columns, { key: "actions", label: "" }]} 
          {rows} 
          variant="default" 
          selectionMode="multiple" 
          bind:selectedKeys={selectedFiles}
          bind:sortConfig={currentSort}
          isLoading={isTableLoading}
          maxHeight="400px"
          onsort={(config) => toast.info(`Sortowanie: ${config?.key}`)}
        >
          {#snippet cell(row, col)}
            {#if col.key === "status"}
              <Badge 
                variant={
                  row[col.key] === 'Gotowy' ? 'success' : 
                  row[col.key] === 'Oczekujący' ? 'warning' : 'destructive'
                }
              >
                {row[col.key]}
              </Badge>
            {:else if col.key === "actions"}
              <div class="flex justify-end">
                <Button variant="ghost" size="icon" class="size-8" onclick={(e: { stopPropagation: () => void; }) => {
                  openFileDetails(row); 
                  e.stopPropagation(); 
                }}>
                  <MoreVertical class="size-4" />
                </Button>
              </div>
            {:else if col.key === "name"}
              <button 
                class="flex items-center gap-2 font-medium hover:text-primary transition-colors"
                onclick={(e) => {
                  openFileDetails(row);
                  e.stopPropagation();
                }}
              >
                <FileText class="size-4 opacity-50" />
                {row[col.key]}
              </button>
            {:else}
              <span class="text-muted-foreground">{row[col.key]}</span>
            {/if}
          {/snippet}
        </Table>

        <Sheet.Root bind:open={isSheetOpen}>
          <Sheet.Content side="right">
            <Sheet.Header>
              <Sheet.Title>Szczegóły pliku</Sheet.Title>
              <Sheet.Description>
                Edytuj metadane i uprawnienia dla wybranego zasobu.
              </Sheet.Description>
            </Sheet.Header>

            {#if selectedFileDetails}
              <div class="grid gap-6 py-8">
                <div class="space-y-4 rounded-lg bg-muted/30 p-4 border border-border/40">
                  <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground">ID Zasobu:</span>
                    <span class="font-mono text-[11px]">{selectedFileDetails.id}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground">Ostatnia modyfikacja:</span>
                    <span class="font-medium">Dzisiaj, 14:20</span>
                  </div>
                </div>

                <div class="grid gap-2">
                  <Label for="file-name">Nazwa wyświetlana</Label>
                  <Input id="file-name" bind:value={selectedFileDetails.name} />
                </div>

                <div class="grid gap-2">
                  <Label>Tagi systemu</Label>
                  <div class="flex flex-wrap gap-2">
                    <Badge variant="outline">#internal</Badge>
                    <Badge variant="outline">#q3-report</Badge>
                    <Button variant="ghost" size="sm" class="h-6 px-2 text-[10px]">+ Dodaj</Button>
                  </div>
                </div>
              </div>
            {:else}
              <div class="space-y-4 py-8">
                <Skeleton class="h-20 w-full" />
                <Skeleton class="h-10 w-full" />
                <Skeleton class="h-10 w-full" />
              </div>
            {/if}

            <Sheet.Footer>
              <Sheet.Close>
                {#snippet child({ props })}
                  <Button {...props} class="w-full sm:w-auto">Zapisz zmiany</Button>
                {/snippet}
              </Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Root>
      </section>
    </div>

    <section class="space-y-4">
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between px-2">
          <p class="text-xs text-muted-foreground">
            Pokazano <span class="font-medium text-foreground">1-10</span> z <span class="font-medium text-foreground">{totalItems}</span> wyników
          </p>
          
          <Pagination 
            count={totalItems} 
            perPage={itemsPerPage} 
            bind:page={currentPage} 
          />
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Tooltips</h2>
        <p class="text-sm text-muted-foreground">Krótkie podpowiedzi pojawiające się po najechaniu.</p>
      </div>

      <div class="flex flex-wrap gap-4 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <Tooltip.Root>
          <Tooltip.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="outline" size="icon">
                <Plus class="size-4" />
              </Button>
            {/snippet}
          </Tooltip.Trigger>
          <Tooltip.Content>
            Dodaj nowy projekt
          </Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="destructive" size="icon">
                <Trash2 class="size-4" />
              </Button>
            {/snippet}
          </Tooltip.Trigger>
          <Tooltip.Content side="right" sideOffset={8}>
            Usuń trwale
          </Tooltip.Content>
        </Tooltip.Root>

      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Popover</h2>
        <p class="text-sm text-muted-foreground">Pływające panele na bogatą treść i formularze.</p>
      </div>

      <div class="flex flex-wrap gap-6 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <Popover.Root>
          <Popover.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="outline" class="gap-2">
                <Settings2 class="size-4" />
                Wymiary obszaru
              </Button>
            {/snippet}
          </Popover.Trigger>
          
          <Popover.Content class="w-80">
            <div class="grid gap-4">
              <div class="space-y-1.5">
                <h4 class="font-medium leading-none">Geometria</h4>
                <p class="text-[13px] text-muted-foreground">Zdefiniuj domyślne wymiary renderowania.</p>
              </div>
              
              <div class="grid gap-3">
                <div class="flex items-center gap-4">
                  <Label for="pop-width" class="w-20 text-[13px]">Szerokość</Label>
                  <Input id="pop-width" bind:value={areaWidth} class="h-8 text-[13px]" />
                </div>
                <div class="flex items-center gap-4">
                  <Label for="pop-height" class="w-20 text-[13px]">Wysokość</Label>
                  <Input id="pop-height" bind:value={areaHeight} class="h-8 text-[13px]" />
                </div>
              </div>

              <div class="mt-2 flex justify-end">
                <Popover.Close>
                  {#snippet child({ props })}
                    <Button {...props} size="sm" class="h-8 px-4">Zastosuj</Button>
                  {/snippet}
                </Popover.Close>
              </div>
            </div>
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>
            {#snippet child({ props })}
              <Button {...props} variant="secondary" size="icon" class="rounded-full border border-border/40">
                <User class="size-4" />
              </Button>
            {/snippet}
          </Popover.Trigger>
          
          <Popover.Content align="start" class="w-64 p-0 overflow-hidden">
            <div class="bg-muted/30 p-4 border-b border-border/40">
              <div class="flex items-center gap-3">
                <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <User class="size-5 text-primary" />
                </div>
                <div class="flex flex-col">
                  <span class="text-sm font-semibold">Admin Account</span>
                  <span class="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Superuser</span>
                </div>
              </div>
            </div>
            
            <div class="p-2">
              <div class="flex items-center gap-2 px-2 py-1.5 text-[13px] text-foreground/80 hover:bg-accent/50 rounded-md transition-colors cursor-default">
                <Mail class="size-3.5 opacity-60" />
                admin@paperui.dev
              </div>
              <div class="flex items-center gap-2 px-2 py-1.5 text-[13px] text-foreground/80 hover:bg-accent/50 rounded-md transition-colors cursor-default">
                <Shield class="size-3.5 opacity-60" />
                Security Settings
              </div>
            </div>
          </Popover.Content>
        </Popover.Root>

      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Badges</h2>
        <p class="text-sm text-muted-foreground">Visual labels for status and categorization.</p>
      </div>
      
      <div class="flex flex-col gap-6 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Standard Variants</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Soft Variants (BaaS Style)</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Information</Badge>
          </div>
        </div>
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
        <h2 class="text-xl font-semibold tracking-tight">Forms & Typography</h2>
        <p class="text-sm text-muted-foreground">Labels, inputs and state management.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        
        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Standard Field</h3>
          <div class="flex max-w-sm flex-col-reverse gap-2">
            <Input 
              id="mock-email" 
              type="email" 
              placeholder="name@example.com" 
            />
            <Label for="mock-email">Email address</Label>
          </div>
        </div>

        <div class="space-y-3">
          <h3 class="text-sm font-medium text-muted-foreground">Disabled Field Magic</h3>
          <div class="flex max-w-sm flex-col-reverse gap-2">
            <Input 
              id="mock-username" 
              type="text" 
              disabled 
              placeholder="This field is disabled" 
            />
            <Label for="mock-username">Username (disabled)</Label>
          </div>
        </div>

        <Select.Root type="single" bind:value={selectedFramework}>
          <Select.Trigger class="w-64">
            {selectedFramework ? selectedFramework : "Wybierz framework..."}
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.GroupHeading>Frontend</Select.GroupHeading>
              <Select.Item value="Svelte" label="Svelte" />
              <Select.Item value="React" label="React" />
              <Select.Item value="Vue" label="Vue" disabled />
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.GroupHeading>Backend</Select.GroupHeading>
              <Select.Item value="Node" label="Node.js" />
              <Select.Item value="Python" label="Python" />
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Select.Root type="multiple" bind:value={selectedFeatures}>
          <Select.Trigger class="w-64">
            {selectedFeatures.length > 0 ? `${selectedFeatures.length} wybrano` : "Moduły..."}
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="auth" label="Autoryzacja" type="checkbox" />
            <Select.Item value="db" label="Baza danych" type="checkbox" />
            <Select.Item value="storage" label="Magazyn S3" type="checkbox" />
          </Select.Content>
        </Select.Root>

      </div>
    </section>

    <section class="space-y-6">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Command (Spotlight)</h2>
        <p class="text-sm text-muted-foreground">Szybka nawigacja, wyszukiwanie i akcje z pełną obsługą klawiatury (styl macOS).</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="rounded-xl border border-border/60 bg-card p-1 shadow-sm flex flex-col overflow-hidden h-100">
          <Command.Root>
            <Command.Input placeholder="Wpisz polecenie lub szukaj..." />
            <Command.List>
              <Command.Empty>Brak wyników wyszukiwania.</Command.Empty>
              
              <Command.Group heading="Sugestie">
                <Command.Item>
                  <Calendar class="mr-2 size-4 opacity-70" />
                  Kalendarz
                </Command.Item>
                <Command.Item>
                  <Smile class="mr-2 size-4 opacity-70" />
                  Szukaj Emoji
                </Command.Item>
                <Command.Item disabled>
                  <Calculator class="mr-2 size-4 opacity-70" />
                  Kalkulator (Niedostępne)
                </Command.Item>
              </Command.Group>
              
              <Command.Separator />
              
              <Command.Group heading="Ustawienia">
                <Command.Item>
                  <User class="mr-2 size-4 opacity-70" />
                  Profil konta
                  <Command.Shortcut>⌘P</Command.Shortcut>
                </Command.Item>
                <Command.Item>
                  <CreditCard class="mr-2 size-4 opacity-70" />
                  Płatności i subskrypcje
                  <Command.Shortcut>⌘B</Command.Shortcut>
                </Command.Item>
                <Command.Item>
                  <Settings2 class="mr-2 size-4 opacity-70" />
                  Preferencje systemu
                  <Command.Shortcut>⌘S</Command.Shortcut>
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command.Root>
        </div>

        <div class="rounded-xl border border-border/60 bg-card p-6 shadow-sm flex flex-col items-center justify-center gap-4 text-center">
          <div class="space-y-2">
            <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Search class="size-6 text-primary" />
            </div>
            <h3 class="font-medium">Wersja Modalna (Dialog)</h3>
            <p class="text-sm text-muted-foreground">Idealna do centralnego wyszukiwania w aplikacji.</p>
          </div>
          
          <Button variant="outline" onclick={() => commandDialogOpen = true}>
            Otwórz Command
            <kbd class="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-sans text-[10px] font-medium text-muted-foreground opacity-100">
              <span class="text-xs">⌘</span>J
            </kbd>
          </Button>
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
            <Checkbox.Root bind:checked={termsAccepted} variant="basic">
              Accept terms and conditions
            </Checkbox.Root>
            
            <Checkbox.Root bind:indeterminate={newsletterIndeterminate} variant="basic">
              Enable daily digests
            </Checkbox.Root>

            <Checkbox.Root disabled checked variant="basic">
              Disabled checked state
            </Checkbox.Root>
          </div>
        </div>

        <div class="space-y-6">
          <h3 class="text-sm font-medium text-muted-foreground">Checkbox Group</h3>
          <Checkbox.Group bind:value={selectedFeatures2} class="space-y-4">
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
            Selected: {JSON.stringify(selectedFeatures2)}
          </p>
        </div>

      </div>
    </section>

  </div>

  <Command.Dialog bind:open={commandDialogOpen}>
    <Command.Input placeholder="Szukaj w PaperUI..." />
    <Command.List>
        <Command.Empty>Nie znaleziono takiego polecenia.</Command.Empty>
        
        <Command.Group heading="Zarządzanie">
        <Command.Item onSelect={() => { commandDialogOpen = false; toast.success("Otwieram: Projekty") }}>
            <Frame class="mr-2 size-4 opacity-70" />
            Moje projekty
        </Command.Item>
        <Command.Item onSelect={() => { commandDialogOpen = false; toast.success("Otwieram: Zespół") }}>
            <User class="mr-2 size-4 opacity-70" />
            Zespół i uprawnienia
        </Command.Item>
        </Command.Group>

        <Command.Separator />
        
        <Command.Group heading="Szybkie Akcje">
        <Command.Item onSelect={() => { commandDialogOpen = false; showDefaultToast() }}>
            <Download class="mr-2 size-4 opacity-70" />
            Eksportuj dane
            <Command.Shortcut>⌘E</Command.Shortcut>
        </Command.Item>
        <Command.Item class="text-destructive data-selected:bg-destructive/10 data-selected:text-destructive" onSelect={() => { commandDialogOpen = false; showErrorToast() }}>
            <Trash class="mr-2 size-4 opacity-70" />
            Wyczyść cache
            <Command.Shortcut>⇧⌘⌫</Command.Shortcut>
        </Command.Item>
        </Command.Group>
    </Command.List>
    </Command.Dialog>
</div>