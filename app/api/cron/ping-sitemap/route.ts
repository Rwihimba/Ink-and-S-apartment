import { NextResponse } from "next/server";
import { authorizeCron, logRun } from "@/lib/cron";
import { SITE_URL } from "@/lib/site";
import { allUrls } from "@/lib/routes";
import { submitUrlsToGoogle } from "@/lib/googleIndexing";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Daily (after revalidate): tell search engines the sitemap changed, and — if
 * Google service-account credentials are configured — submit key URLs to the
 * Google Indexing API.
 */
export async function GET(req: Request) {
  const auth = authorizeCron(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.reason }, { status: 401 });
  }

  const sitemap = `${SITE_URL}/sitemap.xml`;

  // 1) Best-effort sitemap ping. (Google retired its ping endpoint in 2023;
  //    Bing still honours it. Harmless if it 404s.)
  const pings: { engine: string; status?: number; error?: string }[] = [];
  for (const [engine, url] of [
    ["bing", `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`],
    ["google", `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`],
  ] as const) {
    try {
      const r = await fetch(url, { redirect: "manual" });
      pings.push({ engine, status: r.status });
    } catch (e) {
      pings.push({ engine, error: (e as Error).message });
    }
  }

  // 2) Google Indexing API (only runs when credentials are present).
  const envUrls = process.env.GOOGLE_INDEXING_URLS?.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const keyUrls = envUrls?.length ? envUrls : allUrls();
  const indexing = await submitUrlsToGoogle(keyUrls);

  const result = logRun("ping-sitemap", {
    sitemap,
    pings,
    indexing,
    auth: auth.reason,
  });
  return NextResponse.json({ ok: true, ...result });
}
