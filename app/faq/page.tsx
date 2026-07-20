import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import { FAQS_FULL } from "@/components/data";

export const metadata: Metadata = {
  title: "FAQ — Booking, Check-in & Payments",
  description:
    "Answers to common questions about staying with Ink & S in Kigali: check-in, Mobile Money & card payments, airport pickup, WiFi speed, security and long stays.",
  alternates: { canonical: "/faq" },
  openGraph: {
      siteName: "Ink & S Apartment Hotel",
    title: "Frequently Asked Questions | Ink & S Apartment Hotel, Kigali",
    description:
      "Check-in, payments (MoMo & cards), airport pickup, WiFi, security and more — everything guests ask before booking in Kigali.",
    url: "/faq",
    images: ["/assets/hero-sunset.jpg"],
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to Know"
        title="Frequently asked questions"
        subtitle="Everything guests ask before booking a furnished apartment in Kigali — check-in, payments, airport pickup, WiFi, security and more."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <section
        style={{
          padding: "clamp(56px,7vw,96px) clamp(24px,6vw,120px)",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div className="rvl">
          <Accordion items={FAQS_FULL} />
        </div>

        <p
          style={{
            marginTop: 40,
            color: "#5A6B71",
            fontSize: 16,
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Still have a question?{" "}
          <a
            href="https://wa.me/250784725226"
            target="_blank"
            rel="noopener"
            style={{ color: "#A0561F", fontWeight: 600 }}
          >
            Message us on WhatsApp
          </a>{" "}
          — we usually reply within the hour.
        </p>
      </section>

      <BookingCTA />

      <JsonLd
        data={[
          faqLd(FAQS_FULL, "faqpage"),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
    </>
  );
}
