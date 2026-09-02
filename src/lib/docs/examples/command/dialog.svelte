<script lang="ts">
	import * as Command from "$lib/components/ui/command";
	import { Button } from "$lib/components/ui/button";
	import { Download, Frame, Trash2, User } from "lucide-svelte";
	import { toast } from "svelte-sonner";

	let open = $state(false);

	$effect(() => {
		function onKeydown(event: KeyboardEvent) {
			if (event.key === "j" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				open = !open;
			}
		}
		document.addEventListener("keydown", onKeydown);
		return () => document.removeEventListener("keydown", onKeydown);
	});

	function run(message: string) {
		open = false;
		toast.success(message);
	}
</script>

<Button variant="outline" onclick={() => (open = true)}>
	Open command palette
	<kbd class="ml-1 rounded border border-border/70 bg-muted px-1.5 py-0.5 font-mono text-[10px]">
		⌘J
	</kbd>
</Button>

<Command.Dialog bind:open>
	<Command.Input placeholder="Search paperui..." />
	<Command.List>
		<Command.Empty>No such command.</Command.Empty>

		<Command.Group heading="Manage">
			<Command.Item onSelect={() => run("Opening projects")}>
				<Frame class="size-4 opacity-70" />
				My projects
			</Command.Item>
			<Command.Item onSelect={() => run("Opening team")}>
				<User class="size-4 opacity-70" />
				Team and permissions
			</Command.Item>
		</Command.Group>

		<Command.Separator />

		<Command.Group heading="Quick actions">
			<Command.Item onSelect={() => run("Export started")}>
				<Download class="size-4 opacity-70" />
				Export data
				<Command.Shortcut>⌘E</Command.Shortcut>
			</Command.Item>
			<Command.Item
				class="text-destructive data-selected:bg-destructive/10 data-selected:text-destructive data-selected:outline-destructive"
				onSelect={() => run("Cache cleared")}
			>
				<Trash2 class="size-4 opacity-70" />
				Clear cache
				<Command.Shortcut>⇧⌘⌫</Command.Shortcut>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
