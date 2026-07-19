import { UNITS } from "./apartments";
import { POSTS } from "./posts";
import { SITE_URL } from "./site";

/** Every user-facing route, as site-relative paths. */
export function allPaths(): string[] {
  return [
    "/",
    "/apartments",
    "/location",
    "/faq",
    "/blog",
    ...UNITS.map((u) => `/apartments/${u.slug}`),
    ...POSTS.map((p) => `/blog/${p.slug}`),
  ];
}

/** Every route as an absolute URL (for the Indexing API). */
export function allUrls(): string[] {
  return allPaths().map((p) => `${SITE_URL}${p === "/" ? "" : p}`);
}
