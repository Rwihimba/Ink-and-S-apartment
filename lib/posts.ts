export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  image: string;
  imageAlt: string;
  tag: string;
};

/** Ordered newest-first. Content lives in content/blog/<slug>.mdx */
export const POSTS: Post[] = [
  {
    slug: "where-to-stay-in-kigali-neighborhood-guide",
    title: "Where to Stay in Kigali: A Neighborhood Guide",
    description:
      "Kacyiru, Nyarutarama, Kimihurura or the city centre? A practical guide to Kigali's neighborhoods so you pick the right base for your stay.",
    date: "2026-07-02",
    readingTime: "7 min read",
    image: "/assets/hero-sunset.jpg",
    imageAlt: "Kigali skyline at sunset from an Ink & S apartment",
    tag: "Neighborhood Guide",
  },
  {
    slug: "furnished-apartment-vs-hotel-kigali-cost-comparison",
    title: "Furnished Apartment vs Hotel in Kigali: Cost Comparison",
    description:
      "What actually costs more in Kigali — a furnished apartment or a hotel? A clear breakdown of nightly rates, hidden extras and long-stay value.",
    date: "2026-06-24",
    readingTime: "8 min read",
    image: "/assets/living-1.jpg",
    imageAlt: "Open-plan living space in a furnished Kigali apartment",
    tag: "Cost & Value",
  },
  {
    slug: "business-travelers-guide-to-kigali",
    title: "A Business Traveler's Guide to Kigali",
    description:
      "WiFi, transport, meeting venues, SIM cards and where to stay — everything a business traveler needs to work smoothly from Kigali.",
    date: "2026-06-12",
    readingTime: "9 min read",
    image: "/assets/bedroom-3.jpg",
    imageAlt: "Executive apartment workspace at Ink & S in Kigali",
    tag: "Business Travel",
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
