import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Styles MDX content to match the Ink & S design system (Lexend, teal/terracotta).
 * Applied to every .mdx module rendered in the app.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        style={{
          fontFamily: "'Lexend',sans-serif",
          fontWeight: 500,
          fontSize: "clamp(26px,3.2vw,38px)",
          lineHeight: 1.12,
          letterSpacing: "-.01em",
          color: "#17242A",
          margin: "48px 0 16px",
        }}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        style={{
          fontFamily: "'Lexend',sans-serif",
          fontWeight: 600,
          fontSize: "clamp(20px,2.4vw,26px)",
          lineHeight: 1.2,
          color: "#17242A",
          margin: "32px 0 12px",
        }}
        {...props}
      />
    ),
    p: (props) => (
      <p
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          color: "#2A3A40",
          fontWeight: 300,
          margin: "0 0 20px",
        }}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        style={{
          margin: "0 0 22px",
          paddingLeft: 22,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        style={{
          margin: "0 0 22px",
          paddingLeft: 22,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
        {...props}
      />
    ),
    li: (props) => (
      <li
        style={{ fontSize: 17, lineHeight: 1.7, color: "#2A3A40", fontWeight: 300 }}
        {...props}
      />
    ),
    strong: (props) => (
      <strong style={{ fontWeight: 600, color: "#17242A" }} {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        style={{
          borderLeft: "3px solid #A0561F",
          margin: "0 0 24px",
          padding: "6px 0 6px 22px",
          fontStyle: "italic",
          color: "#16495B",
          fontSize: 19,
          lineHeight: 1.6,
        }}
        {...props}
      />
    ),
    a: ({ href = "", ...props }) => {
      const internal = href.startsWith("/") || href.startsWith("#");
      const style = {
        color: "#A0561F",
        fontWeight: 500,
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      } as const;
      return internal ? (
        <Link href={href} style={style} {...props} />
      ) : (
        <a href={href} target="_blank" rel="noopener" style={style} {...props} />
      );
    },
    hr: () => (
      <hr
        style={{
          border: 0,
          borderTop: "1px solid #E4DCCE",
          margin: "40px 0",
        }}
      />
    ),
    ...components,
  };
}
