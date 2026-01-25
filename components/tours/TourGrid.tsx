"use client";

import { motion } from "framer-motion";
import TourCard, { Tour } from "./TourCard";
import { Frown } from "lucide-react";

interface TourGridProps {
  tours: Tour[];
}

export default function TourGrid({ tours }: TourGridProps) {
  if (tours.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4 text-gray-400">
          <Frown size={48} />
        </div>
        <h3 className="text-2xl font-bold text-deep-blue mb-2 font-heading">
          No tours found
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We couldn't find any tours matching your current filters. Try
          adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {tours.map((tour, index) => (
        <TourCard key={tour.id} tour={tour} index={index} />
      ))}
    </div>
  );
}
