export type Unit = {
  slug: string;
  name: string;
  tag: string;
  price: string;
  guests: number;
  bedrooms: string;
  bathrooms: number;
  size: string;
  view: string;
  blurb: string;
  description: string[];
  images: { src: string; alt: string }[];
  amenities: string[];
};

const BASE_AMENITIES = [
  "Fully furnished",
  "Free high-speed WiFi",
  "Fully equipped kitchenette",
  "Smart TV with streaming",
  "Air conditioning",
  "Complimentary breakfast",
  "Fresh linens & towels",
  "Professionally cleaned",
  "Self check-in",
  "Free secure parking",
  "Dedicated workspace",
  "Backup power & water",
];

export const UNITS: Unit[] = [
  {
    slug: "grand-executive",
    name: "Grand Executive Apartment",
    tag: "Signature",
    price: "Price on request",
    guests: 2,
    bedrooms: "1 bedroom",
    bathrooms: 1,
    size: "Largest layout",
    view: "Panoramic city view",
    blurb:
      "Our largest suite — a serene bedroom retreat with room to work and unwind.",
    description: [
      "The Grand Executive is our flagship apartment: a calm, generously sized retreat designed for guests who want space to both focus and relax. A serene king bedroom opens onto a light-filled living area and a private balcony with panoramic views over Kigali.",
      "It's a favourite with executives, consultants and couples staying a little longer — with a proper desk for deep work by day and a quiet, luxurious space to switch off at night.",
    ],
    images: [
      { src: "/assets/bedroom-3.jpg", alt: "King bedroom in the Grand Executive Apartment at Ink & S, Kigali" },
      { src: "/assets/living-2.jpg", alt: "Light-filled living area of the Grand Executive Apartment in Kigali" },
      { src: "/assets/balcony-1.jpg", alt: "Private balcony with panoramic Kigali views" },
      { src: "/assets/breakfast-1.jpg", alt: "Complimentary breakfast served in the Grand Executive Apartment" },
    ],
    amenities: [...BASE_AMENITIES, "Private balcony", "King bed", "En-suite bathroom"],
  },
  {
    slug: "prime",
    name: "Prime Apartment",
    tag: "Most Popular",
    price: "Price on request",
    guests: 2,
    bedrooms: "1 bedroom",
    bathrooms: 1,
    size: "Open-plan living",
    view: "City-facing",
    blurb:
      "Open living space bathed in light, made for longer, comfortable stays.",
    description: [
      "The Prime is our most-booked apartment for good reason: a bright, open-plan living space that feels like home from the moment you arrive. It's ideally suited to longer stays, remote work and relocations.",
      "Cook a proper meal in the full kitchenette, set up at the workspace for the day, then stretch out in the living area come evening — everything you need is already here.",
    ],
    images: [
      { src: "/assets/living-1.jpg", alt: "Open-plan living space in the Prime Apartment at Ink & S, Kigali" },
      { src: "/assets/bedroom-1.jpg", alt: "Comfortable bedroom in the Prime Apartment in Kigali" },
      { src: "/assets/exterior-1.jpg", alt: "Exterior of the Ink & S apartment building in Kigali" },
      { src: "/assets/balcony-1.jpg", alt: "Balcony view from the Prime Apartment in Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Open-plan living", "Queen bed", "Ideal for long stays"],
  },
  {
    slug: "cozy",
    name: "Cozy Apartment",
    tag: "Great Value",
    price: "Price on request",
    guests: 2,
    bedrooms: "1 bedroom",
    bathrooms: 1,
    size: "Compact & warm",
    view: "Quiet aspect",
    blurb:
      "Warm, restful and intimate — everything you need, nothing you don’t.",
    description: [
      "The Cozy Apartment is warm, restful and intimate — a smart choice for solo travellers and couples who want comfort and great value without compromise.",
      "It carries the same quiet luxury as our larger units: fast WiFi, a fully equipped kitchenette, hotel-standard cleaning and a restful bedroom for peaceful nights above the city.",
    ],
    images: [
      { src: "/assets/bedroom-1.jpg", alt: "Warm, restful bedroom in the Cozy Apartment at Ink & S, Kigali" },
      { src: "/assets/living-2.jpg", alt: "Intimate living space in the Cozy Apartment in Kigali" },
      { src: "/assets/bedroom-2.jpg", alt: "Bedroom detail in the Cozy Apartment in Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Great value", "Double bed", "Quiet & restful"],
  },
  {
    slug: "classic",
    name: "Classic Apartment",
    tag: "Essentials",
    price: "Price on request",
    guests: 1,
    bedrooms: "Studio",
    bathrooms: 1,
    size: "Self-contained studio",
    view: "City-facing",
    blurb:
      "A smart, self-contained studio with a fully equipped kitchenette.",
    description: [
      "The Classic is a smart, self-contained studio: a well-designed single space with a fully equipped kitchenette, comfortable sleeping area and dedicated desk — everything the essentials-focused traveller needs.",
      "It's efficient, spotless and easy to love — perfect for short business trips and independent travellers who value a great location and a great rate.",
    ],
    images: [
      { src: "/assets/bedroom-2.jpg", alt: "Self-contained studio layout of the Classic Apartment at Ink & S, Kigali" },
      { src: "/assets/living-1.jpg", alt: "Living and kitchenette area in the Classic Apartment in Kigali" },
      { src: "/assets/bedroom-3.jpg", alt: "Sleeping area in the Classic Apartment in Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Self-contained studio", "Single/double bed", "Efficient footprint"],
  },
];

export const getUnit = (slug: string) => UNITS.find((u) => u.slug === slug);
