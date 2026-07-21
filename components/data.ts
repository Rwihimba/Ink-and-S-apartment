// Content extracted verbatim from the Claude Design source (Ink & S Landing).

export const WA_LINK = "https://wa.me/250796707342";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Apartments", href: "/apartments" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export type Apartment = {
  name: string;
  tag: string;
  price: string;
  img: string;
  alt: string;
  blurb: string;
};

export const APARTMENTS: Apartment[] = [
  {
    name: "Grand Executive Apartment",
    tag: "Signature",
    price: "Price on request",
    img: "/assets/bedroom-3.jpg",
    alt: "Grand Executive Apartment bedroom retreat at Ink & S in Kigali",
    blurb:
      "Our largest suite — a serene bedroom retreat with room to work and unwind.",
  },
  {
    name: "Prime Apartment",
    tag: "Most Popular",
    price: "Price on request",
    img: "/assets/living-1.jpg",
    alt: "Prime Apartment open living space at Ink & S in Kigali",
    blurb:
      "Open living space bathed in light, made for longer, comfortable stays.",
  },
  {
    name: "Cozy Apartment",
    tag: "Great Value",
    price: "Price on request",
    img: "/assets/bedroom-1.jpg",
    alt: "Cozy Apartment warm bedroom at Ink & S in Kigali",
    blurb:
      "Warm, restful and intimate — everything you need, nothing you don’t.",
  },
  {
    name: "Classic Apartment",
    tag: "Essentials",
    price: "Price on request",
    img: "/assets/bedroom-2.jpg",
    alt: "Classic self-contained studio apartment at Ink & S in Kigali",
    blurb:
      "A smart, self-contained studio — efficient, spotless and easy to love.",
  },
];

export const BENEFITS = [
  {
    num: "01",
    title: "Fully Furnished",
    text: "Move in comfortably from day one — every detail is already taken care of.",
  },
  {
    num: "02",
    title: "High-Speed Internet",
    text: "Reliable, fast WiFi throughout, perfect for remote work and video calls.",
  },
  {
    num: "03",
    title: "Professionally Cleaned",
    text: "Hotel-level cleaning before every stay, so your space feels immaculate.",
  },
  {
    num: "04",
    title: "Self Check-in",
    text: "Arrive whenever is convenient — check in on your own schedule.",
  },
  {
    num: "05",
    title: "Free Parking",
    text: "Secure on-site parking at no extra cost. No surprises, ever.",
  },
  {
    num: "06",
    title: "Local Support",
    text: "Friendly, on-hand assistance whenever you need a little help.",
  },
];

export const LIFESTYLE = [
  { n: "01", text: "Work remotely from elegant, light-filled spaces." },
  { n: "02", text: "Wake up to panoramic Kigali city views." },
  { n: "03", text: "Walk to the city’s finest restaurants and cafés." },
  { n: "04", text: "Relax and reset after a full day of meetings." },
  { n: "05", text: "Enjoy peaceful, restful nights in quiet luxury." },
];

export const ATTRACTIONS = [
  {
    name: "Simba Center",
    time: "1 minute drive",
    src: "/assets/attr-simba.jpg",
    alt: "Simba Center near the Ink & S apartment in Kigali",
  },
  {
    name: "Kacyiru Green Carpet Complex",
    time: "9 minutes drive",
    src: "/assets/attr-kacyiru.jpg",
    alt: "Kacyiru Green Carpet sports complex near the Ink & S apartment in Kigali",
  },
  {
    name: "Kigali Convention Centre",
    time: "12 minutes drive",
    src: "/assets/attr-kcc.jpg",
    alt: "Kigali Convention Centre near the Ink & S apartment in Kigali",
  },
  {
    name: "Kigali Heights",
    time: "11 minutes drive",
    src: "/assets/attr-heights.jpg",
    alt: "Kigali Heights mall near the Ink & S apartment in Kigali",
  },
  {
    name: "BK Arena",
    time: "10 minutes drive",
    src: "/assets/attr-bk.jpg",
    alt: "BK Arena near the Ink & S apartment in Kigali",
  },
  {
    name: "Kigali International Airport",
    time: "12 minutes drive",
    src: "/assets/attr-airport.jpg",
    alt: "Kigali International Airport near the Ink & S apartment in Kigali",
  },
];

export const REVIEWS = [
  { quote: "The apartment looked even better than the photos.", name: "Sarah" },
  { quote: "Fast WiFi, spotless rooms and an amazing host.", name: "David" },
  {
    quote:
      "The perfect base for a work trip — calm, central and beautifully kept.",
    name: "Aline",
  },
  {
    quote:
      "We felt completely at home. We’ll be back on our next visit to Kigali.",
    name: "Michael",
  },
];

export type GalleryItem = { cat: string; img: string; alt: string };

export const GALLERY: GalleryItem[] = [
  { cat: "Living Room", img: "/assets/living-1.jpg", alt: "Living room of the Ink & S apartment in Kigali" },
  { cat: "Living Room", img: "/assets/living-2.jpg", alt: "Bright living space in the Ink & S apartment in Kigali" },
  { cat: "Bedroom", img: "/assets/bedroom-1.jpg", alt: "Cozy bedroom in the Ink & S apartment in Kigali" },
  { cat: "Bedroom", img: "/assets/bedroom-3.jpg", alt: "Executive bedroom in the Ink & S apartment in Kigali" },
  { cat: "Bedroom", img: "/assets/bedroom-2.jpg", alt: "Classic bedroom in the Ink & S apartment in Kigali" },
  { cat: "Balcony", img: "/assets/balcony-1.jpg", alt: "Balcony of the Ink & S apartment overlooking Kigali" },
  { cat: "Balcony", img: "/assets/exterior-1.jpg", alt: "Exterior view of the Ink & S apartment building in Kigali" },
];

