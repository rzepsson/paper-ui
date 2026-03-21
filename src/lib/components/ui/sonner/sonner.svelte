<script lang="ts">
    import { Toaster as Sonner, type ToasterProps } from "svelte-sonner";
    import { cn, closeButtonClass } from "$lib/utils";
    import { 
        CircleCheck, 
        CircleX, 
        Info, 
        TriangleAlert, 
        LoaderCircle 
    } from "lucide-svelte";

    let { ...restProps }: ToasterProps = $props();
</script>

<Sonner
    class="toaster group"
    closeButton={true}
    richColors={false}
    expand={false}
    position="bottom-right"
    toastOptions={{
        unstyled: true,
        classes: {
            toast: cn(
                "group flex w-full items-center gap-3 rounded-xl border p-4 pr-14 shadow-sm font-sans text-sm transition-all",
                "bg-card text-foreground border-border/60" 
            ),

            success: "!bg-emerald-600 !text-white !border-emerald-700",
            error: "!bg-destructive !text-white !border-destructive",
            info: "!bg-blue-500 !text-white !border-blue-600",
            warning: "!bg-amber-500 !text-white !border-amber-600",
            
            title: "font-medium",
            description: "text-xs mt-1 opacity-90",
            icon: "shrink-0 [&_svg]:size-5", 

            closeButton: cn(
                "absolute right-2 top-1/2 -translate-y-1/2 size-8 [&_svg]:size-5",
                closeButtonClass
            ),

            actionButton: cn(
                "ml-auto inline-flex items-center justify-center whitespace-nowrap font-sans font-medium transition-all active:scale-[0.92] duration-200 select-none shadow-sm h-8 rounded-lg px-3 text-xs",
                "group-data-[type=default]:bg-primary group-data-[type=default]:text-primary-foreground group-data-[type=default]:hover:bg-primary/90",
                "group-data-[type=success]:bg-white/20 group-data-[type=success]:text-white group-data-[type=success]:hover:bg-white/30",
                "group-data-[type=error]:bg-white/20 group-data-[type=error]:text-white group-data-[type=error]:hover:bg-white/30",
                "group-data-[type=info]:bg-white/20 group-data-[type=info]:text-white group-data-[type=info]:hover:bg-white/30",
                "group-data-[type=warning]:bg-white/20 group-data-[type=warning]:text-white group-data-[type=warning]:hover:bg-white/30"
            ),
            cancelButton: cn(
                "inline-flex items-center justify-center whitespace-nowrap font-sans font-medium transition-all active:scale-[0.92] duration-200 select-none shadow-sm h-8 rounded-lg px-3 text-xs",
                "group-data-[type=default]:bg-muted group-data-[type=default]:text-muted-foreground group-data-[type=default]:hover:bg-muted/80",
                "group-data-[type=success]:bg-black/10 group-data-[type=success]:text-white group-data-[type=success]:hover:bg-black/20",
                "group-data-[type=error]:bg-black/10 group-data-[type=error]:text-white group-data-[type=error]:hover:bg-black/20",
                "group-data-[type=info]:bg-black/10 group-data-[type=info]:text-white group-data-[type=info]:hover:bg-black/20",
                "group-data-[type=warning]:bg-black/10 group-data-[type=warning]:text-white group-data-[type=warning]:hover:bg-black/20"
            )
        },
    }}
    {...restProps}
>
    {#snippet successIcon()}
        <CircleCheck />
    {/snippet}
    
    {#snippet errorIcon()}
        <CircleX />
    {/snippet}
    
    {#snippet infoIcon()}
        <Info />
    {/snippet}
    
    {#snippet warningIcon()}
        <TriangleAlert />
    {/snippet}
    
    {#snippet loadingIcon()}
        <LoaderCircle class="animate-spin text-muted-foreground" />
    {/snippet}
</Sonner>

<style>
    :global([data-sonner-toast] [data-close-button]) {
        color: inherit !important;
    }

    :global([data-sonner-toast][data-type="loading"] [data-close-button]) {
        display: none !important;
    }

    :global([data-sonner-toast][data-type="loading"] [data-icon]) {
        position: absolute !important;
        right: 0.5rem !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        margin: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 2rem !important;
        height: 2rem !important;
    }

    :global([data-sonner-toast][data-type="loading"] [data-content]) {
        margin-left: 0.25rem !important;
    }
</style>