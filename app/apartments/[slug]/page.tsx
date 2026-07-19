import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";
import { apartmentLd, breadcrumbLd } from "@/lib/schema";
import { WA_LINK } from "@/components/data";
import { UNITS, getUnit } from "@/lib/apartments";

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const u = getUnit(slug);
  if (!u) return {};
  const desc = `${u.blurb} A ${u.bedrooms.toLowerCase()} furnished apartment in Kigali — ${u.amenities
    .slice(0, 3)
    .join(", ")
    .toLowerCase()} and more. Book direct with Ink & S.`;
  return {
    title: `${u.name} — Kigali`,
    description: desc.slice(0, 158),
    alternates: { canonical: `/apartments/${u.slug}` },
    openGraph: {
      title: `${u.name} | Ink & S Apartments, Kigali`,
      description: u.blurb,
      url: `/apartments/${u.slug}`,
      images: [u.images[0].src],
    },
  };
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const u = getUnit(slug);
  if (!u) notFound();

  const specs = [
    { label: "Sleeps", value: `${u.guests} guest${u.guests > 1 ? "s" : ""}` },
    { label: "Layout", value: u.bedrooms },
    { label: "Bathroom", value: `${u.bathrooms} en-suite` },
    { label: "View", value: u.view },
  ];

  return (
    <>
      <PageHero
        eyebrow={u.tag}
        title={u.name}
        subtitle={u.blurb}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Apartments", href: "/apartments" },
          { label: u.name, href: `/apartments/${u.slug}` },
        ]}
      />

      <section
        style={{
          padding: "clamp(48px,6vw,88px) clamp(24px,6vw,120px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
      >
        {/* gallery */}
        <div
          className="rvl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            gap: 14,
            marginBottom: "clamp(40px,5vw,72px)",
          }}
        >
          {u.images.map((img, i) => (
            <div
              key={i}
              className="gal-item"
              style={{
                position: "relative",
                aspectRatio: i === 0 ? "16/11" : "4/3",
                gridColumn: i === 0 ? "1 / -1" : undefined,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(22,73,91,.08)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes={i === 0 ? "100vw" : "(max-width:760px) 100vw, 33vw"}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* body + booking rail */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
            gap: "clamp(32px,5vw,64px)",
            alignItems: "start",
          }}
          className="unit-grid"
        >
          <div className="rvl">
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#A0561F",
                fontWeight: 600,
              }}
            >
              The Apartment
            </span>
            <h2
              style={{
                fontFamily: "'Lexend',sans-serif",
                fontWeight: 500,
                fontSize: "clamp(26px,3.2vw,40px)",
                lineHeight: 1.1,
                marginTop: 12,
                marginBottom: 20,
              }}
            >
              Made to feel like home
            </h2>
            {u.description.map((p, i) => (
              <p
                key={i}
                style={{
                  color: "#2A3A40",
                  fontSize: 17,
                  lineHeight: 1.8,
                  fontWeight: 300,
                  marginBottom: 18,
                  maxWidth: "60ch",
                }}
              >
                {p}
              </p>
            ))}

            <h3
              style={{
                fontFamily: "'Lexend',sans-serif",
                fontWeight: 600,
                fontSize: 22,
                margin: "34px 0 18px",
              }}
            >
              What&apos;s included
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "12px 24px",
                padding: 0,
              }}
            >
              {u.amenities.map((a) => (
                <li
                  key={a}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                    fontSize: 15.5,
                    color: "#2A3A40",
                    fontWeight: 300,
                  }}
                >
                  <span style={{ color: "#A0561F", fontWeight: 700 }}>✓</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* sticky booking card */}
          <aside
            className="rvl"
            style={{
              position: "sticky",
              top: 100,
              background: "#fff",
              borderRadius: 22,
              padding: "28px 28px 30px",
              boxShadow: "0 20px 50px rgba(22,73,91,.12)",
              border: "1px solid #EFE9DE",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 22,
              }}
            >
              {specs.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "#66747A",
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#17242A",
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                paddingTop: 20,
                borderTop: "1px solid #EFE9DE",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "'Lexend',sans-serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#16495B",
                }}
              >
                {u.price}
              </span>
              <p
                style={{
                  fontSize: 13,
                  color: "#5A6B71",
                  fontWeight: 300,
                  marginTop: 4,
                }}
              >
                Best rates when you book direct. Message us for dates &amp; a
                tailored quote.
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="btn-primary"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                background: "#A0561F",
                color: "#fff",
                padding: "15px 24px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 600,
                boxShadow: "0 12px 30px rgba(217,138,78,.35)",
              }}
            >
              Check availability
            </a>
            <Link
              href="/#book"
              className="btn-nav"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
                background: "#16495B",
                color: "#fff",
                padding: "15px 24px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Booking &amp; contact
            </Link>
          </aside>
        </div>

        <div style={{ marginTop: "clamp(40px,5vw,64px)" }}>
          <Link
            href="/apartments"
            style={{ color: "#A0561F", fontWeight: 600, fontSize: 15 }}
          >
            ← All apartments
          </Link>
        </div>
      </section>

      <BookingCTA
        title={`Book the ${u.name}`}
        text="Tell us your dates and we'll confirm availability and the best direct rate — usually within the hour."
      />

      <JsonLd
        data={[
          apartmentLd({
            name: u.name,
            slug: u.slug,
            description: u.description.join(" "),
            images: u.images.map((i) => i.src),
            amenities: u.amenities,
          }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Apartments", path: "/apartments" },
            { name: u.name, path: `/apartments/${u.slug}` },
          ]),
        ]}
      />
    </>
  );
}
