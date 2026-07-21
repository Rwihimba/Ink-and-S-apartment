/**
 * Central site configuration used across metadata, JSON-LD, sitemap and robots.
 * Override the URL at build/deploy time with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.inkands.rw"
).replace(/\/$/, "");

export const SITE_NAME = "Ink & S Apartment Hotel";
export const LEGAL_NAME = "Ink & S Apartment Hotel";

export const SITE_DESCRIPTION =
  "Furnished apartments for rent in Kigali, Rwanda. A boutique Airbnb alternative for short & long stays — fast WiFi, free breakfast, secure parking and skyline views.";

export const SITE_TITLE =
  "Ink & S Apartment Hotel | Furnished Apartment Rentals in Kigali, Rwanda";

export const SITE_KEYWORDS = [
  "apartment for rent in Kigali",
  "furnished apartment Kigali",
  "Kigali short stay apartment",
  "Airbnb alternative Kigali",
  "serviced apartment Kigali",
  "furnished apartment rentals Kigali Rwanda",
  "monthly apartment rental Kigali",
  "Kacyiru apartment Kigali",
];

export const CONTACT = {
  phone: "+250796707342",
  phoneDisplay: "+250 796 707 342",
  email: "stay@inkands.rw",
  whatsapp: "https://wa.me/250796707342",
  mapsUrl: "https://maps.app.goo.gl/TQHayNzZiVbHdkyEA",
};

/** Kacyiru / Gishushu area, Kigali (approximate — update with the exact address). */
export const GEO = { latitude: -1.9403, longitude: 30.0915 };

export const ADDRESS = {
  streetAddress: "Kacyiru, Gishushu",
  addressLocality: "Kigali",
  addressRegion: "Kigali City",
  addressCountry: "RW",
};

export const OG_IMAGE = "/og-image.jpg";
