import { NextResponse } from "next/server";
import { authorizeCron, logRun } from "@/lib/cron";
import { GET as revalidate } from "../revalidate/route";
import { GET as pingSitemap } from "../ping-sitemap/route";
import { GET as syncAvailability } from "../sync-availability/route";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Daily roll-up. The Vercel Hobby plan allows only two cron jobs per project,
 * so the three daily tasks run in-process behind this one schedule instead of
 * three. Each underlying route stays independently callable (and testable) at
 * its own path; only the `crons` entries in vercel.json are consolidated.
 *
 * Order matters: revalidate first so the sitemap's <lastmod> dates are fresh
 * before the search engines are pinged.
 */
const TASKS = [
  ["revalidate", revalidate],
  ["ping-sitemap", pingSitemap],
  ["sync-availability", syncAvailability],
] as const;

export async function GET(req: Request) {
  const auth = authorizeCron(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.reason }, { status: 401 });
  }

  const tasks: { task: string; ok: boolean; error?: string }[] = [];
  for (const [name, handler] of TASKS) {
    try {
      const res = await handler(req);
      const body = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      tasks.push({ task: name, ok: res.ok && body?.ok !== false });
    } catch (e) {
      // One failing task must not stop the rest of the daily run.
      tasks.push({ task: name, ok: false, error: (e as Error).message });
    }
  }

  const result = logRun("daily", {
    tasks,
    failed: tasks.filter((t) => !t.ok).length,
    auth: auth.reason,
  });
  return NextResponse.json({ ok: tasks.every((t) => t.ok), ...result });
}
