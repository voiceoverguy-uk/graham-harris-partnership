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

export default function GalleryPage() {
  return (
    <article>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
        Featured Projects
      </h1>
      <GalleryCarousel images={galleryImages} />
    </article>
  );
}
