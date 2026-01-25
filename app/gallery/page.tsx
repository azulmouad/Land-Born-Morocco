"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock Gallery Data with Timeline structure
const GALLERY_EVENTS = [
  {
    id: 1,
    year: "2025",
    title: "Sahara Desert Expedition",
    location: "Merzouga, Morocco",
    description:
      "A magical week exploring the dunes, camping under the stars, and experiencing true nomad life.",
    media: [
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Camel Trek at Sunset",
        size: "large",
      },
      {
        type: "image",
        src: "/images/hero-2.png",
        alt: "Campfire Music",
        size: "small",
      },
      {
        type: "image",
        src: "/images/hero-3.png",
        alt: "Desert Dunes",
        size: "small",
      },
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "The Blue Pearl Adventures",
    location: "Chefchaouen, Morocco",
    description:
      "Wandering through the mesmerizing blue streets of Chefchaouen, capturing color at every corner.",
    media: [
      {
        type: "image",
        src: "/images/hero-2.png",
        alt: "Blue Streets",
        size: "tall",
      },
      {
        type: "video",
        src: "/videos/chefchaouen-clip.mp4",
        thumbnail: "/images/hero-3.png",
        alt: "City Walk",
        size: "small",
      },
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Mountain View",
        size: "small",
      },
      {
        type: "image",
        src: "/images/blog-1.png",
        alt: "Local Crafts",
        size: "wide",
      },
    ],
  },
  {
    id: 3,
    year: "2023",
    title: "High Atlas Trekking",
    location: "Toubkal National Park",
    description:
      "Reaching new heights! Our group conquered Mount Toubkal and enjoyed the snowy peaks.",
    media: [
      {
        type: "image",
        src: "/images/hero-3.png",
        alt: "Summit Group Photo",
        size: "wide",
      },
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Valley View",
        size: "small",
      },
    ],
  },
  {
    id: 4,
    year: "2022",
    title: "Imperial Cities Tour",
    location: "Fes & Meknes",
    description:
      "Diving deep into the history and culture of Morocco's ancient capitals.",
    media: [
      {
        type: "image",
        src: "/images/hero-2.png",
        alt: "Fes Tannery",
        size: "small",
      },
      {
        type: "image",
        src: "/images/blog-1.png",
        alt: "Mosaic Art",
        size: "small",
      },
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Royal Palace Gate",
        size: "large",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-3.png" // Mountains/Landscape for gallery header
            alt="Gallery Header"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white"
          >
            Our Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            A visual timeline of unforgettable moments and breathtaking
            memories.
          </motion.p>
        </div>
      </section>

      {/* Timeline Gallery */}
      <section className="py-16 md:py-24 px-4 md:px-12 grow">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-20">
            {GALLERY_EVENTS.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-clay rounded-full border-4 border-white shadow-md top-0 transform -translate-x-1/2 md:translate-x-[-50%] z-10 box-content"></div>

                {/* Content Side */}
                <div
                  className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand/10 text-clay rounded-full text-sm font-bold mb-3">
                    <Calendar size={14} />
                    {event.year}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-deep-blue mb-2">
                    {event.title}
                  </h2>
                  <div
                    className={`flex items-center text-gray-500 text-sm mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <MapPin size={16} className="mr-1" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Media Grid Side */}
                <div
                  className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {event.media.map((item, mIndex) => (
                      <div
                        key={mIndex}
                        className={`relative rounded-xl overflow-hidden shadow-md group cursor-pointer ${
                          item.size === "large"
                            ? "col-span-2 row-span-2 h-64 md:h-80"
                            : item.size === "wide"
                              ? "col-span-2 h-40"
                              : item.size === "tall"
                                ? "row-span-2 h-full"
                                : "h-32 md:h-40"
                        }`}
                      >
                        <Image
                          src={
                            item.type === "video"
                              ? item.thumbnail || item.src
                              : item.src
                          }
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:bg-white/50 transition-colors">
                              <Play
                                size={16}
                                className="text-white fill-current ml-1"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End of Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 bottom-0 w-3 h-3 bg-gray-300 rounded-full transform -translate-x-1/2" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
