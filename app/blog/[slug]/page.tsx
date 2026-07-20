import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import JsonLd from "@/components/JsonLd";
import { articleLd, breadcrumbLd } from "@/lib/schema";
import { POSTS, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title.length > 56 ? post.title.slice(0, 56) : post.title,
    description: post.description.slice(0, 158),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      siteName: "Ink & S Apartment Hotel",
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = await import(
    `../../../content/blog/${slug}.mdx`
  );

  return (
    <>
      <PageHero
        eyebrow={post.tag}
        title={post.title}
        subtitle={`${fmtDate(post.date)} · ${post.readingTime}`}
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.tag, href: `/blog/${post.slug}` },
        ]}
      />

      <article
        style={{
          padding: "clamp(48px,6vw,80px) clamp(24px,6vw,120px)",
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <Content />

        <div
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: "1px solid #E4DCCE",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/blog"
            style={{ color: "#A0561F", fontWeight: 600, fontSize: 15 }}
          >
            ← All guides
          </Link>
          <Link
            href="/#book"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#A0561F",
              color: "#fff",
              padding: "13px 26px",
              borderRadius: 100,
              fontSize: 14.5,
              fontWeight: 600,
            }}
          >
            Book your Kigali stay
          </Link>
        </div>
      </article>

      <BookingCTA
        title="Planning a trip to Kigali?"
        text="Stay in a fully furnished Ink & S apartment — fast WiFi, breakfast included and a central Kacyiru base. Book direct for the best rate."
      />

      <JsonLd
        data={[
          articleLd(post),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
    </>
  );
}
