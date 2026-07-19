import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Kigali Stay & Travel Guides",
  description:
    "Practical guides to staying and working in Kigali: where to stay, furnished apartment vs hotel costs, and a business traveler's guide to the city.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Ink & S Blog — Kigali Stay & Travel Guides",
    description:
      "Where to stay in Kigali, apartment vs hotel costs, and a business traveler's guide to the city.",
    url: "/blog",
    images: ["/assets/hero-sunset.jpg"],
  },
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Kigali stay & travel guides"
        subtitle="Local, practical advice for making the most of Kigali — where to stay, what things cost, and how to work smoothly while you're here."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section
        style={{
          padding: "clamp(56px,7vw,96px) clamp(24px,6vw,120px)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
            gap: 28,
          }}
        >
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="apt-card rvl"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 2px 18px rgba(22,73,91,.06)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width:760px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "rgba(251,249,245,.92)",
                    color: "#16495B",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".04em",
                    padding: "6px 12px",
                    borderRadius: 100,
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <div
                style={{
                  padding: "24px 24px 28px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontSize: 12.5,
                    color: "#66747A",
                    fontWeight: 400,
                    marginBottom: 10,
                  }}
                >
                  {fmtDate(p.date)} · {p.readingTime}
                </div>
                <h2
                  style={{
                    fontFamily: "'Lexend',sans-serif",
                    fontWeight: 600,
                    fontSize: 21,
                    lineHeight: 1.22,
                    color: "#17242A",
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    color: "#5A6B71",
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    marginTop: 10,
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {p.description}
                </p>
                <span
                  style={{
                    fontSize: 14,
                    color: "#A0561F",
                    fontWeight: 600,
                    marginTop: 18,
                  }}
                >
                  Read guide →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BookingCTA />

      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
