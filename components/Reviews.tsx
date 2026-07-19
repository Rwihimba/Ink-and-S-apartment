"use client";

import { useEffect, useState } from "react";
import { REVIEWS } from "./data";

export default function Reviews() {
  const [review, setReview] = useState(0);
  const n = REVIEWS.length;

  useEffect(() => {
    const id = setInterval(() => setReview((r) => (r + 1) % n), 6500);
    return () => clearInterval(id);
  }, [n]);

  const prev = () => setReview((r) => (r - 1 + n) % n);
  const next = () => setReview((r) => (r + 1) % n);

  return (
    <section
      style={{
        padding: "clamp(80px,10vw,140px) clamp(24px,6vw,120px)",
        maxWidth: 1080,
        margin: "0 auto",
      }}
    >
      <div className="rvl" style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            fontSize: 12,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#A0561F",
            fontWeight: 600,
          }}
        >
          Guest Reviews
        </span>
        <h2
          style={{
            fontFamily: "'Lexend',sans-serif",
            fontWeight: 500,
            fontSize: "clamp(34px,4.4vw,58px)",
            lineHeight: 1.05,
            marginTop: 14,
          }}
        >
          Stories from our guests
        </h2>
      </div>

      <div
        className="rvl"
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: 26,
          padding: "clamp(40px,6vw,72px)",
          boxShadow: "0 30px 70px rgba(22,73,91,.1)",
          overflow: "hidden",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform .7s cubic-bezier(.16,1,.3,1)",
              transform: `translateX(-${review * 100}%)`,
            }}
          >
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                style={{
                  minWidth: "100%",
                  textAlign: "center",
                  padding: "0 4px",
                }}
              >
                <div
                  style={{
                    color: "#A0561F",
                    fontSize: 22,
                    letterSpacing: "5px",
                  }}
                >
                  ★★★★★
                </div>
                <p
                  style={{
                    fontFamily: "'Lexend',sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(24px,3.2vw,40px)",
                    lineHeight: 1.3,
                    color: "#17242A",
                    marginTop: 26,
                    fontStyle: "italic",
                    textWrap: "balance",
                  }}
                >
                  “{r.quote}”
                </p>
                <p
                  style={{
                    marginTop: 26,
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#16495B",
                  }}
                >
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 40,
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous review"
            className="rev-btn"
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "1px solid #DfD8CC",
              background: "#FBF9F5",
              color: "#16495B",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ←
          </button>
          <div style={{ display: "flex", gap: 9 }}>
            {REVIEWS.map((_, i) => (
              <span
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i === review ? "#A0561F" : "#D9D0C2",
                  transition: "background .3s ease",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next review"
            className="rev-btn"
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              border: "1px solid #DfD8CC",
              background: "#FBF9F5",
              color: "#16495B",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
