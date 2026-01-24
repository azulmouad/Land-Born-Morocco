"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";

export default function TourRelated() {
  // Just take the first 3 tours as "related" for now
  const relatedTours = tours.slice(0, 3);

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {relatedTours.map((tour) => (
        <Link
          href={`/tours/${tour.slug}`}
          key={tour.id}
          className="block group"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={tour.images[0]}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-clay font-bold text-xs shadow-sm">
                {tour.duration}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-heading font-bold text-lg text-deep-blue mb-2 group-hover:text-clay transition-colors line-clamp-1">
                {tour.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                {tour.overview}
              </p>

              <div className="flex items-center text-clay font-medium text-sm group/btn">
                View Details{" "}
                <ArrowRight
                  size={16}
                  className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
