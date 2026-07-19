import crypto from "crypto";

/**
 * Minimal Google Indexing API client (no external deps).
 * Requires a Google service-account with the Indexing API enabled, added as an
 * Owner of the property in Search Console. Credentials come from env:
 *   GOOGLE_CLIENT_EMAIL  — service account email
 *   GOOGLE_PRIVATE_KEY   — service account private key (\n-escaped is fine)
 * If either is missing, submission is skipped gracefully.
 *
 * Note: Google officially supports this API for JobPosting / BroadcastEvent
 * pages; it accepts other URLs but may not act on them. It's wired here as
 * requested and is safe to leave unconfigured.
 */

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const INDEX_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const SCOPE = "https://www.googleapis.com/auth/indexing";

function base64url(input: Buffer | string) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken(): Promise<string | null> {
  const email = process.env.GOOGLE_CLIENT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !rawKey) return null;

  const key = rawKey.replace(/\\n/g, "\n");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );
  const unsigned = `${header}.${claim}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(unsigned)
    .sign(key);
  const jwt = `${unsigned}.${base64url(signature)}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`token exchange ${res.status}: ${await res.text()}`);
  }
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

export type IndexingResult =
  | { configured: false; skipped: string }
  | { configured: true; ok: false; error: string }
  | { configured: true; ok: true; count: number; submitted: { url: string; status?: number; error?: string }[] };

export async function submitUrlsToGoogle(urls: string[]): Promise<IndexingResult> {
  let token: string | null;
  try {
    token = await getAccessToken();
  } catch (e) {
    return { configured: true, ok: false, error: `auth failed: ${(e as Error).message}` };
  }
  if (!token) {
    return {
      configured: false,
      skipped: "GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY not set",
    };
  }

  const submitted: { url: string; status?: number; error?: string }[] = [];
  for (const url of urls) {
    try {
      const r = await fetch(INDEX_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, type: "URL_UPDATED" }),
      });
      submitted.push({ url, status: r.status });
    } catch (e) {
      submitted.push({ url, error: (e as Error).message });
    }
  }
  return { configured: true, ok: true, count: submitted.length, submitted };
}
