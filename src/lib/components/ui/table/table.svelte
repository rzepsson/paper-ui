<script lang="ts" module>
    export type Column = {
        key: string;
        label: string;
        class?: string;
        sortable?: boolean;
    };

    export type SortConfig = {
        key: string;
        direction: "asc" | "desc";
    } | null;
</script>

<script lang="ts" generics="T extends Record<string, any> & { id: string | number }">
    import { cn } from "$lib/utils";
    import { Checkbox } from "$lib/components/ui/checkbox";
    import { ChevronUp } from "lucide-svelte";
    import { Skeleton } from "$lib/components/ui/skeleton";
    import { ScrollArea } from "$lib/components/ui/scroll-area"; // Importujemy ScrollArea

    let {
        class: className = "",
        columns,
        rows,
        selectionMode = "none",
        variant = "default",
        checkboxVariant = "default",
        selectedKeys = $bindable([]),
        sortConfig = $bindable(null),
        isLoading = false,
        maxHeight = "600px",
        cell,
        onsort,
        ...restProps
    }: {
        class?: string;
        columns: Column[];
        rows: T[];
        selectionMode?: "none" | "single" | "multiple";
        variant?: "default" | "quiet";
        checkboxVariant?: "default" | "basic";
        selectedKeys?: (string | number)[];
        sortConfig?: SortConfig;
        isLoading?: boolean;
        maxHeight?: string;
        cell?: import("svelte").Snippet<[T, Column]>;
        onsort?: (config: SortConfig) => void;
    } = $props();

    // ... logika toggleAll, toggleRow, handleSort bez zmian ...
    let isAllSelected = $derived(rows.length > 0 && selectedKeys.length === rows.length);
    let isIndeterminate = $derived(selectedKeys.length > 0 && selectedKeys.length < rows.length);

    function toggleAll() {
        if (selectionMode !== "multiple") return;
        selectedKeys = isAllSelected ? [] : rows.map((r) => r.id);
    }

    function toggleRow(id: string | number) {
        if (selectionMode === "none") return;
        if (selectionMode === "single") {
            selectedKeys = selectedKeys.includes(id) ? [] : [id];
        } else {
            selectedKeys = selectedKeys.includes(id) 
                ? selectedKeys.filter((k) => k !== id) 
                : [...selectedKeys, id];
        }
    }

    function handleSort(key: string) {
        let newConfig: SortConfig = { key, direction: "asc" };
        if (sortConfig?.key === key) {
            if (sortConfig.direction === "asc") newConfig.direction = "desc";
            else newConfig = null;
        }
        sortConfig = newConfig;
        onsort?.(newConfig);
    }
</script>

<ScrollArea
    {...restProps}
    orientation="both"
    class={cn(
        "w-full",
        variant === "default" && "rounded-sm border border-border/60 bg-card shadow-sm",
        variant === "quiet" && "bg-transparent",
        className
    )}
    style="max-height: {maxHeight};"
>
    <table class="w-full border-collapse text-left text-sm font-sans whitespace-nowrap">
        <thead class="sticky top-0 z-20"> 
            <tr class={cn(
                "border-b border-border/60",
                variant === "default" ? "bg-muted/90 backdrop-blur-md" : "bg-background/90 backdrop-blur-md"
            )}>
                {#if selectionMode !== "none"}
                    <th class="w-12 px-4 py-3 align-middle">
                        {#if selectionMode === "multiple"}
                            <Checkbox 
                                checked={isAllSelected}
                                indeterminate={isIndeterminate}
                                onCheckedChange={toggleAll}
                                variant={checkboxVariant} />
                        {/if}
                    </th>
                {/if}
                {#each columns as col}
                    <th class={cn("px-4 py-3 align-middle font-medium text-muted-foreground", col.class)}>
                        {#if col.sortable}
                            <button 
                                class="group/sort flex items-center gap-1.5 hover:text-foreground transition-colors outline-none"
                                onclick={() => handleSort(col.key)}
                            >
                                {col.label}
                                <div class="relative flex size-3.5 items-center justify-center">
                                    <ChevronUp
                                        class={cn(
                                            "size-3.5 transition-all duration-200 ease-in-out",
                                            !sortConfig || sortConfig.key !== col.key 
                                                ? "opacity-40 group-hover/sort:opacity-50" 
                                                : "opacity-100 text-primary",
                                            sortConfig?.key === col.key && sortConfig.direction === "desc" 
                                                ? "rotate-180" 
                                                : "rotate-0"
                                        )} 
                                    />
                                </div>
                            </button>
                        {:else}
                            {col.label}
                        {/if}
                    </th>
                {/each}
            </tr>
        </thead>

        <tbody class="relative">
            {#if isLoading}
                {#each Array(5) as _}
                    <tr class="border-b border-border/20">
                        {#if selectionMode !== "none"}
                            <td class="px-4 py-4"><Skeleton class="h-4 w-4" /></td>
                        {/if}
                        {#each columns as col}
                            <td class="px-4 py-4"><Skeleton class="h-4 w-full max-w-28" /></td>
                        {/each}
                    </tr>
                {/each}
            {:else if rows.length === 0}
                <tr>
                    <td colspan={columns.length + (selectionMode !== "none" ? 1 : 0)} class="p-12 text-center text-muted-foreground font-sans">
                        No data to display.
                    </td>
                </tr>
            {:else}
                {#each rows as row (row.id)}
                    {@const isSelected = selectedKeys.includes(row.id)}
                    <tr
                        class={cn(
                            "border-b border-border/40 transition-colors duration-150 font-sans",
                            selectionMode !== "none" && "cursor-pointer",
                            !isSelected && "hover:bg-muted/40",
                            isSelected && "bg-primary/5 hover:bg-primary/10",
                            variant === "quiet" && "border-b-border/30"
                        )}
                        onclick={() => toggleRow(row.id)}
                    >
                        {#if selectionMode !== "none"}
                            <td class="w-12 px-4 py-3 align-middle" onclick={(e) => e.stopPropagation()}>
                                <Checkbox checked={isSelected} onCheckedChange={() => toggleRow(row.id)} variant={checkboxVariant} />
                            </td>
                        {/if}

                        {#each columns as col}
                            <td class={cn("px-4 py-3 align-middle text-foreground/90", col.class)} onclick={(e) => col.key === 'actions' && e.stopPropagation()}>
                                {#if cell}{@render cell(row, col)}{:else}{row[col.key]}{/if}
                            </td>
                        {/each}
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</ScrollArea>