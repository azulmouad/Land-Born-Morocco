"use client";

import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, DollarSign, Calendar } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "The Golden Desert Trek",
    slug: "golden-sahara-trek",
    image: "/images/hero-1.png", // Reusing hero image for now
    description:
      "A 3-day journey into the heart of the Sahara. Camel rides, starry nights, and Berber hospitality.",
    price: 350,
    duration: "3 Days",
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
  },
  {
    id: 4,
    title: "Coastal Breeze",
    slug: "imperial-cities-tour",
    image: "/images/hero-2.png", // Placeholder
    description:
      "Relax in Essaouira and Agadir. Fresh seafood, ocean views, and history.",
    price: 200,
    duration: "4 Days",
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
  },
];

export default function ToursSection() {
  return (
    <section id="tours" className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-sand font-semibold uppercase tracking-widest mb-2 text-sm md:text-base">
            Discover Magic
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-deep-blue">
            Our Popular Tours
          </h3>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12 pt-4 px-4 md:px-4 -mx-4 md:-mx-4 snap-x snap-mandatory scrollbar-hide">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-clay font-bold text-sm shadow-sm flex items-center">
                  <DollarSign size={14} className="mr-1" /> From ${tour.price}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Clock size={16} className="text-sand mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-sand mr-1" />
                    Daily Dep.
                  </div>
                </div>

                <h4 className="text-xl font-bold text-deep-blue mb-2 font-heading group-hover:text-clay transition-colors">
                  {tour.title}
                </h4>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {tour.description}
                </p>

                <Link
                  href={`/tours/${tour.slug}`}
                  className="w-full py-3 bg-deep-blue text-white rounded-xl font-medium hover:bg-clay transition-colors flex items-center justify-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
