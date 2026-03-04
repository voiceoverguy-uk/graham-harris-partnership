"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";
import LightboxModal from "./LightboxModal";

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

interface Props {
  images: GalleryImage[];
}

export default function GalleryCarousel({ images }: Props) {
  const [displayImages, setDisplayImages] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setDisplayImages(shuffle(images));
  }, [images]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, displayImages.length - slidesPerView);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const totalPages = Math.ceil(displayImages.length / slidesPerView);
  const currentPage = Math.floor(currentIndex / slidesPerView);

  return (
    <>
      <div className="relative">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 cursor-pointer"
                style={{ width: `${100 / slidesPerView}%` }}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * slidesPerView)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentPage ? "bg-gray-700" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <LightboxModal
          images={displayImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
