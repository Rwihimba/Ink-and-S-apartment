import data from "@/content/this-month.json";

export type KigaliEvent = { name: string; when: string; where?: string };
export type Edition = {
  id: string;
  title: string;
  note: string;
  events: KigaliEvent[];
};

const EDITIONS = data.editions as Edition[];

/** ISO-8601 week number (1–53). */
export function isoWeek(d: Date): number {
  const date = new Date(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
  );
  const dayNum = (date.getUTCDay() + 6) % 7; // Mon=0..Sun=6
  date.setUTCDate(date.getUTCDate() - dayNum + 3); // nearest Thursday
  const firstThursday = new Date(Date.UTC(date.getUTCFullYear(), 0, 4));
  const diff = date.getTime() - firstThursday.getTime();
  return 1 + Math.round(diff / 86400000 / 7);
}

/** Deterministic weekly rotation — no persisted state needed. */
export function currentEdition(now: Date = new Date()): Edition {
  const idx = ((isoWeek(now) - 1) % EDITIONS.length + EDITIONS.length) %
    EDITIONS.length;
  return EDITIONS[idx];
}

export function monthLabel(now: Date = new Date()): string {
  return now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export const editionCount = EDITIONS.length;
