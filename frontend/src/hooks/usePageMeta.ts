import { useEffect } from "react";
import { site } from "../data/site";

// Sets the document title and meta description for the current page.
export const usePageMeta = (title?: string, description?: string) => {
  useEffect(() => {
    document.title = title
      ? `${title} | ${site.name}`
      : `${site.name} | Software, Cloud & AI Services`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description ?? site.description);
  }, [title, description]);
};
