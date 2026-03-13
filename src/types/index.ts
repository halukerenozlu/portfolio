import type { CollectionEntry } from "astro:content";

export interface LayoutProps {
  title?: string;
  description?: string;
}

export interface ProjectsSectionProps {
  projects: CollectionEntry<"projects">[];
}
