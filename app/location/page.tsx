import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { ATTRACTIONS } from "@/components/data";

export const metadata: Metadata = {
  title: "Location — Staying in Kacyiru, Kigali",
  description:
    "Ink & S sits in Kacyiru/Gishushu, one of Kigali's calmest, most central districts — 12 minutes from the airport and minutes from the Convention Centre, Kigali Heights and BK Arena.",
  alternates: { canonical: "/location" },
  openGraph: {
    title: "Where We Are — Kacyiru, Kigali | Ink & S Apartments",
    description:
      "A calm, central Kigali base: 12 minutes to the airport, minutes to the Convention Centre, Kigali Heights, BK Arena, restaurants and transport.",
    url: "/location",
    images: ["/assets/hero-sunset.jpg"],
  },
};

const label = {
  fontSize: 12,
  letterSpacing: ".28em",
  textTransform: "uppercase" as const,
  color: "#A0561F",
  fontWeight: 600,
};

const h2 = {
  fontFamily: "'Lexend',sans-serif",
  fontWeight: 500,
  fontSize: "clamp(28px,3.6vw,46px)",
  lineHeight: 1.08,
  letterSpacing: "-.01em",
  marginTop: 12,
};

const transport = [
  {
    title: "Kigali International Airport",
    text: "About a 12-minute drive. We can arrange a trusted driver to meet your flight for a fixed fare — just share your arrival details.",
  },
  {
    title: "Moto-taxis",
    text: "Kigali's fastest way to get around. Hail one on the street or book through the Move or Yego Moto apps — most cross-town trips are a few minutes and a couple of dollars.",
  },
  {
    title: "Ride-hailing & cabs",
    text: "Yego Cabs and VW Move offer metered, app-based cars across the city — handy for meetings, evenings out or airport runs in comfort.",
  },
  {
    title: "On foot",
    text: "Simba Center is a one-minute hop for groceries and essentials, and the leafy Kacyiru streets are calm and walkable day and night.",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="The Neighbourhood"
        title="Staying in Kacyiru, Kigali"
        subtitle="A calm, green and central district — close to business, diplomacy and dining, yet quiet enough for a proper night's sleep. Here's what's around you."
        image="/assets/hero-sunset.jpg"
        imageAlt="Kigali skyline at dusk near the Ink & S apartment in Kacyiru"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Location", href: "/location" },
        ]}
      />

      {/* intro */}
      <section
        style={{
          padding: "clamp(56px,7vw,100px) clamp(24px,6vw,120px) clamp(20px,3vw,32px)",
          maxWidth: 820,
          margin: "0 auto",
        }}
      >
        <div className="rvl">
          <span style={label}>Kacyiru &amp; Gishushu</span>
          <h2 style={h2}>Central, calm and beautifully connected</h2>
          <p
            style={{
              color: "#2A3A40",
              fontSize: 18,
              lineHeight: 1.8,
              fontWeight: 300,
              marginTop: 20,
            }}
          >
            Ink &amp; S is based in Kacyiru/Gishushu, one of Kigali&apos;s most
            established neighbourhoods and home to embassies, government offices
            and quiet residential streets. It puts you minutes from the
            city&apos;s business and events hubs while keeping you away from the
            noise — the best of both worlds for work and rest.
          </p>
        </div>
      </section>

      {/* distances */}
      <section
        style={{
          padding: "clamp(24px,3vw,40px) clamp(24px,6vw,120px) clamp(56px,7vw,90px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
      >
        <div className="rvl" style={{ maxWidth: 620, marginBottom: 40 }}>
          <span style={label}>Getting Around</span>
          <h2 style={h2}>What&apos;s nearby</h2>
        </div>
        <div
          className="grid-6"
          style={{ display: "grid", gap: 16 }}
        >
          {ATTRACTIONS.map((a) => (
            <div
              key={a.name}
              className="rvl"
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "22px 24px",
                boxShadow: "0 2px 14px rgba(22,73,91,.06)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span
                style={{
                  color: "#A0561F",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: ".02em",
                }}
              >
                {a.time}
              </span>
              <h3
                style={{
                  fontFamily: "'Lexend',sans-serif",
                  fontWeight: 600,
                  fontSize: 19,
                  lineHeight: 1.2,
                  color: "#17242A",
                }}
              >
                {a.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* map */}
      <section
        style={{
          padding: "0 clamp(24px,6vw,120px) clamp(56px,7vw,90px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
      >
        <div
          className="rvl"
          style={{
            borderRadius: 22,
            overflow: "hidden",
            height: "clamp(320px,45vw,520px)",
            boxShadow: "0 24px 60px rgba(22,73,91,.14)",
            border: "1px solid #EFE9DE",
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=Kacyiru,Kigali,Rwanda&output=embed"
            title="Ink & S location in Kacyiru, Kigali"
            loading="lazy"
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </div>
      </section>

      {/* dining */}
      <section
        style={{
          background: "#F3ECE0",
          padding: "clamp(56px,7vw,100px) clamp(24px,6vw,120px)",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }} className="rvl">
          <span style={label}>Eating &amp; Drinking</span>
          <h2 style={h2}>Restaurants &amp; cafés</h2>
          <p
            style={{
              color: "#2A3A40",
              fontSize: 18,
              lineHeight: 1.8,
              fontWeight: 300,
              marginTop: 20,
            }}
          >
            You&apos;re a short hop from Kigali Heights and the Convention Centre
            precinct, where you&apos;ll find cafés, coffee roasters and Rwandan,
            Indian, Asian and international restaurants. Simba Center next door
            covers groceries and quick bites, and the wider Kacyiru–Kimihurura
            strip is packed with lounges and local favourites for an easy dinner
            after work.
          </p>
        </div>
      </section>

      {/* transport */}
      <section
        style={{
          padding: "clamp(56px,7vw,100px) clamp(24px,6vw,120px)",
          maxWidth: 1360,
          margin: "0 auto",
        }}
      >
        <div className="rvl" style={{ maxWidth: 620, marginBottom: 40 }}>
          <span style={label}>Transport</span>
          <h2 style={h2}>Easy to arrive, easy to explore</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            gap: "clamp(20px,3vw,32px)",
          }}
        >
          {transport.map((t) => (
            <div key={t.title} className="rvl">
              <h3
                style={{
                  fontFamily: "'Lexend',sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#16495B",
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  color: "#2A3A40",
                  fontSize: 16,
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginTop: 10,
                  maxWidth: "42ch",
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA
        title="Stay in the heart of Kigali"
        text="Book a calm, central base minutes from the airport, the Convention Centre and everything you came to Kigali for."
      />

      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ])}
      />
    </>
  );
}
