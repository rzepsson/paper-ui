<script lang="ts">
	import * as Command from "$lib/components/ui/command";
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge";
  import { Toaster } from "$lib/components/ui/sonner";
  import { toast } from "svelte-sonner";
	import { File, Database, Users, Settings, Plus, Search } from "lucide-svelte";
	import { onMount } from "svelte";

	let cmdOpen = $state(false);

	onMount(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				cmdOpen = !cmdOpen;
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});
</script>

<Toaster position="bottom-right" expand={false} richColors={false} />

<section class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold tracking-tight">Command Menu</h2>
        <Badge variant="outline" class="font-mono">⌘K</Badge>
    </div>

    <Button variant="outline" class="w-full justify-start text-muted-foreground" onclick={() => cmdOpen = true}>
        <Search class="mr-2 size-4" />
        Search database, tables, users...
    </Button>

<Command.Dialog bind:open={cmdOpen}>
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        
        <Command.Group>
            <Command.GroupHeading>Resources</Command.GroupHeading>
            <Command.GroupItems>
                <Command.Item onSelect={() => { toast.info("Navigating to Tables"); cmdOpen = false; }}>
                    <Database class="mr-2 size-4" />
                    <span>Browse Tables</span>
                    <Command.Shortcut>⌘T</Command.Shortcut>
                </Command.Item>
                <Command.Item onSelect={() => { toast.info("Navigating to Files"); cmdOpen = false; }}>
                    <File class="mr-2 size-4" />
                    <span>Storage Buckets</span>
                </Command.Item>
                <Command.Item onSelect={() => { toast.info("Navigating to Auth"); cmdOpen = false; }}>
                    <Users class="mr-2 size-4" />
                    <span>Manage Users</span>
                </Command.Item>
            </Command.GroupItems>
        </Command.Group>

        <Command.Separator />

        <Command.Group>
            <Command.GroupHeading>Actions</Command.GroupHeading>
            <Command.GroupItems>
                <Command.Item>
                    <Plus class="mr-2 size-4" />
                    <span>Create New Table</span>
                </Command.Item>
                <Command.Item>
                    <Settings class="mr-2 size-4" />
                    <span>Project Settings</span>
                    <Command.Shortcut>⌘S</Command.Shortcut>
                </Command.Item>
            </Command.GroupItems>
        </Command.Group>
    </Command.List>
</Command.Dialog>
</section>