<script lang="ts">
	import SiteHeader from "$lib/docs/ui/site-header.svelte";
	import SidebarNav from "$lib/docs/ui/sidebar-nav.svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Toaster } from "$lib/components/ui/sonner";
	import { sidebar } from "$lib/docs/sidebar.svelte";

	let { children } = $props();
</script>

<div class="min-h-screen bg-background font-sans text-foreground">
	<SiteHeader />

	<div class="mx-auto flex w-full max-w-440">
		<aside
			class="sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-r border-border/60 transition-[width] duration-200 lg:block"
			class:w-72={sidebar.open}
			class:w-0={!sidebar.open}
			aria-hidden={!sidebar.open}
		>
			{#if sidebar.open}
				<ScrollArea class="h-full" viewportClass="px-6 py-8">
					<SidebarNav />
				</ScrollArea>
			{/if}
		</aside>

		<main class="min-w-0 flex-1 px-5 md:px-10 xl:px-14">
			{@render children()}
		</main>
	</div>
</div>

<Toaster />
