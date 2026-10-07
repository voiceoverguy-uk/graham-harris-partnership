import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BASE_URL, sharedOpenGraph, sharedTwitter, siteJsonLd } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Graham Harris Partnership",
    template: "%s | Graham Harris Partnership",
  },
  description:
    "Graham Harris Partnership Ltd. provides architectural services in South Leicestershire, including planning permission, building regulations, architectural design, and measured surveys.",
  openGraph: {
    ...sharedOpenGraph,
    url: BASE_URL,
  },
  twitter: sharedTwitter,
  alternates: {
    canonical: BASE_URL,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
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
