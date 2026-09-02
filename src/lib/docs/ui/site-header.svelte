<script lang="ts">
	import { page } from "$app/state";
	import { Github, Menu, PanelLeftClose, PanelLeftOpen } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import * as Sheet from "$lib/components/ui/sheet";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import { cn } from "$lib/utils";
	import { sidebar } from "$lib/docs/sidebar.svelte";
	import ThemePanel from "./theme-panel.svelte";
	import SearchCommand from "./search-command.svelte";
	import SidebarNav from "./sidebar-nav.svelte";
	import Logo from "./logo.svelte";

	let mobileNavOpen = $state(false);

	const inDocs = $derived((page.url.pathname as string).startsWith("/docs"));
</script>

<header
	class="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl supports-backdrop-filter:bg-background/70"
>
	<div
		class={cn(
			"mx-auto flex h-14 w-full items-center gap-2 px-6",
			inDocs ? "max-w-440 px-5 md:px-6" : "max-w-6xl"
		)}
	>
		<Sheet.Root bind:open={mobileNavOpen}>
			<Sheet.Trigger>
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon" class="lg:hidden" aria-label="Open navigation">
						<Menu />
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content side="left" class="w-72 p-0">
				<Sheet.Header class="px-6 pt-6">
					<Sheet.Title>Navigation</Sheet.Title>
				</Sheet.Header>
				<ScrollArea class="mt-4 min-h-0 flex-1" viewportClass="px-6 pb-8">
					<SidebarNav onnavigate={() => (mobileNavOpen = false)} />
				</ScrollArea>
			</Sheet.Content>
		</Sheet.Root>

		{#if inDocs}
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							size="icon"
							class="hidden lg:inline-flex"
							onclick={() => sidebar.toggle()}
							aria-label={sidebar.open ? "Hide the sidebar" : "Show the sidebar"}
							aria-expanded={sidebar.open}
						>
							{#if sidebar.open}
								<PanelLeftClose />
							{:else}
								<PanelLeftOpen />
							{/if}
						</Button>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content>{sidebar.open ? "Hide the sidebar" : "Show the sidebar"}</Tooltip.Content>
			</Tooltip.Root>
		{/if}

		<a
			href="/"
			class="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			<Logo class="size-6" />
			<span class="text-[0.95rem] font-semibold tracking-tight">paperui</span>
		</a>

		<nav class="hidden flex-1 justify-center md:flex" aria-label="Main">

		</nav>

		<div class="ml-auto flex items-center gap-2 md:ml-0">
			<SearchCommand class="w-9 justify-center px-0 sm:w-44 sm:justify-start sm:px-3" />
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/paperui/paperui"
				target="_blank"
				rel="noreferrer"
				aria-label="paperui on GitHub"
			>
				<Github />
			</Button>
			<ThemePanel />
		</div>
	</div>
</header>
