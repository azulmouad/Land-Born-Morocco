"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "United Kingdom",
    rating: 5,
    text: "Omar made our trip to Morocco absolutely unforgettable. His knowledge of the local culture and hidden gems was incredible. We felt safe and welcomed everywhere we went.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Canada",
    rating: 5,
    text: "The desert tour was the highlight of our year! Everything was perfectly organized, from the camel ride to the luxury camp. Highly recommend Land Born Morocco!",
  },
  {
    id: 3,
    name: "Emma & David",
    location: "Australia",
    rating: 5,
    text: "We were hesitant about booking a guide, but Omar was fantastic. He wasn't just a guide, he became a friend. The authentic meals we had with local families were priceless.",
  },
  {
    id: 4,
    name: "Thomas Muller",
    location: "Germany",
    rating: 5,
    text: "The Atlas Mountains trek was breathtaking. Omar organized everything perfectly. We felt very safe and comfortable. Eine wunderbare Erfahrung!",
  },
  {
    id: 5,
    name: "Jessica & Tom",
    location: "USA",
    rating: 5,
    text: "We loved the Chefchaouen day trip. It is such a photogenic city! Our driver was punctual and very polite. Highly recommended for couples.",
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    location: "Spain",
    rating: 5,
    text: "Increíble viaje. The night in the desert was the best part. Sleeping under the stars is a must-do. Thank you Land Born Morocco!",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const movePercentage = isMobile ? 85 : 100 / 3;

  // Auto-scroll
  useEffect(() => {
    if (isMobile) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isMobile]); // Re-create interval on index change to reset timer

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 bg-cream relative group overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <h2 className="text-sand font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">
          Testimonials
        </h2>
        <h3 className="text-3xl md:text-5xl font-heading font-bold text-deep-blue mb-10 md:mb-16">
          What Our Guests Say
        </h3>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 lg:-translate-x-12 z-20 bg-white/80 hover:bg-white text-deep-blue w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg backdrop-blur-sm transition-all transform hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 lg:translate-x-12 z-20 bg-white/80 hover:bg-white text-deep-blue w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg backdrop-blur-sm transition-all transform hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden py-8 px-2">
            <motion.div
              className="flex"
              // Move by percentage based on how many items are visible
              // 1 item visible -> move 100% per index
              // 3 items visible -> move 33.333% per index
              animate={{
                x: `-${currentIndex * movePercentage}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;

                if (swipe < -10000 || offset.x < -100) {
                  nextSlide();
                } else if (swipe > 10000 || offset.x > 100) {
                  prevSlide();
                }
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex-shrink-0 px-3",
                    isMobile ? "w-[85%]" : "w-1/3",
                  )}
                >
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 relative h-full flex flex-col items-center text-center">
                    <Quote
                      className="absolute top-6 right-6 text-sand/20 transform rotate-180"
                      size={32}
                    />

                    <div className="flex justify-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="text-sand fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow text-sm md:text-base">
                      &quot;{review.text}&quot;
                    </p>

                    <div className="mt-auto">
                      <h4 className="font-bold text-deep-blue text-base md:text-lg">
                        {review.name}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={clsx(
                  "h-2 rounded-full transition-all duration-300",
                  idx === currentIndex
                    ? "bg-sand w-6"
                    : "bg-gray-300 w-2 hover:bg-gray-400",
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
