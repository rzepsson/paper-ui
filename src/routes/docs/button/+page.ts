import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    toc: [
      { id: "interactive-playground", label: "Interactive Playground" },
      { id: "variant-gallery", label: "Variant Gallery" },
      { id: "api-reference", label: "API Reference" }
    ]
  };
};
