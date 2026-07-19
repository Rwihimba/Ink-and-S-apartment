import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { authorizeCron, logRun } from "@/lib/cron";
import { UNITS } from "@/lib/apartments";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Daily: sync availability & pricing from a booking source.
 *
 * This is a ready-to-wire scaffold. Set BOOKING_API_URL (and optionally
 * BOOKING_API_KEY) to point at your channel manager / PMS / availability API.
 * When unset, it logs "skipped" and does nothing. When set, it fetches the
 * source, (TODO) maps the data into your pricing/availability store, and
 * revalidates the apartment pages so the site reflects the latest.
 */
export async function GET(req: Request) {
  const auth = authorizeCron(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.reason }, { status: 401 });
  }

  const apiUrl = process.env.BOOKING_API_URL;
  const apiKey = process.env.BOOKING_API_KEY;

  if (!apiUrl) {
    const result = logRun("sync-availability", {
      skipped: "BOOKING_API_URL not set",
      ready: true,
      auth: auth.reason,
    });
    return NextResponse.json({ ok: true, ...result });
  }

  try {
    const res = await fetch(apiUrl, {
      headers: apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined,
      cache: "no-store",
    });

    // TODO: map `payload` → your pricing/availability store (Vercel KV, a DB,
    // or per-unit JSON), keyed by unit slug, then feed it into lib/apartments.
    const payload = await res.json().catch(() => null);

    const paths = ["/apartments", ...UNITS.map((u) => `/apartments/${u.slug}`)];
    paths.forEach((p) => revalidatePath(p));

    const result = logRun("sync-availability", {
      source: apiUrl,
      status: res.status,
      received: payload ? "json" : "non-json",
      revalidated: paths.length,
      auth: auth.reason,
    });
    return NextResponse.json({ ok: res.ok, ...result });
  } catch (e) {
    const result = logRun("sync-availability", {
      source: apiUrl,
      error: (e as Error).message,
      auth: auth.reason,
    });
    return NextResponse.json({ ok: false, ...result }, { status: 502 });
  }
}
