import type { Metadata } from "next";
import { connection } from "next/server";
import GalleryCarousel from "@/components/GalleryCarousel";
import { galleryImages } from "@/data/gallery";
import { BASE_URL, BUSINESS_ID, sharedOpenGraph, sharedTwitter } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery – Architectural Projects",
  description:
    "Browse architectural projects by Graham Harris Partnership in South Leicestershire. House extensions, new builds, barn conversions, listed buildings, and more.",
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Gallery – Architectural Projects | Graham Harris Partnership Ltd.",
    description:
      "Browse architectural projects in South Leicestershire. House extensions, new builds, barn conversions, listed buildings, and more.",
    url: `${BASE_URL}/gallery`,
  },
  twitter: {
    ...sharedTwitter,
    title: "Gallery – Architectural Projects | Graham Harris Partnership Ltd.",
    description:
      "Browse architectural projects in South Leicestershire. House extensions, new builds, barn conversions, listed buildings, and more.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/gallery#webpage`,
  url: `${BASE_URL}/gallery`,
  name: "Architectural Projects Gallery – Graham Harris Partnership",
  description:
    "A gallery of architectural projects completed by Graham Harris Partnership in South Leicestershire, including house extensions, new builds, barn conversions, listed buildings, and residential design examples.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": BUSINESS_ID },
};

export default async function GalleryPage() {
  // Shuffle during the request so the first image is already present in the
  // initial HTML and stays the same during hydration.
  await connection();
  const shuffledImages = [...galleryImages];
  for (let i = shuffledImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
          Architectural Projects and Design Examples
        </h1>
        <GalleryCarousel images={shuffledImages} />
      </article>
    </>
  );
}
