import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  OG_IMAGE,
} from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealInit from "@/components/RevealInit";
import JsonLd from "@/components/JsonLd";
import { lodgingLd } from "@/lib/schema";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Ink & S Apartment Hotel",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Ink & S — furnished apartment rentals in Kigali, Rwanda",
      },
    ],
  },
  twitter: {
    // Title/description intentionally omitted so each page derives its own
    // (from its `title`/`description`) instead of inheriting the home page's.
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#16495B",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <head>
        {/* Enable the reveal-on-scroll animation only when JS is present.
            Runs before paint so revealed content never flashes. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <JsonLd data={lodgingLd()} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <RevealInit />
      </body>
    </html>
  );
}
