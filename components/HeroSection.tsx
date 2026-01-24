"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.png",
    title: "The Golden Sahara",
    subtitle: "Experience the magic of the desert under the stars.",
  },
  {
    image: "/images/hero-2.png",
    title: "Blue City Charm",
    subtitle: "Get lost in the vibrant streets of Chefchaouen.",
  },
  {
    image: "/images/hero-3.png",
    title: "Majestic Atlas",
    subtitle: "Breathtaking views from the top of North Africa.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
        >
          <h2 className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 text-sand-light">
            Welcome to Morocco
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 drop-shadow-lg leading-tight">
            LAND BORN <br/> <span className="text-sand">MOROCCO</span>
          </h1>
          <p className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          
          <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
          >
            <a
              href="#tours"
              className="inline-block px-8 py-4 bg-clay hover:bg-clay-dark text-white text-lg font-semibold rounded-full shadow-xl transition-all"
            >
              Discover Tours
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 inset-x-0 flex items-center justify-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-white/50 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-sand w-8" : "bg-white/50"
                    }`}
                />
            ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-white/50 text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
