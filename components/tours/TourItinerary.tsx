"use client";

import { ItineraryDay } from "@/data/tours";

interface TourItineraryProps {
  itinerary: ItineraryDay[];
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
  return (
    <div className="relative border-l-2 border-dashed border-sand/30 ml-4 md:ml-6 space-y-8 md:space-y-12 pb-4">
      {itinerary.map((day, index) => (
        <div key={index} className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div
            className="absolute -left-[9px] md:-left-[11px] top-0 
              w-5 h-5 md:w-6 md:h-6 rounded-full bg-sand border-4 border-white shadow-sm"
          ></div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <h4 className="font-heading font-bold text-lg md:text-xl text-deep-blue">
              <span className="text-sand mr-2">Day {day.day}:</span>
              {day.title}
            </h4>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {day.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
