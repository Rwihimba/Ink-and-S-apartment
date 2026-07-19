import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href: string };

/** Dark-teal page banner. Sits under the fixed nav (so its white text stays legible). */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section
      style={{
        position: "relative",
        background: "#16495B",
        color: "#F3ECE0",
        padding:
          "clamp(120px,17vh,190px) clamp(24px,6vw,120px) clamp(52px,8vw,84px)",
        overflow: "hidden",
      }}
    >
      {image && (
        <>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src={image}
              alt={imageAlt || ""}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, rgba(15,32,40,.9), rgba(22,73,91,.78))",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1360, margin: "0 auto" }}>
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              fontSize: 13,
              fontWeight: 300,
              color: "rgba(243,236,224,.7)",
              marginBottom: 18,
            }}
          >
            {crumbs.map((c, i) => (
              <span key={c.href} style={{ display: "inline-flex", gap: 8 }}>
                {i > 0 && <span aria-hidden>/</span>}
                {i < crumbs.length - 1 ? (
                  <Link
                    href={c.href}
                    style={{ color: "rgba(243,236,224,.7)" }}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span style={{ color: "#E9A66B" }}>{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#E9A66B",
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </span>
        )}
        <h1
          style={{
            fontFamily: "'Lexend',sans-serif",
            fontWeight: 500,
            fontSize: "clamp(36px,5vw,68px)",
            lineHeight: 1.04,
            letterSpacing: "-.01em",
            marginTop: 14,
            color: "#fff",
            maxWidth: "18ch",
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              color: "rgba(243,236,224,.82)",
              fontSize: "clamp(16px,1.4vw,20px)",
              lineHeight: 1.7,
              fontWeight: 300,
              marginTop: 20,
              maxWidth: "56ch",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
