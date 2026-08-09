<script lang="ts">
	import { Pagination as PaginationPrimitive } from "bits-ui";
	import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-svelte";
	import { cn } from "$lib/utils";
	import { Button } from "$lib/components/ui/button";

	let {
		count,
		perPage = 10,
		page = $bindable(1),
		siblingCount = 1,
		class: className = "",
		...restProps
	}: PaginationPrimitive.RootProps = $props();
</script>

<PaginationPrimitive.Root
	{count}
	{perPage}
	bind:page
	{siblingCount}
	class={cn("mx-auto flex w-full justify-center", className)}
	{...restProps}
>
	{#snippet children({ pages })}
		<div class="flex flex-row items-center gap-0.5 rounded-sm bg-muted/50 p-0.5 font-sans select-none border-2 border-border/40">
			
			<PaginationPrimitive.PrevButton>
				{#snippet child({ props })}
					<Button
						{...props}
						variant="ghost"
						class="h-7 w-7 p-0 text-muted-foreground hover:bg-background/50 hover:text-foreground transition-all duration-200"
					>
						<ChevronLeft class="size-3.5" />
						<span class="sr-only">Previous page</span>
					</Button>
				{/snippet}
			</PaginationPrimitive.PrevButton>

			<div class="flex items-center gap-0.5">
				{#each pages as p (p.key)}
					{#if p.type === "page"}
						<PaginationPrimitive.Page page={p}>
							{#snippet child({ props })}
								<Button
									{...props}
									variant="ghost"
									class={cn(
										"m-1 h-7 min-w-7 px-1 text-[12px] transition-all duration-200 ease-out",
										page === p.value 
											? "rounded-sm bg-foreground/10 text-foreground font-semibold ring-1 ring-black/5 dark:ring-white/10" 
											: "text-muted-foreground/80 hover:bg-background/50 hover:text-foreground font-medium"
									)}
								>
									{p.value}
								</Button>
							{/snippet}
						</PaginationPrimitive.Page>
					{:else}
						<div class="flex h-7 w-5 items-center justify-center">
							<MoreHorizontal class="size-3 text-muted-foreground/30" />
						</div>
					{/if}
				{/each}
			</div>

			<PaginationPrimitive.NextButton>
				{#snippet child({ props })}
					<Button
						{...props}
						variant="ghost"
						class="h-7 w-7 p-0 text-muted-foreground hover:bg-background/50 hover:text-foreground transition-all duration-200"
					>
						<ChevronRight class="size-3.5" />
						<span class="sr-only">Next page</span>
					</Button>
				{/snippet}
			</PaginationPrimitive.NextButton>

		</div>
	{/snippet}
</PaginationPrimitive.Root>