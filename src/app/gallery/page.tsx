import type { Metadata } from "next";
import GalleryCarousel from "@/components/GalleryCarousel";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of architectural projects including house extensions, new builds, barn conversions, and more.",
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
