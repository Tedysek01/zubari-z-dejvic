import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zubaři z Dejvic — Zubní ordinace v Dejvicích",
  description:
    "Kvalitní stomatologie založená na důvěře, precizní práci a individuálním přístupu. Kafkova 16, Praha 6.",
  other: {
    "theme-color": "#F5F1EC",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Zubaři z Dejvic",
  alternateName: "Zubaři z Dejvic s.r.o.",
  url: "https://www.zubarizdejvic.cz",
  telephone: "+420602595134",
  email: "stomordinace@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kafkova 605/16",
    addressLocality: "Praha 6",
    addressRegion: "Hlavní město Praha",
    postalCode: "160 00",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.1003,
    longitude: 14.3936,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "14:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "12:00" },
  ],
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
  availableService: [
    "Vstupní vyšetření",
    "Dentální hygiena",
    "Ošetření zubního kazu",
    "Mikroskopická endodoncie",
    "Estetické korekce",
    "Fazety a korunky",
    "Chirurgické ošetření",
    "Zubní implantáty",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-linen text-charcoal font-sans font-light leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
