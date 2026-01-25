"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

// Mock Data - aligning with DestinationsSection but potentially expanded
const DESTINATIONS = [
  {
    id: 1,
    name: "Marrakech",
    slug: "marrakech",
    image: "/images/marrakech-square.png",
    description:
      "The Red City, famous for its bustling souks, historic palaces, and vibrant Jemaa el-Fnaa square.",
    highlights: ["Jemaa el-Fnaa", "Bahia Palace", "Majorelle Garden"],
  },
  {
    id: 2,
    name: "Sahara Desert",
    slug: "sahara-desert",
    image: "/images/hero-1.png",
    description:
      "Experience the magic of the endless dunes, camel treks into the sunset, and sleeping under a blanket of stars.",
    highlights: ["Merzouga Dunes", "Desert Camp", "Star Gazing"],
  },
  {
    id: 3,
    name: "Chefchaouen",
    slug: "chefchaouen",
    image: "/images/hero-2.png",
    description:
      "The Blue Pearl of Morocco, nestled in the Rif Mountains, known for its striking blue-washed streets.",
    highlights: ["Blue Streets", "Spanish Mosque", "Kasbah"],
  },
  {
    id: 4,
    name: "Atlas Mountains",
    slug: "atlas-mountains",
    image: "/images/hero-3.png",
    description:
      "Majestic peaks offering incredible trekking opportunities and a glimpse into traditional Berber village life.",
    highlights: ["Toubkal Summit", "Ourika Valley", "Berber Villages"],
  },
  {
    id: 5,
    name: "Fes",
    slug: "fes",
    image: "/images/blog-1.png",
    description:
      "The cultural and spiritual heart of Morocco, home to the world's oldest university and a labyrinthine medina.",
    highlights: ["Al Quaraouiyine", "Tanneries", "Bou Inania Madrasa"],
  },
  {
    id: 6,
    name: "Essaouira",
    slug: "essaouira",
    image: "/images/hero-2.png", // Reusing image as placeholder if needed, or specific if available
    description:
      "A laid-back coastal city with a charming medina, windy beaches perfect for kite surfing, and fresh seafood.",
    highlights: ["Skala de la Ville", "Beach", "Medina"],
  },
  {
    id: 7,
    name: "Casablanca",
    slug: "casablanca",
    image: "/images/hero-1.png", // Placeholder
    description:
      "Morocco's modern commercial hub, featuring the magnificent Hassan II Mosque overlooking the ocean.",
    highlights: ["Hassan II Mosque", "Corniche", "Art Deco Architecture"],
  },
  {
    id: 8,
    name: "Ouarzazate",
    slug: "ouarzazate",
    image: "/images/hero-3.png", // Placeholder
    description:
      "The gateway to the desert and filming location for many famous movies, known as the 'Hollywood of Africa'.",
    highlights: ["Ait Ben Haddou", "Film Studios", "Taourirt Kasbah"],
  },
];

export default function DestinationsPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <PageHeader
        image="/images/hero-2.png" // Choose a nice header image
        title="Destinations"
        subtitle="Discover the diverse landscapes and vibrant cities of Morocco."
      />

      {/* Content */}
      <section className="py-16 md:py-24 px-4 md:px-12 grow">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-clay font-semibold uppercase tracking-widest mb-3">
              Where to Go
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From the golden dunes of the Sahara to the blue streets of
              Chefchaouen, explore the locations that make Morocco a traveler's
              dream.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-deep-blue shadow-sm flex items-center gap-1">
                    <MapPin size={12} className="text-clay" />
                    Morocco
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <Link href={`/tours?search=${dest.slug}`}>
                    <h3 className="text-2xl font-heading font-bold text-deep-blue mb-3 group-hover:text-clay transition-colors">
                      {dest.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dest.highlights.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-sand/10 text-clay-dark px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/tours?search=${dest.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-deep-blue font-semibold text-sm hover:translate-x-1 transition-transform"
                  >
                    View Tours <ArrowRight size={16} className="text-clay" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
