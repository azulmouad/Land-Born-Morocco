"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Marrakech",
    image: "/images/marrakech-square.png", // Generated
    description: "The Red City, famous for its souks and palaces.",
  },
  {
    id: 2,
    name: "Sahara Desert",
    image: "/images/hero-1.png", // Existing
    description: "Endless dunes and starry nights.",
  },
  {
    id: 3,
    name: "Chefchaouen",
    image: "/images/hero-2.png", // Existing
    description: "The Blue Pearl nestled in the Rif Mountains.",
  },
  {
    id: 4,
    name: "Atlas Mountains",
    image: "/images/hero-3.png", // Existing
    description: "Majestic peaks and Berber villages.",
  },
  {
    id: 5,
    name: "Fes",
    image: "/images/blog-1.png", // Using tea image as placeholder/cultural
    description: "The cultural and spiritual heart of Morocco.",
  },
  {
    id: 6,
    name: "Essaouira",
    image: "/images/hero-2.png", // Reusing Chefchaouen for now or can use another if available
    description: "Windy coastal city with Portuguese fortress.",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-sand font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">
            Explore
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-deep-blue">
            Top Destinations
          </h3>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0 snap-x snap-mandatory scrollbar-hide">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85%] md:w-auto snap-center group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-2xl font-bold text-white font-heading mb-1">
                  {dest.name}
                </h4>
                <p className="text-white/90 text-sm font-medium">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
