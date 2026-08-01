export type Unit = {
  slug: string;
  name: string;
  tag: string;
  /**
   * Standard nightly rate in USD, mirroring the rack rate on our Booking.com
   * listing. Numeric so the display string and the JSON-LD offer cannot drift —
   * format it with `nightlyRate()`.
   */
  priceUSD: number;
  /** Maximum occupancy for the unit. */
  guests: number;
  bedrooms: string;
  bathrooms: number;
  size: string;
  /** Room dimensions as measured at the property, e.g. "285 × 300 cm". */
  roomSize: string;
  view: string;
  /** How many of this unit type the property has. */
  unitsAvailable: number;
  blurb: string;
  description: string[];
  images: { src: string; alt: string }[];
  amenities: string[];
};

const BASE_AMENITIES = [
  "Fully furnished",
  "Free high-speed WiFi",
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
    name: "Grand Executive Apartment Hotel",
    tag: "Signature",
    priceUSD: 120,
    guests: 4,
    bedrooms: "2 bedrooms",
    bathrooms: 2,
    size: "Largest layout",
    roomSize: "285 × 300 cm",
    view: "Private balcony",
    unitsAvailable: 2,
    blurb:
      "Two bedrooms, two bathrooms and a private balcony — our largest stay.",
    description: [
      "The Grand Executive is our flagship apartment hotel and the only unit with two separate bedrooms, each with its own bathroom. A generous living room sits between them, and a private balcony looks out over Kigali.",
      "A Super King bed anchors the main bedroom. Sleeping four in genuine comfort, it's the natural choice for families, colleagues travelling together, or anyone who simply wants room to spread out. Breakfast is included each morning — there is no kitchen in this unit.",
    ],
    images: [
      { src: "/assets/grand-executive-bedroom.jpg", alt: "Super King bedroom with striped linen in the Grand Executive Apartment Hotel at Ink & S, Kigali" },
      { src: "/assets/grand-executive-living.jpg", alt: "Separate living room with sofa, armchair and coffee table in the Grand Executive Apartment Hotel, Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Two bedrooms", "Two bathrooms — one per bedroom", "Separate living room", "Private balcony", "Super King bed"],
  },
  {
    slug: "prime",
    name: "Prime Apartment Hotel",
    tag: "Most Popular",
    priceUSD: 100,
    guests: 1,
    bedrooms: "1 bedroom",
    bathrooms: 1,
    size: "Living room + balcony",
    roomSize: "394 × 278 cm",
    view: "Balcony",
    unitsAvailable: 4,
    blurb:
      "A King bed, a separate living room and your own balcony to step out onto.",
    description: [
      "The Prime is our most-booked apartment hotel for good reason: a King bed, a separate living room and a private balcony, in the unit type we have most of. It suits longer stays, remote work and relocations.",
      "Set up at the workspace for the day, then step out onto the balcony come evening. Two of the four Prime apartments include a full private kitchen — tell us when you book if you'd like one of those.",
    ],
    images: [
      { src: "/assets/prime-bedroom.jpg", alt: "King bedroom in the Prime Apartment Hotel at Ink & S, Kigali" },
      { src: "/assets/prime-living.jpg", alt: "Separate living room in the Prime Apartment Hotel in Kigali" },
      { src: "/assets/prime-balcony.jpg", alt: "Private balcony off the Prime Apartment Hotel in Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "King bed", "Separate living room", "Private balcony", "Private kitchen in 2 of 4 units"],
  },
  {
    slug: "cozy",
    name: "Cozy Apartment Hotel",
    tag: "Great Value",
    priceUSD: 70,
    guests: 1,
    bedrooms: "1 bedroom",
    bathrooms: 1,
    size: "Terrace access",
    roomSize: "467 × 312 cm",
    view: "Terrace access",
    unitsAvailable: 4,
    blurb:
      "Warm, restful and intimate — everything you need, nothing you don’t.",
    description: [
      "The Cozy Apartment Hotel is warm, restful and intimate, with direct terrace access and one of the roomier floor plans at the property — a smart choice for guests who want comfort and value without compromise.",
      "Three of the four Cozy apartments have a Super King bed and the fourth a King, so nights are restful whichever you're given. Same quiet luxury as our larger units: fast WiFi, hotel-standard cleaning and breakfast each morning.",
    ],
    images: [
      { src: "/assets/cozy-bedroom.jpg", alt: "Bedroom with blue upholstered headboard and wardrobe in the Cozy Apartment Hotel at Ink & S, Kigali" },
      { src: "/assets/cozy-bathroom.jpg", alt: "Private bathroom with vanity and fresh towels in the Cozy Apartment Hotel, Kigali" },
      { src: "/assets/cozy-vanity.jpg", alt: "Vanity and round mirror in the Cozy Apartment Hotel bathroom, Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Direct terrace access", "Super King bed in 3 of 4 units", "King bed in 1 unit"],
  },
  {
    slug: "classic",
    name: "Classic Apartment Hotel",
    tag: "Comfort",
    priceUSD: 60,
    guests: 2,
    bedrooms: "1 bedroom",
    bathrooms: 1,
    size: "Private suite",
    roomSize: "540 × 242 cm",
    view: "City-facing",
    unitsAvailable: 2,
    blurb:
      "A quiet, well-proportioned suite — the longest floor plan we have.",
    description: [
      "The Classic is a private suite with the longest floor plan at the property: a calm, well-proportioned room that gives you space to work at one end and rest at the other.",
      "There's no balcony or terrace here, which is exactly why it's the quietest room we have — a favourite with light sleepers and guests in Kigali to concentrate.",
    ],
    images: [
      { src: "/assets/classic-bedroom.jpg", alt: "Bed dressed in crisp white linen beside a curtained window in the Classic Apartment Hotel at Ink & S, Kigali" },
      { src: "/assets/classic-bathroom.jpg", alt: "Private bathroom with vanity and round mirror in the Classic Apartment Hotel, Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Private suite", "Extra-large double bed", "En-suite bathroom", "Quietest aspect"],
  },
  {
    slug: "studio",
    name: "Studio Apartment Hotel",
    tag: "Essentials",
    priceUSD: 50,
    guests: 2,
    bedrooms: "Studio",
    bathrooms: 1,
    size: "Compact studio",
    roomSize: "390 × 290 cm",
    view: "Quiet aspect",
    unitsAvailable: 2,
    blurb:
      "A smart, self-contained studio — efficient, spotless and easy to love.",
    description: [
      "The Studio is our most compact stay and our best rate: a well-designed single space with a comfortable sleeping area, a private bathroom and a dedicated desk — everything the essentials-focused traveller needs and nothing they don't.",
      "Efficient, spotless and easy to love. Perfect for short business trips and independent travellers who would rather spend their money on Kigali than on the room they sleep in.",
    ],
    images: [
      { src: "/assets/studio-bedroom.jpg", alt: "Double bed with striped linen and bedside lamp in the Studio Apartment Hotel at Ink & S, Kigali" },
      { src: "/assets/studio-shower.jpg", alt: "Tiled walk-in rain shower in the Studio Apartment Hotel at Ink & S, Kigali" },
    ],
    amenities: [...BASE_AMENITIES, "Compact, efficient layout", "Double bed", "Best nightly rate"],
  },
];

export const getUnit = (slug: string) => UNITS.find((u) => u.slug === slug);

/** Display form of a unit's standard nightly rate, e.g. "$102 / night". */
export const nightlyRate = (u: Pick<Unit, "priceUSD">) =>
  `$${u.priceUSD} / night`;
