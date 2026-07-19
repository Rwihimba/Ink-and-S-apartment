import Image from "next/image";
import { BENEFITS } from "./data";

/** "Why Stay With Us" — benefits grid + complimentary breakfast block. */
export default function Amenities() {
  return (
    <section
      id="why"
      style={{
        background: "#16495B",
        color: "#F3ECE0",
        padding: "clamp(80px,10vw,140px) clamp(24px,6vw,120px)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          className="rvl"
          style={{
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto 64px",
          }}
        >
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#E9A66B",
              fontWeight: 600,
            }}
          >
            Why Stay With Us
          </span>
          <h2
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(34px,4.4vw,60px)",
              lineHeight: 1.06,
              letterSpacing: "-.01em",
              marginTop: 14,
              color: "#fff",
            }}
          >
            Everything considered, so you can simply arrive
          </h2>
        </div>

        <div
          className="grid-6"
          style={{
            display: "grid",
            gap: 1,
            background: "rgba(243,236,224,.14)",
            borderRadius: 22,
            overflow: "hidden",
          }}
        >
          {BENEFITS.map((b) => (
            <div
              key={b.num}
              className="rvl benefit-cell"
              style={{ background: "#16495B", padding: "38px 34px" }}
            >
              <span
                style={{
                  fontFamily: "'Lexend',sans-serif",
                  fontSize: 20,
                  color: "#E9A66B",
                  fontWeight: 600,
                }}
              >
                {b.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Lexend',sans-serif",
                  fontWeight: 600,
                  fontSize: 26,
                  marginTop: 14,
                  color: "#fff",
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  color: "rgba(243,236,224,.72)",
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  marginTop: 10,
                  fontWeight: 300,
                }}
              >
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rvl"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: "clamp(32px,4vw,64px)",
            alignItems: "center",
            marginTop: "clamp(56px,6vw,88px)",
            paddingTop: "clamp(48px,5vw,72px)",
            borderTop: "1px solid rgba(243,236,224,.14)",
          }}
        >
          <div>
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#E9A66B",
                fontWeight: 600,
              }}
            >
              On The House
            </span>
            <h3
              style={{
                fontFamily: "'Lexend',sans-serif",
                fontWeight: 500,
                fontSize: "clamp(30px,3.6vw,48px)",
                lineHeight: 1.08,
                marginTop: 14,
                color: "#fff",
              }}
            >
              Fresh breakfast, included
            </h3>
            <p
              style={{
                color: "rgba(243,236,224,.75)",
                fontSize: 16.5,
                lineHeight: 1.7,
                marginTop: 18,
                fontWeight: 300,
                maxWidth: "44ch",
              }}
            >
              Start every morning with a warm, freshly prepared breakfast — eggs
              your way, golden toast, seasonal fruit and locally roasted coffee,
              served without lifting a finger.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 26,
              }}
            >
              {["Eggs & omelettes", "Fresh juice & coffee", "Seasonal fruit"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#F3ECE0",
                      border: "1px solid rgba(243,236,224,.28)",
                      padding: "8px 16px",
                      borderRadius: 100,
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: 14,
            }}
          >
            <div
              className="gal-item"
              style={{
                gridRow: "span 2",
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 24px 50px rgba(0,0,0,.28)",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src="/assets/breakfast-1.jpg"
                alt="Full breakfast plate served at Ink & S apartment in Kigali"
                fill
                sizes="(max-width:760px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              className="gal-item"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 24px 50px rgba(0,0,0,.28)",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/assets/breakfast-2.jpg"
                alt="Omelette and golden toast breakfast at Ink & S apartment in Kigali"
                fill
                sizes="(max-width:760px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              className="gal-item"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 24px 50px rgba(0,0,0,.28)",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/assets/breakfast-3.jpg"
                alt="Breakfast spread with fresh juice at Ink & S apartment in Kigali"
                fill
                sizes="(max-width:760px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
