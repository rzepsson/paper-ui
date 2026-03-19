<script lang="ts">
  type TocSection = {
    id: string;
    label: string;
  };

  let { children, data } = $props<{
    children: import("svelte").Snippet;
    data: {
      toc?: TocSection[];
    };
  }>();

  const sections = $derived((data?.toc ?? []) as TocSection[]);
  let activeSection = $state("");

  function scrollToSection(event: MouseEvent, id: string) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  $effect(() => {
    if (typeof window === "undefined" || sections.length === 0) {
      activeSection = "";
      return;
    }

    if (!sections.some((section) => section.id === activeSection)) {
      activeSection = sections[0].id;
    }

    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      if (sections.some((section) => section.id === id)) {
        activeSection = id;
      }
    }

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          activeSection = visibleEntries[0].target.id;
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.15, 0.3, 0.5, 0.8]
      }
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  });
</script>

<div class="relative">
  <div class={sections.length > 0 ? "xl:pr-72" : ""}>
    {@render children()}
  </div>

  {#if sections.length > 0}
    <aside class="fixed right-8 top-24 z-20 hidden w-56 xl:block">
      <p class="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">On this page</p>
      <nav class="border-l border-border/70 pl-4">
        {#each sections as section}
          <a
            href={`#${section.id}`}
            onclick={(event) => scrollToSection(event, section.id)}
            class={`block py-1.5 text-sm transition-colors ${
              activeSection === section.id
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-current={activeSection === section.id ? "location" : undefined}
          >
            {section.label}
          </a>
        {/each}
      </nav>
    </aside>
  {/if}
</div>