import Image from "next/image";
import { WA_LINK } from "./data";

/** "Contact / Booking" — the closing call-to-action with a WhatsApp reservation. */
export default function Booking() {
  return (
    <section
      id="book"
      style={{
        position: "relative",
        padding: "clamp(90px,11vw,170px) clamp(24px,6vw,120px)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/assets/bedroom-3.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(15,32,40,.86), rgba(22,73,91,.72))",
        }}
      />
      <div
        className="rvl"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Lexend',sans-serif",
            fontWeight: 500,
            color: "#fff",
            fontSize: "clamp(38px,5.4vw,78px)",
            lineHeight: 1.02,
            letterSpacing: "-.01em",
            textWrap: "balance",
          }}
        >
          Ready for your next stay?
        </h2>
        <p
          style={{
            color: "rgba(243,236,224,.9)",
            fontSize: "clamp(16px,1.4vw,20px)",
            lineHeight: 1.7,
            fontWeight: 300,
            marginTop: 22,
            maxWidth: "52ch",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Book directly with us for the best rates, flexible dates and a warm
          Kigali welcome. We&apos;ll take care of the rest.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#A0561F",
              color: "#fff",
              padding: "18px 40px",
              borderRadius: 100,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: ".02em",
              boxShadow: "0 16px 44px rgba(217,138,78,.45)",
            }}
          >
            Reserve Now
          </a>
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
              padding: "18px 40px",
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
