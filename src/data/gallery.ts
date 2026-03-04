export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = Array.from(
  { length: 49 },
  (_, i) => ({
    src: `/gallery/GHP-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Project ${i + 1}`,
    caption: `Project ${i + 1}`,
  })
);
