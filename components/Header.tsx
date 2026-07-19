"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navText = scrolled ? "#17242A" : "#ffffff";

  return (
    <nav
      id="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: `${scrolled ? "14px" : "22px"} clamp(20px,5vw,48px)`,
        transition:
          "background .45s ease, padding .45s ease, box-shadow .45s ease, backdrop-filter .45s ease",
        background: scrolled ? "rgba(251,249,245,.92)" : "transparent",
        boxShadow: scrolled ? "0 6px 24px rgba(22,73,91,.09)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          height: 36,
          flexShrink: 0,
        }}
      >
        <Image
          src="/assets/logo-white.png"
          alt="Ink & S Apartment Hotel"
          width={1374}
          height={609}
          priority
          className={scrolled ? "logo-dark-filter" : undefined}
          style={{ height: 36, width: "auto", display: "block" }}
        />
      </Link>

      <div
        data-nav-links=""
        className={menuOpen ? "open" : ""}
        onClick={() => setTimeout(() => setMenuOpen(false), 40)}
        style={{
          gap: "clamp(18px,2.4vw,34px)",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            style={{
              color: navText,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: ".02em",
              transition: "color .45s ease",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexShrink: 0,
        }}
      >
        <Link
          href="/#book"
          className="btn-nav"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "#A0561F",
            color: "#fff",
            padding: "11px 22px",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: ".03em",
            boxShadow: "0 8px 24px rgba(217,138,78,.32)",
          }}
        >
          Book Your Stay
        </Link>
        <button
          className="nav-burger"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ color: navText }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
