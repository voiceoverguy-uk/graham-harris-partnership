import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Graham Harris Partnership",
    template: "%s | Graham Harris Partnership",
  },
  description:
    "Graham Harris Partnership Ltd. – Architects in South Leicestershire offering planning permission, building regulations, architectural design, and measured surveys.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Graham Harris Partnership Ltd.",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Graham Harris Partnership Ltd. – Architectural Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Graham Harris Partnership",
  url: "https://www.grahamharrispartnership.co.uk/",
  email: "info@grahamharrispartnership.co.uk",
  description:
    "Family-run architectural practice in South Leicestershire providing planning permission drawings, building regulations drawings, architectural design and measured surveys.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "South Leicestershire, United Kingdom",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architectural Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Planning Permission Drawings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Building Regulations Drawings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Measured Surveys",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <Nav />
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
