"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar, MapPin, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock Gallery Data with Timeline structure
const GALLERY_EVENTS = [
  {
    id: 1,
    year: "Jan 2025",
    title: "Sahara Desert Expedition",
    location: "Merzouga, Morocco",
    description:
      "A magical week exploring the dunes, camping under the stars, and experiencing true nomad life.",
    media: [
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Camel Trek at Sunset",
        size: "tall",
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
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Nomad Tea",
        size: "wide",
      },
      {
        type: "image",
        src: "/images/hero-2.png",
        alt: "Starry Night",
        size: "small",
      }, // Extra Item
    ],
  },
  {
    id: 2,
    year: "Dec 2024",
    title: "Coastal Essaouira Getaway",
    location: "Essaouira, Morocco",
    description:
      "A relaxing weekend by the Atlantic coast, exploring the medina and enjoying fresh seafood.",
    media: [
      {
        type: "image",
        src: "/images/hero-3.png",
        alt: "Coastal View",
        size: "wide",
      },
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Medina Streets",
        size: "small",
      },
    ],
  },
  {
    id: 3,
    year: "Nov 2024",
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
    id: 4,
    year: "Oct 2024",
    title: "Marrakech Food Tour",
    location: "Marrakech, Morocco",
    description:
      "Discovering the flavors of Morocco through street food and traditional dishes in the bustling souks.",
    media: [
      {
        type: "image",
        src: "/images/marrakech-square.png",
        alt: "Jemaa el-Fnaa",
        size: "tall",
      },
      {
        type: "image",
        src: "/images/hero-2.png",
        alt: "Spice Market",
        size: "small",
      },
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Tagine Cooking",
        size: "small",
      },
      {
        type: "image",
        src: "/images/blog-1.png",
        alt: "Mint Tea",
        size: "wide",
      },
    ],
  },
  {
    id: 5,
    year: "Sep 2024",
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
    id: 6,
    year: "Aug 2024",
    title: "Ouzoud Waterfalls Day Trip",
    location: "Ouzoud, Morocco",
    description:
      "A refreshing day trip to Morocco's most spectacular waterfalls, complete with rainbow views and playful monkeys.",
    media: [
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Waterfall View",
        size: "large",
      },
      {
        type: "image",
        src: "/images/hero-2.png",
        alt: "Rainbow Moment",
        size: "small",
      },
      {
        type: "image",
        src: "/images/hero-3.png",
        alt: "Boat Ride",
        size: "small",
      },
    ],
  },
  {
    id: 7,
    year: "Jul 2024",
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
  {
    id: 8,
    year: "Jun 2024",
    title: "Agafay Desert Sunset",
    location: "Agafay Desert, Morocco",
    description:
      "An evening in the rocky Agafay Desert with camel rides, traditional dinner, and stunning sunset views.",
    media: [
      {
        type: "image",
        src: "/images/hero-3.png",
        alt: "Desert Sunset",
        size: "wide",
      },
      {
        type: "image",
        src: "/images/hero-1.png",
        alt: "Camel Silhouette",
        size: "small",
      },
    ],
  },
];

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string;
    type: string;
    alt: string;
  } | null>(null);

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
            {GALLERY_EVENTS.map((event, index) => {
              const displayedMedia = event.media.slice(0, 4);
              const remainingCount = event.media.length - 4;

              return (
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
                      {displayedMedia.map((item, mIndex) => {
                        const isLastItem = mIndex === 3;
                        const showOverlay = isLastItem && remainingCount > 0;
                        const isTwoItemsOnly = displayedMedia.length === 2;

                        return (
                          <div
                            key={mIndex}
                            onClick={() => setSelectedMedia(item)}
                            className={`relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-gray-100 ${
                              isTwoItemsOnly
                                ? "col-span-2 h-48 md:h-56"
                                : item.size === "large"
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

                            {item.type === "video" && !showOverlay && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:bg-white/50 transition-colors">
                                  <Play
                                    size={16}
                                    className="text-white fill-current ml-1"
                                  />
                                </div>
                              </div>
                            )}

                            {showOverlay && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 transition-colors hover:bg-black/70">
                                <span className="text-white font-bold text-lg md:text-xl">
                                  +{remainingCount} View All
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End of Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 bottom-0 w-3 h-3 bg-gray-300 rounded-full transform -translate-x-1/2" />
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[85vh] aspect-video rounded-lg overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  fill
                  className="object-contain"
                />
              )}
            </motion.div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white/80 pointer-events-none">
              <p className="text-lg font-medium">{selectedMedia.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
