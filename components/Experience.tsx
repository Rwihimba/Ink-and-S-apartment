import Image from "next/image";
import { LIFESTYLE } from "./data";

/** "The Experience" — lifestyle list beside a portrait image with a rating badge. */
export default function Experience() {
  return (
    <section
      style={{
        padding: "clamp(80px,10vw,150px) clamp(24px,6vw,120px)",
        maxWidth: 1360,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: "clamp(40px,5vw,80px)",
          alignItems: "center",
        }}
      >
        <div className="rvl" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "4/5",
              boxShadow: "0 40px 80px rgba(22,73,91,.18)",
            }}
          >
            <Image
              src="/assets/living-2.jpg"
              alt="Guest relaxing in a light-filled Ink & S apartment in Kigali"
              fill
              sizes="(max-width:760px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -26,
              right: -10,
              background: "#FBF9F5",
              padding: "22px 28px",
              borderRadius: 18,
              boxShadow: "0 20px 50px rgba(22,73,91,.14)",
              maxWidth: 220,
            }}
          >
            <span
              style={{
                fontFamily: "'Lexend',sans-serif",
                fontSize: 38,
                fontWeight: 600,
                color: "#16495B",
                lineHeight: 1,
              }}
            >
              4.9
            </span>
            <div
              style={{
                color: "#A0561F",
                fontSize: 13,
                letterSpacing: "2px",
                marginTop: 2,
              }}
            >
              ★★★★★
            </div>
            <p
              style={{
                fontSize: 12,
                color: "#66747A",
                marginTop: 6,
                fontWeight: 300,
              }}
            >
              Loved by guests visiting for work &amp; leisure
            </p>
          </div>
        </div>

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
            The Experience
          </span>
          <h2
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px,4vw,56px)",
              lineHeight: 1.06,
              letterSpacing: "-.01em",
              marginTop: 14,
              maxWidth: "15ch",
            }}
          >
            More than a place to sleep
          </h2>
          <p
            style={{
              color: "#66747A",
              fontSize: 17,
              lineHeight: 1.75,
              marginTop: 20,
              fontWeight: 300,
              maxWidth: "44ch",
            }}
          >
            Ink &amp; S is designed around the rhythm of your day — from focused
            mornings to slow, peaceful evenings above the city.
          </p>
          <div
            style={{ marginTop: 34, display: "flex", flexDirection: "column" }}
          >
            {LIFESTYLE.map((l) => (
              <div
                key={l.n}
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "baseline",
                  padding: "16px 0",
                  borderBottom: "1px solid #EFE9DE",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lexend',sans-serif",
                    color: "#A0561F",
                    fontSize: 17,
                    fontWeight: 600,
                    minWidth: 26,
                  }}
                >
                  {l.n}
                </span>
                <p
                  style={{
                    fontSize: 16.5,
                    lineHeight: 1.5,
                    color: "#2A3A40",
                  }}
                >
                  {l.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
