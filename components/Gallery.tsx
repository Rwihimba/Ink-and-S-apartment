"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY, GALLERY_TABS } from "./data";

export default function Gallery() {
  const [cat, setCat] = useState("All");

  return (
    <section
      id="gallery"
      style={{
        padding: "0 clamp(24px,6vw,120px) clamp(80px,10vw,140px)",
        maxWidth: 1360,
        margin: "0 auto",
      }}
    >
      <div className="rvl" style={{ textAlign: "center", marginBottom: 40 }}>
        <span
          style={{
            fontSize: 12,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#A0561F",
            fontWeight: 600,
          }}
        >
          Gallery
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
          A look inside
        </h2>
      </div>

      <div
        className="rvl no-scrollbar"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
          marginBottom: 40,
        }}
      >
        {GALLERY_TABS.map((t) => {
          const active = cat === t;
          return (
            <button
              key={t}
              onClick={() => setCat(t)}
              style={{
                padding: "10px 22px",
                borderRadius: 100,
                border: `1px solid ${active ? "#16495B" : "#E4DCCE"}`,
                background: active ? "#16495B" : "#ffffff",
                color: active ? "#ffffff" : "#16495B",
                fontSize: 13.5,
                fontWeight: 600,
                letterSpacing: ".02em",
                cursor: "pointer",
                transition: "all .35s ease",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div style={{ columns: "3 300px", columnGap: 16 }}>
        {GALLERY.map((g, i) => {
          const show = cat === "All" || g.cat === cat;
          return (
            <div
              key={i}
              className="gal-item"
              data-cat={g.cat}
              style={{
                display: show ? undefined : "none",
                breakInside: "avoid",
                marginBottom: 16,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 2px 14px rgba(22,73,91,.07)",
              }}
            >
              <Image
                src={g.img}
                alt={g.alt}
                width={1024}
                height={683}
                sizes="(max-width:620px) 100vw, 300px"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
