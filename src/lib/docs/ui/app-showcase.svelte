<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import { Input } from "$lib/components/ui/input";
	import { Table } from "$lib/components/ui/table";
	import { Pagination } from "$lib/components/ui/pagination";
	import * as Tabs from "$lib/components/ui/tabs";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import * as Sheet from "$lib/components/ui/sheet";
	import { Label } from "$lib/components/ui/label";
	import { Switch } from "$lib/components/ui/switch";
	import {
		Download,
		FileText,
		MoreVertical,
		Plus,
		Search,
		SlidersHorizontal,
		Trash2
	} from "lucide-svelte";
	import { toast } from "svelte-sonner";

	type Asset = {
		id: string;
		name: string;
		kind: string;
		size: string;
		status: "Ready" | "Pending" | "Failed";
		[key: string]: string;
	};

	const assets: Asset[] = [
		{ id: "1", name: "brand-guidelines.pdf", kind: "Document", size: "2.4 MB", status: "Ready" },
		{ id: "2", name: "logo-primary.svg", kind: "Vector", size: "124 KB", status: "Ready" },
		{ id: "3", name: "q3-forecast.xlsx", kind: "Sheet", size: "4.1 MB", status: "Pending" },
		{ id: "4", name: "hero-render.png", kind: "Image", size: "8.7 MB", status: "Failed" }
	];

	const columns = [
		{ key: "name", label: "Name", sortable: true },
		{ key: "kind", label: "Kind", sortable: true },
		{ key: "size", label: "Size", class: "text-right" },
		{ key: "status", label: "Status" },
		{ key: "actions", label: "" }
	];

	let selected = $state<(string | number)[]>(["2"]);
	let sort = $state<any>(null);
	let query = $state("");
	let page = $state(1);
	let settingsOpen = $state(false);
	let autoSync = $state(true);

	const tone = (status: Asset["status"]) =>
		status === "Ready" ? "success" : status === "Pending" ? "warning" : "destructive";

	const rows = $derived(
		assets.filter((asset) => asset.name.toLowerCase().includes(query.trim().toLowerCase()))
	);
</script>

<div class="overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl">
	<div class="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-2.5">
		<div class="flex gap-1.5">
			<span class="size-2.5 rounded-full bg-destructive/60"></span>
			<span class="size-2.5 rounded-full bg-amber-500/60"></span>
			<span class="size-2.5 rounded-full bg-emerald-500/60"></span>
		</div>
		<p class="ml-2 font-mono text-[11px] text-muted-foreground">assets — workspace</p>
	</div>

	<div class="p-5 sm:p-6">
		<div class="flex flex-wrap items-center justify-between gap-3">
			<div>
				<h3 class="text-base font-semibold tracking-tight">Assets</h3>
				<p class="text-xs text-muted-foreground">{rows.length} of {assets.length} files</p>
			</div>

			<div class="flex items-center gap-2">
				<div class="relative">
					<Search
						class="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
					/>
					<Input bind:value={query} placeholder="Filter" class="h-8 w-36 pl-8 text-xs sm:w-44" />
				</div>

				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<Button
								{...props}
								variant="outline"
								size="icon"
								class="size-8"
								aria-label="Workspace settings"
								onclick={() => (settingsOpen = true)}
							>
								<SlidersHorizontal />
							</Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content>Workspace settings</Tooltip.Content>
				</Tooltip.Root>

				<Button size="sm" class="h-8" onclick={() => toast.success("Upload started")}>
					<Plus />
					Upload
				</Button>
			</div>
		</div>

		<Tabs.Root value="all" class="mt-4">
			<Tabs.List>
				<Tabs.Trigger value="all">
					All
					<Badge variant="secondary" class="ml-2 h-4 px-1 text-[10px]">{assets.length}</Badge>
				</Tabs.Trigger>
				<Tabs.Trigger value="shared">Shared</Tabs.Trigger>
				<Tabs.Trigger value="trash" disabled>Trash</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="all">
				<Table
					{columns}
					{rows}
					selectionMode="multiple"
					bind:selectedKeys={selected}
					bind:sortConfig={sort}
					maxHeight="none"
				>
					{#snippet cell(row, col)}
						{#if col.key === "name"}
							<span class="flex items-center gap-2 font-medium">
								<FileText class="size-4 shrink-0 opacity-40" />
								{row.name}
							</span>
						{:else if col.key === "status"}
							<Badge variant={tone(row.status)}>{row.status}</Badge>
						{:else if col.key === "actions"}
							<div class="flex justify-end">
								<DropdownMenu.Root>
									<DropdownMenu.Trigger>
										{#snippet child({ props })}
											<Button
												{...props}
												variant="ghost"
												size="icon"
												class="size-7"
												aria-label={`Actions for ${row.name}`}
											>
												<MoreVertical />
											</Button>
										{/snippet}
									</DropdownMenu.Trigger>
									<DropdownMenu.Content align="end" class="w-44">
										<DropdownMenu.Item onSelect={() => toast("Download started")}>
											<Download class="size-4 opacity-70" />
											Download
										</DropdownMenu.Item>
										<DropdownMenu.Separator class="my-1" />
										<DropdownMenu.Item
											class="text-destructive data-highlighted:bg-destructive/10 data-highlighted:text-destructive data-highlighted:outline-destructive"
											onSelect={() => toast.error(`${row.name} deleted`)}
										>
											<Trash2 class="size-4 opacity-70" />
											Delete
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Root>
							</div>
						{:else}
							<span class="text-muted-foreground">{row[col.key]}</span>
						{/if}
					{/snippet}
				</Table>

				<div class="mt-4 flex flex-wrap items-center justify-between gap-3">
					<p class="text-xs text-muted-foreground">
						{selected.length} selected
					</p>
					<Pagination count={40} perPage={4} bind:page />
				</div>
			</Tabs.Content>

			<Tabs.Content value="shared">
				<div
					class="rounded-lg border border-dashed border-border/60 p-10 text-center text-sm text-muted-foreground"
				>
					Nothing shared with you yet.
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>

<Sheet.Root bind:open={settingsOpen}>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Workspace settings</Sheet.Title>
			<Sheet.Description>These apply to every asset in the workspace.</Sheet.Description>
		</Sheet.Header>

		<div class="flex-1 space-y-6 py-8">
			<div class="space-y-2">
				<Label for="showcase-name">Workspace name</Label>
				<Input id="showcase-name" value="Acme design" />
			</div>

			<div class="flex items-center justify-between gap-6">
				<div>
					<Label for="showcase-sync" class="cursor-pointer">Automatic sync</Label>
					<p class="mt-0.5 text-xs text-muted-foreground">Push changes as soon as they are saved.</p>
				</div>
				<Switch id="showcase-sync" bind:checked={autoSync} />
			</div>
		</div>

		<Sheet.Footer>
			<Sheet.Close>
				{#snippet child({ props })}
					<Button {...props} class="w-full sm:w-auto">Done</Button>
				{/snippet}
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
