/** Shared helpers for the Vercel cron route handlers. */

/**
 * Verifies a request came from Vercel Cron (or an authorised caller).
 * When CRON_SECRET is set, Vercel automatically sends
 * `Authorization: Bearer <CRON_SECRET>` on scheduled invocations.
 * If no secret is configured (e.g. local dev) we allow but flag it.
 */
export function authorizeCron(req: Request): { ok: boolean; reason: string } {
  const secret = process.env.CRON_SECRET;
  if (!secret) return { ok: true, reason: "unprotected (CRON_SECRET not set)" };
  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return { ok: true, reason: "authorized" };
  return { ok: false, reason: "invalid or missing Authorization header" };
}

/** Structured, greppable log line — visible in Vercel → Logs (and `vercel logs`). */
export function logRun<T extends Record<string, unknown>>(name: string, data: T) {
  const entry = { cron: name, at: new Date().toISOString(), ...data };
  console.log(`[cron:${name}]`, JSON.stringify(entry));
  return entry;
}
