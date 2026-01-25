"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import TourFilter from "@/components/tours/TourFilter";
import TourGrid from "@/components/tours/TourGrid";
import Footer from "@/components/Footer";

// Mock Data
const ALL_TOURS = [
  {
    id: 1,
    title: "The Golden Desert Trek",
    slug: "golden-sahara-trek",
    image: "/images/hero-1.png",
    description:
      "A 3-day journey into the heart of the Sahara. Camel rides, starry nights, and Berber hospitality.",
    price: 350,
    duration: "3 Days",
    category: "Desert",
    tags: ["Adventure", "Cultural", "Nature"],
  },
  {
    id: 2,
    title: "Imperial Cities Tour",
    slug: "imperial-cities-tour",
    image: "/images/hero-2.png",
    description:
      "Discover the history of Fez, Marrakech, Rabat, and Meknes in this comprehensive cultural tour.",
    price: 550,
    duration: "7 Days",
    category: "City",
    tags: ["History", "Cultural", "Walking"],
  },
  {
    id: 3,
    title: "Atlas Mountains Escape",
    slug: "atlas-mountains-escape",
    image: "/images/hero-3.png",
    description:
      "Hike through the stunning Atlas Mountains and visit traditional Berber villages.",
    price: 150,
    duration: "2 Days",
    category: "Mountains",
    tags: ["Adventure", "Nature", "Hiking"],
  },
  {
    id: 4,
    title: "Coastal Breeze",
    slug: "imperial-cities-tour",
    image: "/images/hero-2.png",
    description:
      "Relax in Essaouira and Agadir. Fresh seafood, ocean views, and history.",
    price: 200,
    duration: "4 Days",
    category: "Coastal",
    tags: ["Relax", "Nature", "Food"],
  },
  {
    id: 5,
    title: "Grand Morocco Tour",
    slug: "imperial-cities-tour",
    image: "/images/hero-1.png",
    description:
      "The ultimate 14-day adventure covering the entire country from North to South.",
    price: 1200,
    duration: "14 Days",
    category: "Multi-Region",
    tags: ["Adventure", "History", "Cultural", "Luxury"],
  },
  {
    id: 6,
    title: "Chefchaouen Day Trip",
    slug: "atlas-mountains-escape",
    image: "/images/hero-2.png",
    description:
      "A day trip to the Blue Pearl of Morocco. Perfect for photography lovers.",
    price: 80,
    duration: "1 Day",
    category: "City",
    tags: ["Photography", "Walking", "Cultural"],
  },
  {
    id: 7,
    title: "Luxury Desert Glamping",
    slug: "golden-sahara-trek",
    image: "/images/hero-1.png",
    description:
      "Experience the desert in style with private tents, gourmet dining, and 4x4 transfers.",
    price: 850,
    duration: "3 Days",
    category: "Desert",
    tags: ["Luxury", "Relax", "Romantic"],
  },
  {
    id: 8,
    title: "Surfing in Taghazout",
    slug: "imperial-cities-tour",
    image: "/images/hero-3.png",
    description:
      "Catch the best waves in Morocco's surfing capital. Includes lessons and gear.",
    price: 400,
    duration: "5 Days",
    category: "Coastal",
    tags: ["Adventure", "Sport", "Nature"],
  },
];

const CATEGORIES = ["Desert", "City", "Mountains", "Coastal", "Multi-Region"];
const TAGS = [
  "Adventure",
  "Cultural",
  "Relax",
  "History",
  "Nature",
  "Luxury",
  "Hiking",
  "Photography",
];
const MIN_PRICE = 0;
const MAX_PRICE = 2000;

export default function ToursPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    MIN_PRICE,
    MAX_PRICE,
  ]);

  // Handler functions
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  // Filter Logic
  const filteredTours = useMemo(() => {
    return ALL_TOURS.filter((tour) => {
      const matchesCategory = selectedCategory
        ? tour.category === selectedCategory
        : true;
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesTags =
        selectedTags.length > 0
          ? selectedTags.every((tag) => tour.tags?.includes(tag))
          : true;

      return matchesCategory && matchesPrice && matchesTags;
    });
  }, [selectedCategory, selectedTags, priceRange]);

  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <Navbar variant="opaque" />

      {/* Header */}
      <section className="bg-deep-blue text-white pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            Explore Morocco
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Find your perfect adventure among our curated selection of tours.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="grow py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-deep-blue font-medium w-full justify-center border border-gray-200"
            >
              <Filter size={20} />
              Show Filters
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:block w-72 shrink-0 sticky top-24 h-fit">
              <TourFilter
                categories={CATEGORIES}
                tags={TAGS}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategory}
                onTagToggle={handleTagToggle}
                onPriceChange={handlePriceChange}
              />
            </aside>

            {/* Main Content */}
            <div className="grow">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-500 text-sm">
                  Showing{" "}
                  <span className="font-bold text-deep-blue">
                    {filteredTours.length}
                  </span>{" "}
                  results
                </p>
                {/* Clear Filters helper - only show if filters are active */}
                {(selectedCategory ||
                  selectedTags.length > 0 ||
                  priceRange[1] < MAX_PRICE) && (
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedTags([]);
                      setPriceRange([MIN_PRICE, MAX_PRICE]);
                    }}
                    className="text-clay text-sm font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              <TourGrid tours={filteredTours} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Sidebar Overlay */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-white z-50 md:hidden overflow-y-auto shadow-2xl"
            >
              <TourFilter
                categories={CATEGORIES}
                tags={TAGS}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategory}
                onTagToggle={handleTagToggle}
                onPriceChange={handlePriceChange}
                className="h-full rounded-none shadow-none border-none"
                isOpen={true}
                onClose={() => setIsMobileFilterOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}
