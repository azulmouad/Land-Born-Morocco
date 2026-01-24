"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid } from "lucide-react";

interface TourGalleryProps {
  images: string[];
  title: string;
}

export default function TourGallery({ images, title }: TourGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);

  // Show only first 5 images in the grid
  const displayImages = images.slice(0, 5);
  const hasMore = images.length > 5;

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextMobileSlide = () => {
    setMobileCarouselIndex((prev) => (prev + 1) % images.length);
  };

  const prevMobileSlide = () => {
    setMobileCarouselIndex(
      (prev) => (prev - 1 + images.length) % images.length,
    );
  };

  return (
    <>
      {/* Mobile Carousel */}
      <div className="md:hidden relative h-[300px] overflow-hidden rounded-3xl">
        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileCarouselIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full cursor-pointer"
              onClick={() => openLightbox(mobileCarouselIndex)}
            >
              <Image
                src={images[mobileCarouselIndex]}
                alt={`${title} - ${mobileCarouselIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevMobileSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-deep-blue hover:bg-white transition-colors z-10 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMobileSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-deep-blue hover:bg-white transition-colors z-10 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileCarouselIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === mobileCarouselIndex ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            {mobileCarouselIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-2 md:gap-3 h-[400px] overflow-hidden rounded-3xl">
        {/* Main large image */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group h-full"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0]}
            alt={`${title} - Main`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Smaller images */}
        <div className="flex flex-col gap-2 md:gap-3 h-full col-span-1">
          <div className="relative h-1/2 w-full cursor-pointer group overflow-hidden">
            <Image
              src={images[1]}
              alt={`${title} - 2`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onClick={() => openLightbox(1)}
            />
          </div>
          <div className="relative h-1/2 w-full cursor-pointer group overflow-hidden">
            <Image
              src={images[2]}
              alt={`${title} - 3`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onClick={() => openLightbox(2)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 h-full col-span-1">
          <div className="relative h-1/2 w-full cursor-pointer group overflow-hidden">
            <Image
              src={images[3]}
              alt={`${title} - 4`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onClick={() => openLightbox(3)}
            />
          </div>
          <div className="relative h-1/2 w-full cursor-pointer group overflow-hidden">
            {images[4] && (
              <Image
                src={images[4]}
                alt={`${title} - 5`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onClick={() => openLightbox(4)}
              />
            )}

            {/* View All Button Overlay */}
            <div
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors"
              onClick={() => openLightbox(4)}
            >
              <div className="flex items-center gap-2 text-white font-medium px-4 py-2 border border-white/30 rounded-full bg-black/20 backdrop-blur-sm">
                <Grid size={16} />
                <span>View All Photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={photoIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4"
            >
              <Image
                src={images[photoIndex]}
                alt={`Gallery image ${photoIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <button
              onClick={nextPhoto}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium">
              {photoIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
