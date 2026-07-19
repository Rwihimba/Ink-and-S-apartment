import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { authorizeCron, logRun } from "@/lib/cron";
import { allPaths } from "@/lib/routes";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Daily: revalidate every page + the sitemap so ISR content and the sitemap's
 * <lastmod> dates stay current without a redeploy.
 */
export async function GET(req: Request) {
  const auth = authorizeCron(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.reason }, { status: 401 });
  }

  const paths = [...allPaths(), "/sitemap.xml"];
  const revalidated: string[] = [];
  for (const p of paths) {
    try {
      revalidatePath(p);
      revalidated.push(p);
    } catch (e) {
      logRun("revalidate", { failed: p, error: (e as Error).message });
    }
  }

  const result = logRun("revalidate", {
    count: revalidated.length,
    paths: revalidated,
    auth: auth.reason,
  });
  return NextResponse.json({ ok: true, ...result });
}
