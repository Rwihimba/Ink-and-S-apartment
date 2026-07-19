import Image from "next/image";
import { APARTMENTS } from "./data";

/** "Featured Stays" — the four apartments with pricing. */
export default function Pricing() {
  return (
    <section
      id="apartments"
      style={{
        padding: "clamp(80px,10vw,140px) clamp(24px,6vw,120px)",
        maxWidth: 1360,
        margin: "0 auto",
      }}
    >
      <div
        className="rvl"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          marginBottom: 56,
        }}
      >
        <div>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#A0561F",
              fontWeight: 600,
            }}
          >
            Featured Stays
          </span>
          <h2
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(34px,4.4vw,60px)",
              lineHeight: 1.04,
              letterSpacing: "-.01em",
              marginTop: 14,
              maxWidth: "16ch",
            }}
          >
            Four ways to feel at home
          </h2>
        </div>
        <p
          style={{
            color: "#66747A",
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: "40ch",
            fontWeight: 300,
          }}
        >
          Each apartment is fully furnished, quietly elegant, and ready the
          moment you arrive.
        </p>
      </div>

      <div className="grid-4" style={{ display: "grid", gap: 28 }}>
        {APARTMENTS.map((a) => (
          <a
            key={a.name}
            href="#book"
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
                src={a.img}
                alt={a.alt}
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
                {a.tag}
              </span>
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <h3
                style={{
                  fontFamily: "'Lexend',sans-serif",
                  fontWeight: 600,
                  fontSize: 25,
                  lineHeight: 1.1,
                  color: "#17242A",
                }}
              >
                {a.name}
              </h3>
              <p
                style={{
                  color: "#66747A",
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  marginTop: 8,
                  fontWeight: 300,
                  minHeight: 44,
                }}
              >
                {a.blurb}
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
                  {a.price}
                </span>
                <span
                  style={{ fontSize: 13, color: "#A0561F", fontWeight: 600 }}
                >
                  View →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
