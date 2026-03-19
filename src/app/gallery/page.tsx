import type { Metadata } from "next";
import GalleryCarousel from "@/components/GalleryCarousel";
import { galleryImages } from "@/data/gallery";

const BASE_URL = "https://www.grahamharrispartnership.co.uk";

export const metadata: Metadata = {
  title: "Gallery – Architectural Projects",
  description:
    "Browse architectural projects by Graham Harris Partnership in South Leicestershire. House extensions, new builds, barn conversions, listed buildings, and more.",
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: "Gallery – Architectural Projects | Graham Harris Partnership Ltd.",
    description:
      "Browse architectural projects in South Leicestershire. House extensions, new builds, barn conversions, listed buildings, and more.",
    url: `${BASE_URL}/gallery`,
  },
  twitter: {
    card: "summary_large_image",
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
  about: {
    "@type": "ProfessionalService",
    name: "Graham Harris Partnership",
    url: BASE_URL,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "South Leicestershire, United Kingdom",
    },
  },
};

export default function GalleryPage() {
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
        <GalleryCarousel images={galleryImages} />
      </article>
    </>
  );
}
