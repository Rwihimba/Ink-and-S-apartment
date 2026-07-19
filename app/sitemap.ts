import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { UNITS } from "@/lib/apartments";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/assets/hero-sunset.jpg`,
        `${SITE_URL}/assets/living-1.jpg`,
        `${SITE_URL}/assets/bedroom-3.jpg`,
      ],
    },
    { url: `${SITE_URL}/apartments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/location`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const unitPages: MetadataRoute.Sitemap = UNITS.map((u) => ({
    url: `${SITE_URL}/apartments/${u.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}${u.images[0].src}`],
  }));

  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
    images: [`${SITE_URL}${p.image}`],
  }));

  return [...staticPages, ...unitPages, ...postPages];
}
