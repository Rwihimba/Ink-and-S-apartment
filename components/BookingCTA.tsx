import Link from "next/link";
import { WA_LINK } from "./data";

/** Reusable closing call-to-action. Internal link goes to the booking section. */
export default function BookingCTA({
  title = "Ready for your next stay?",
  text = "Book directly with us for the best rates, flexible dates and a warm Kigali welcome.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section
      style={{
        background: "#16495B",
        padding: "clamp(64px,8vw,110px) clamp(24px,6vw,120px)",
      }}
    >
      <div
        className="rvl"
        style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
      >
        <h2
          style={{
            fontFamily: "'Lexend',sans-serif",
            fontWeight: 500,
            color: "#fff",
            fontSize: "clamp(30px,4vw,52px)",
            lineHeight: 1.05,
            letterSpacing: "-.01em",
            textWrap: "balance",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "rgba(243,236,224,.85)",
            fontSize: "clamp(16px,1.4vw,19px)",
            lineHeight: 1.7,
            fontWeight: 300,
            marginTop: 18,
            maxWidth: "52ch",
            marginInline: "auto",
          }}
        >
          {text}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginTop: 34,
          }}
        >
          <Link
            href="/#book"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#A0561F",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: ".02em",
              boxShadow: "0 16px 44px rgba(217,138,78,.4)",
            }}
          >
            Book Your Stay
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,.08)",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 16,
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,.45)",
            }}
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
