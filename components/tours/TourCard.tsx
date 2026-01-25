"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export interface Tour {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  price: number;
  duration: string;
  category?: string;
  tags?: string[];
}

interface TourCardProps {
  tour: Tour;
  index?: number;
}

export default function TourCard({ tour, index = 0 }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="shrink-0 w-full snap-center group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-clay shadow-sm">
          ${tour.price}
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <div className="flex items-center">
            <Clock size={16} className="text-sand mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="text-sand mr-1" />
            Daily
          </div>
        </div>

        <Link
          href={`/tours/${tour.slug}`}
          className="text-xl font-bold text-deep-blue mb-2 font-heading group-hover:text-clay transition-colors block"
        >
          {tour.title}
        </Link>
        <p className="text-gray-600 mb-6 line-clamp-2 grow">
          {tour.description}
        </p>

        <Link
          href={`/tours/${tour.slug}`}
          className="w-full py-3 bg-deep-blue text-white rounded-xl font-medium hover:bg-clay transition-colors flex items-center justify-center mt-auto"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
