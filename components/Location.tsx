import Image from "next/image";
import { ATTRACTIONS } from "./data";

/** "The Neighbourhood" — nearby Kigali landmarks with drive times. */
export default function Location() {
  return (
    <section
      id="attractions"
      style={{
        background: "#F3ECE0",
        padding: "clamp(80px,10vw,140px) clamp(24px,6vw,120px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div className="rvl" style={{ marginBottom: 56, maxWidth: 620 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#A0561F",
              fontWeight: 600,
            }}
          >
            The Neighbourhood
          </span>
          <h2
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(34px,4.4vw,60px)",
              lineHeight: 1.05,
              letterSpacing: "-.01em",
              marginTop: 14,
            }}
          >
            Kigali, right at your doorstep
          </h2>
        </div>

        <div className="grid-6" style={{ display: "grid", gap: 22 }}>
          {ATTRACTIONS.map((a) => (
            <div
              key={a.name}
              className="attr-card rvl"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 16px rgba(22,73,91,.06)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  fill
                  sizes="(max-width:560px) 100vw, (max-width:980px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3
                  style={{
                    fontFamily: "'Lexend',sans-serif",
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: 1.15,
                  }}
                >
                  {a.name}
                </h3>
                <p
                  style={{
                    color: "#A0561F",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: ".02em",
                    marginTop: 8,
                  }}
                >
                  {a.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
