"use client";

import { useState } from "react";
import { FAQS } from "./data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      style={{
        padding: "clamp(80px,10vw,140px) clamp(24px,6vw,120px)",
        maxWidth: 900,
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
          Good to Know
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
          Frequently asked questions
        </h2>
      </div>

      <div className="rvl">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid #E4DCCE" }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  padding: "24px 4px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lexend',sans-serif",
                    fontSize: "clamp(20px,2.4vw,26px)",
                    fontWeight: 600,
                    color: "#17242A",
                    lineHeight: 1.2,
                  }}
                >
                  {f.q}
                </span>
                <span
                  style={{
                    fontSize: 26,
                    color: "#A0561F",
                    fontWeight: 300,
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform .4s ease",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: isOpen ? 260 : 0,
                  overflow: "hidden",
                  transition: "max-height .5s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <p
                  style={{
                    padding: "0 4px 26px",
                    color: "#66747A",
                    fontSize: 16,
                    lineHeight: 1.7,
                    fontWeight: 300,
                    maxWidth: "64ch",
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
