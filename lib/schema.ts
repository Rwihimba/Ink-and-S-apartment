import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  CONTACT,
  GEO,
  ADDRESS,
  OG_IMAGE,
} from "./site";

const abs = (path: string) => `${SITE_URL}${path}`;

export const AMENITIES = [
  "Fully furnished",
  "Free high-speed WiFi",
  "Complimentary breakfast",
  "Fully equipped kitchenette",
  "Professionally cleaned",
  "Self check-in",
  "Free on-site parking",
  "Airport pickup on request",
  "24/7 local support",
  "Backup power",
];

/** Site-wide LodgingBusiness / VacationRental entity. */
export function lodgingLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "VacationRental"],
    "@id": `${SITE_URL}/#lodging`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: abs("/assets/logo-white.png"),
    image: [
      abs(OG_IMAGE),
      abs("/assets/hero-sunset.jpg"),
      abs("/assets/living-1.jpg"),
      abs("/assets/bedroom-3.jpg"),
    ],
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    currenciesAccepted: "RWF, USD",
    paymentAccepted: "Mobile Money (MoMo), Visa, Mastercard, Cash, Bank transfer",
    hasMap: CONTACT.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: "Kigali, Rwanda",
    checkinTime: "14:00",
    checkoutTime: "11:00",
    petsAllowed: false,
    numberOfRooms: 4,
    amenityFeature: AMENITIES.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [CONTACT.whatsapp],
  };
}

export function faqLd(faqs: { q: string; a: string }[], id = "faq") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#${id}`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function articleLd(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: abs(post.image),
    url: abs(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: abs("/assets/logo-white.png") },
    },
    mainEntityOfPage: abs(`/blog/${post.slug}`),
  };
}

export function apartmentLd(unit: {
  name: string;
  slug: string;
  description: string;
  images: string[];
  amenities: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: unit.name,
    description: unit.description,
    url: abs(`/apartments/${unit.slug}`),
    image: unit.images.map(abs),
    amenityFeature: unit.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    numberOfRooms: 1,
    petsAllowed: false,
  };
}
