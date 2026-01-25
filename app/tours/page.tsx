"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import TourFilter from "@/components/tours/TourFilter";
import TourGrid from "@/components/tours/TourGrid";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

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
    city: "Sahara Desert",
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
    city: "Multi-City", // Or specifically Fes, Marrakech... let's keep it simple for filtering
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
    city: "Atlas Mountains",
    tags: ["Adventure", "Nature", "Hiking"],
  },
  {
    id: 4,
    title: "Coastal Breeze",
    slug: "coastal-breeze",
    image: "/images/hero-2.png",
    description:
      "Relax in Essaouira and Agadir. Fresh seafood, ocean views, and history.",
    price: 200,
    duration: "4 Days",
    category: "Coastal",
    city: "Essaouira",
    tags: ["Relax", "Nature", "Food"],
  },
  {
    id: 5,
    title: "Grand Morocco Tour",
    slug: "grand-morocco-tour",
    image: "/images/hero-1.png",
    description:
      "The ultimate 14-day adventure covering the entire country from North to South.",
    price: 1200,
    duration: "14 Days",
    category: "Multi-Region",
    city: "Multi-City",
    tags: ["Adventure", "History", "Cultural", "Luxury"],
  },
  {
    id: 6,
    title: "Chefchaouen Day Trip",
    slug: "chefchaouen-day-trip",
    image: "/images/hero-2.png",
    description:
      "A day trip to the Blue Pearl of Morocco. Perfect for photography lovers.",
    price: 80,
    duration: "1 Day",
    category: "City",
    city: "Chefchaouen",
    tags: ["Photography", "Walking", "Cultural"],
  },
  {
    id: 7,
    title: "Luxury Desert Glamping",
    slug: "luxury-desert-glamping",
    image: "/images/hero-1.png",
    description:
      "Experience the desert in style with private tents, gourmet dining, and 4x4 transfers.",
    price: 850,
    duration: "3 Days",
    category: "Desert",
    city: "Sahara Desert",
    tags: ["Luxury", "Relax", "Romantic"],
  },
  {
    id: 8,
    title: "Surfing in Taghazout",
    slug: "surfing-taghazout",
    image: "/images/hero-3.png",
    description:
      "Catch the best waves in Morocco's surfing capital. Includes lessons and gear.",
    price: 400,
    duration: "5 Days",
    category: "Coastal",
    city: "Taghazout",
    tags: ["Adventure", "Sport", "Nature"],
  },
  {
    id: 9,
    title: "Marrakech Market Tour",
    slug: "marrakech-market-tour",
    image: "/images/marrakech-square.png",
    description:
      "Explore the hidden gems of the Medina souks and taste local street food.",
    price: 60,
    duration: "1 Day",
    category: "City",
    city: "Marrakech",
    tags: ["Food", "Walking", "Cultural"],
  },
  {
    id: 10,
    title: "Ouarzazate Film Studio Tour",
    slug: "ouarzazate-film-tour",
    image: "/images/hero-3.png",
    description:
      "Visit the Hollywood of Africa and see where Gladiator and Game of Thrones were filmed.",
    price: 90,
    duration: "1 Day",
    category: "City",
    city: "Ouarzazate",
    tags: ["History", "Cultural"],
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
  "Food",
  "Sport",
];

// Extract Unique Cities
const CITIES = Array.from(new Set(ALL_TOURS.map((t) => t.city))).sort();

const MIN_PRICE = 0;
const MAX_PRICE = 2000;

function ToursContent() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const searchParams = useSearchParams();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    MIN_PRICE,
    MAX_PRICE,
  ]);

  // Initial load from URL
  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      // Logic: Check if search term matches a city
      const cityMatch = CITIES.find(
        (c) => c.toLowerCase() === search.toLowerCase(), // Exact match insensitive
      );

      if (cityMatch) {
        setSelectedCity(cityMatch);
      } else {
        // Maybe also check if it matches a category?
        const catMatch = CATEGORIES.find(
          (c) => c.toLowerCase() === search.toLowerCase(),
        );
        if (catMatch) setSelectedCategory(catMatch);
      }
      // If it doesn't match city or category, we could treat it as a text search,
      // but simpler for now is to just pre-fill filter if strict match.
      // But wait, slug like "ouarzazate" might match city name "Ouarzazate".
      // Slugs are usually kebab-case, so let's handle that.

      if (!cityMatch) {
        // try to match slug-ish to city
        const normalizedSearch = search.replace(/-/g, " ");
        const looseCityMatch = CITIES.find(
          (c) =>
            c.toLowerCase().includes(normalizedSearch.toLowerCase()) ||
            normalizedSearch.toLowerCase().includes(c.toLowerCase()),
        );
        if (looseCityMatch) setSelectedCity(looseCityMatch);
      }
    }
  }, [searchParams]);

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
      const matchesCity = selectedCity ? tour.city === selectedCity : true;
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesTags =
        selectedTags.length > 0
          ? selectedTags.every((tag) => tour.tags?.includes(tag))
          : true;

      return matchesCategory && matchesCity && matchesPrice && matchesTags;
    });
  }, [selectedCategory, selectedCity, selectedTags, priceRange]);

  return (
    <section className="grow py-12 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
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
              cities={CITIES}
              minPrice={MIN_PRICE}
              maxPrice={MAX_PRICE}
              selectedCategory={selectedCategory}
              selectedCity={selectedCity}
              selectedTags={selectedTags}
              priceRange={priceRange}
              onCategoryChange={setSelectedCategory}
              onCityChange={setSelectedCity}
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
              {/* Clear Filters helper */}
              {(selectedCategory ||
                selectedCity ||
                selectedTags.length > 0 ||
                priceRange[1] < MAX_PRICE) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedCity(null);
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
                cities={CITIES}
                minPrice={MIN_PRICE}
                maxPrice={MAX_PRICE}
                selectedCategory={selectedCategory}
                selectedCity={selectedCity}
                selectedTags={selectedTags}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategory}
                onCityChange={setSelectedCity}
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
    </section>
  );
}

export default function ToursPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <PageHeader
        image="/images/hero-1.png"
        title="Explore Morocco"
        subtitle="Find your perfect adventure among our curated selection of tours."
      />

      <Suspense
        fallback={
          <div className="p-12 text-center text-gray-500">Loading Tours...</div>
        }
      >
        <ToursContent />
      </Suspense>

      <Footer />
    </main>
  );
}
