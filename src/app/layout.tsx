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
    default: "Architects in South Leicestershire | Graham Harris Partnership Ltd.",
    template: "%s | Graham Harris Partnership Ltd.",
  },
  description:
    "Graham Harris Partnership Ltd. – Architects in South Leicestershire offering planning permission, building regulations, architectural design, and measured surveys.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Graham Harris Partnership Ltd.",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Architect",
  name: "Graham Harris Partnership",
  url: BASE_URL,
  email: "info@grahamharrispartnership.co.uk",
  description:
    "Architects in South Leicestershire providing professional architectural services including planning permission, building regulations, architectural design, and measured surveys.",
  areaServed: "South Leicestershire, United Kingdom",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Architectural Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Planning Permission",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Building Regulations",
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
