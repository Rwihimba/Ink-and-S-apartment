"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-reveal for `.rvl` elements. Re-runs on every route change — the root
 * layout (and this component) persist across client-side navigation, so without
 * the pathname dependency a newly navigated page's `.rvl` sections would never
 * be observed and would stay hidden until a hard refresh.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rvl"));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    // Reveal anything already on-screen immediately (snappy on load & on
    // client navigation); observe the rest so they reveal as they scroll in.
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      if (el.classList.contains("in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    // Fail-safe: never leave content hidden (covers reduced-motion / edge cases).
    const t = setTimeout(
      () => els.forEach((el) => el.classList.add("in")),
      2000
    );

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
