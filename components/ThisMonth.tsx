import { currentEdition, monthLabel } from "@/lib/thisMonth";

/**
 * "This month in Kigali" — content rotates weekly (by ISO week) from
 * content/this-month.json. The weekly cron revalidates the homepage so the
 * shown edition genuinely changes over time.
 */
export default function ThisMonth() {
  const ed = currentEdition();
  const month = monthLabel();

  return (
    <section
      style={{
        background: "#F3ECE0",
        padding: "clamp(72px,9vw,120px) clamp(24px,6vw,120px)",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
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
            This month in Kigali · {month}
          </span>
          <h2
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(30px,4vw,52px)",
              lineHeight: 1.06,
              letterSpacing: "-.01em",
              marginTop: 14,
              maxWidth: "16ch",
            }}
          >
            {ed.title}
          </h2>
          <p
            style={{
              color: "#2A3A40",
              fontSize: 17.5,
              lineHeight: 1.75,
              fontWeight: 300,
              marginTop: 20,
              maxWidth: "46ch",
            }}
          >
            {ed.note}
          </p>
        </div>

        <div
          className="rvl"
          style={{
            background: "#fff",
            borderRadius: 22,
            padding: "clamp(24px,3vw,34px)",
            boxShadow: "0 20px 50px rgba(22,73,91,.1)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "#16495B",
              marginBottom: 6,
            }}
          >
            What&apos;s on &amp; nearby
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {ed.events.map((e) => (
              <div
                key={e.name}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "baseline",
                  padding: "16px 0",
                  borderBottom: "1px solid #EFE9DE",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Lexend',sans-serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#17242A",
                    }}
                  >
                    {e.name}
                  </div>
                  {e.where && (
                    <div
                      style={{
                        fontSize: 14,
                        color: "#5A6B71",
                        fontWeight: 300,
                        marginTop: 3,
                      }}
                    >
                      {e.where}
                    </div>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#A0561F",
                    whiteSpace: "nowrap",
                    letterSpacing: ".02em",
                  }}
                >
                  {e.when}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
