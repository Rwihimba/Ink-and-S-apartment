"use client";

import { useState } from "react";

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid #E4DCCE" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
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
                  fontSize: "clamp(18px,2.2vw,24px)",
                  fontWeight: 600,
                  color: "#17242A",
                  lineHeight: 1.25,
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
                maxHeight: isOpen ? 320 : 0,
                overflow: "hidden",
                transition: "max-height .5s cubic-bezier(.16,1,.3,1)",
              }}
            >
              <p
                style={{
                  padding: "0 4px 26px",
                  color: "#5A6B71",
                  fontSize: 16,
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: "68ch",
                }}
              >
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
