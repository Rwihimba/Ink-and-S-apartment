"use client";

import Image from "next/image";
import { useState } from "react";

export default function PropertyTour() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(80px,10vw,140px) clamp(24px,6vw,120px)",
        background: "#16495B",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="rvl" style={{ textAlign: "center", marginBottom: 44 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#E9A66B",
              fontWeight: 600,
            }}
          >
            Property Tour
          </span>
          <h2
            style={{
              fontFamily: "'Lexend',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px,4.2vw,56px)",
              lineHeight: 1.05,
              marginTop: 14,
              color: "#fff",
            }}
          >
            Take a walk through Ink &amp; S
          </h2>
        </div>

        <div
          className="rvl"
          onClick={() => setPlaying(true)}
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "16/9",
            boxShadow: "0 40px 90px rgba(0,0,0,.4)",
            cursor: "pointer",
          }}
        >
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/0e7EgJ5ns9A?autoplay=1&rel=0"
              title="Ink & S property tour"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                display: "block",
              }}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0 }}>
              <Image
                src="/assets/exterior-1.jpg"
                alt="Ink & S apartment property in Kigali"
                fill
                sizes="(max-width:1080px) 100vw, 1080px"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(rgba(15,32,40,.2),rgba(15,32,40,.5))",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: "50%",
                    background: "rgba(217,138,78,.95)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 40px rgba(217,138,78,.5)",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "14px solid transparent",
                      borderBottom: "14px solid transparent",
                      borderLeft: "22px solid #fff",
                      marginLeft: 6,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
