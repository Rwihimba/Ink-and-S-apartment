import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { UNITS } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Furnished Apartments in Kigali",
  description:
    "Four fully furnished apartments for rent in Kigali — from a signature executive suite to a great-value studio. Photos, amenities and pricing for each unit.",
  alternates: { canonical: "/apartments" },
  openGraph: {
    title: "Furnished Apartments for Rent in Kigali | Ink & S",
    description:
      "Four fully furnished apartments in Kigali — photos, amenities and pricing for each unit.",
    url: "/apartments",
    images: ["/assets/living-1.jpg"],
  },
};

export default function ApartmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Apartments"
        title="Fully furnished apartments in Kigali"
        subtitle="Four ways to feel at home — each fully furnished, quietly elegant and ready the moment you arrive. Explore every unit's photos, amenities and pricing."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Apartments", href: "/apartments" },
        ]}
      />

      <section
        style={{
          padding: "clamp(64px,8vw,110px) clamp(24px,6vw,120px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
      >
        <div
          className="grid-4"
          style={{ display: "grid", gap: 28 }}
        >
          {UNITS.map((u) => (
            <Link
              key={u.slug}
              href={`/apartments/${u.slug}`}
              className="apt-card rvl"
              style={{
                display: "block",
                background: "#fff",
                borderRadius: 22,
                overflow: "hidden",
                boxShadow: "0 2px 18px rgba(22,73,91,.06)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={u.images[0].src}
                  alt={u.images[0].alt}
                  fill
                  sizes="(max-width:560px) 100vw, (max-width:980px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "rgba(251,249,245,.92)",
                    color: "#16495B",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".04em",
                    padding: "7px 13px",
                    borderRadius: 100,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {u.tag}
                </span>
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <h2
                  style={{
                    fontFamily: "'Lexend',sans-serif",
                    fontWeight: 600,
                    fontSize: 23,
                    lineHeight: 1.1,
                    color: "#17242A",
                  }}
                >
                  {u.name}
                </h2>
                <p
                  style={{
                    color: "#5A6B71",
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    marginTop: 8,
                    fontWeight: 300,
                    minHeight: 44,
                  }}
                >
                  {u.blurb}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 20,
                    paddingTop: 18,
                    borderTop: "1px solid #EFE9DE",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      color: "#16495B",
                      fontWeight: 600,
                      letterSpacing: ".02em",
                    }}
                  >
                    {u.price}
                  </span>
                  <span
                    style={{ fontSize: 13, color: "#A0561F", fontWeight: 600 }}
                  >
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BookingCTA />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Apartments", path: "/apartments" },
        ])}
      />
    </>
  );
}
