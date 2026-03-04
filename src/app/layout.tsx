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

export const metadata: Metadata = {
  title: {
    default: "Graham Harris Partnership Ltd. | Architectural Services",
    template: "%s | Graham Harris Partnership Ltd.",
  },
  description:
    "Graham Harris Partnership Ltd. provides professional architectural services including planning permission, building regulations, and design consultation.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Graham Harris Partnership Ltd.",
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