export const GALLERY_TABS = [
  "All",
  "Living Room",
  "Bedroom",
  "Bathroom",
  "Balcony",
  "Parking",
];

export const FAQS = [
  {
    q: "Can I cancel my booking?",
    a: "Yes. We offer flexible cancellation — cancel free of charge up to 48 hours before check-in. Get in touch and we’ll always try to accommodate changes.",
  },
  {
    q: "Do you offer airport pickup?",
    a: "Absolutely. Airport pickup can be arranged in advance for a smooth arrival. Just let us know your flight details when you book.",
  },
  {
    q: "Do you allow pets?",
    a: "We love animals, but our apartments are currently pet-free to keep them pristine for every guest. Please reach out if you have specific needs.",
  },
  {
    q: "How do I check in?",
    a: "Check-in is contactless and on your schedule. We’ll send simple self check-in instructions and access codes ahead of your arrival.",
  },
  {
    q: "Do you have WiFi?",
    a: "Yes — fast, reliable high-speed internet is included in every apartment, ideal for remote work and streaming.",
  },
  {
    q: "Can I stay for one month?",
    a: "Of course. We welcome extended and monthly stays and offer preferential rates for longer bookings. Message us for a tailored quote.",
  },
  {
    q: "Do you provide cleaning?",
    a: "Every apartment is professionally cleaned to hotel standards before arrival. Mid-stay cleaning can also be arranged on request.",
  },
];

/** Fuller list used on the dedicated /faq page (with FAQPage schema). */
export const FAQS_FULL = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 2:00 PM and check-out is by 11:00 AM. Check-in is contactless and on your schedule — we send self check-in instructions and access codes before you arrive. Early check-in or late check-out can often be arranged; just ask.",
  },
  {
    q: "How do I check in?",
    a: "Check-in is fully self-service and contactless. Ahead of arrival we send clear instructions, the building address with a map pin, and your door access code — so you can arrive any time, day or night, without waiting for anyone.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Mobile Money (MTN MoMo and Airtel Money), Visa and Mastercard, bank transfer, and cash in RWF or USD. For international guests, card or bank transfer is usually easiest; local guests often prefer MoMo.",
  },
  {
    q: "Can I pay with MTN Mobile Money (MoMo)?",
    a: "Yes. MTN MoMo and Airtel Money are both accepted and are the fastest way to pay locally. Message us on WhatsApp and we'll send a MoMo request or merchant code; your booking is confirmed the moment payment lands.",
  },
  {
    q: "Do you require a deposit?",
    a: "A small refundable security deposit may apply for longer stays, refunded within a few days of check-out after a quick inspection. For most short stays we simply take payment for the nights booked.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Yes — we offer flexible cancellation. Cancel free of charge up to 48 hours before check-in for a full refund. Need to shift your dates? Get in touch and we'll always try to accommodate changes.",
  },
  {
    q: "Do you offer airport pickup?",
    a: "Absolutely. Kigali International Airport is about a 12-minute drive away, and we can arrange a trusted driver to meet you on arrival for a fixed, agreed fare. Just share your flight number and arrival time when you book.",
  },
  {
    q: "How fast is the WiFi — can I work and take video calls?",
    a: "Yes. Every apartment has reliable fibre high-speed internet suited to remote work, large downloads, HD streaming and back-to-back video calls. There's a dedicated desk workspace in each unit, and backup power keeps you online during any outages.",
  },
  {
    q: "Is the property secure?",
    a: "Security is a priority: the building has 24/7 security personnel, gated secure parking, exterior lighting and keyless door access unique to your stay. Kacyiru/Gishushu is also one of Kigali's calmest, safest neighbourhoods.",
  },
  {
    q: "Is parking available?",
    a: "Yes — free, secure on-site parking is included at no extra cost, with no surprises. If you're arriving by ride-hail or taxi instead, drop-off is right at the entrance.",
  },
  {
    q: "Is breakfast really included?",
    a: "Yes, a fresh breakfast is complimentary with your stay — eggs your way, golden toast, seasonal fruit, fresh juice and locally roasted Rwandan coffee, prepared for you each morning.",
  },
  {
    q: "Can I stay for a month or longer?",
    a: "Of course. We welcome extended and monthly stays and offer preferential rates for longer bookings, which makes us a popular, cost-effective alternative to hotels for relocations and long work trips. Message us for a tailored monthly quote.",
  },
  {
    q: "Do you allow pets?",
    a: "We love animals, but our apartments are currently pet-free so they stay pristine for every guest, including those with allergies. If you have specific needs, reach out and we'll do our best to help.",
  },
  {
    q: "Is smoking allowed?",
    a: "All apartments are non-smoking indoors to keep them fresh for every guest. You're welcome to smoke on the balcony or in designated outdoor areas.",
  },
  {
    q: "Do you provide cleaning during my stay?",
    a: "Every apartment is professionally cleaned to hotel standards before arrival. For longer stays, mid-stay cleaning and fresh linens can be scheduled on request.",
  },
];
