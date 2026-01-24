"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { tours } from "@/data/tours";

export default function TourRelated() {
  // Just take the first 3 tours as "related" for now
  const relatedTours = tours.slice(0, 3);

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {relatedTours.map((tour) => (
        <div
          key={tour.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={tour.images[0]}
              alt={tour.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
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
            <p className="text-gray-600 mb-6 line-clamp-2">{tour.overview}</p>

            <Link
              href={`/tours/${tour.slug}`}
              className="w-full py-3 bg-deep-blue text-white rounded-xl font-medium hover:bg-clay transition-colors flex items-center justify-center"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
