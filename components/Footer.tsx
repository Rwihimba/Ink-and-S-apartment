import Image from "next/image";
import Link from "next/link";
import { WA_LINK } from "./data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F2028",
        color: "rgba(243,236,224,.7)",
        padding: "clamp(56px,7vw,90px) clamp(24px,6vw,120px) 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
          gap: 44,
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: 42,
            }}
          >
            <Image
              src="/assets/logo-white.png"
              alt="Ink & S Apartment Hotel"
              width={1374}
              height={609}
              style={{ height: 42, width: "auto", display: "block" }}
            />
          </Link>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.7,
              marginTop: 16,
              maxWidth: "32ch",
              fontWeight: 300,
            }}
          >
            Boutique apartment living in the heart of Kigali. Your home away from
            home.
          </p>
        </div>

        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: 13,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Explore
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 11,
              fontSize: 14,
              fontWeight: 300,
            }}
          >
            <Link href="/apartments" className="foot-link">
              Apartments
            </Link>
            <Link href="/location" className="foot-link">
              Location
            </Link>
            <Link href="/#gallery" className="foot-link">
              Gallery
            </Link>
            <Link href="/blog" className="foot-link">
              Blog
            </Link>
            <Link href="/faq" className="foot-link">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: 13,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Contact
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 11,
              fontSize: 14,
              fontWeight: 300,
            }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="foot-link"
            >
              WhatsApp · +250 796 707 342
            </a>
            <a href="tel:+250796707342" className="foot-link">
              +250 796 707 342
            </a>
            <a href="mailto:stay@inkands.rw" className="foot-link">
              stay@inkands.rw
            </a>
            <a
              href="https://maps.app.goo.gl/TQHayNzZiVbHdkyEA"
              target="_blank"
              rel="noopener"
              className="foot-link"
            >
              Kigali, Rwanda
            </a>
          </div>
        </div>

        <div>
          <h3
            style={{
              color: "#fff",
              fontSize: 13,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Find Us
          </h3>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              height: 150,
              border: "1px solid rgba(243,236,224,.12)",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Kacyiru,Kigali,Rwanda&output=embed"
              title="Ink & S location"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                filter: "grayscale(.2)",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1360,
          margin: "44px auto 0",
          paddingTop: 26,
          borderTop: "1px solid rgba(243,236,224,.12)",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          fontSize: 12.5,
          fontWeight: 300,
        }}
      >
        <span>© 2026 Ink &amp; S Apartment Hotel · Kigali, Rwanda</span>
        <span>Book direct · Best rate guaranteed</span>
      </div>
    </footer>
  );
}
