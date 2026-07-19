import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { authorizeCron, logRun } from "@/lib/cron";
import { currentEdition, isoWeek, editionCount } from "@/lib/thisMonth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Weekly: revalidate the homepage so the "This month in Kigali" section rotates
 * to the current week's edition (from content/this-month.json).
 */
export async function GET(req: Request) {
  const auth = authorizeCron(req);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.reason }, { status: 401 });
  }

  const ed = currentEdition();
  revalidatePath("/");

  const result = logRun("rotate-kigali", {
    week: isoWeek(new Date()),
    activeEdition: ed.id,
    title: ed.title,
    events: ed.events.length,
    ofEditions: editionCount,
    auth: auth.reason,
  });
  return NextResponse.json({ ok: true, ...result });
}
