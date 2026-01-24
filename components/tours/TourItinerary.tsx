"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ItineraryDay } from "@/data/tours";

interface TourItineraryProps {
  itinerary: ItineraryDay[];
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
  const [activeDay, setActiveDay] = useState<number | null>(0);

  const toggleDay = (index: number) => {
    setActiveDay(activeDay === index ? null : index);
  };

  return (
    <div className="relative border-l-2 border-dashed border-sand/30 ml-3 md:ml-4 space-y-4 md:space-y-6 pb-2">
      {itinerary.map((day, index) => (
        <div key={index} className="relative pl-6 md:pl-8">
          {/* Timeline Dot */}
          <div
            className={`absolute -left-[9px] md:-left-[10px] top-1 
              w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] border-white shadow-sm transition-colors duration-300
              ${activeDay === index ? "bg-sand" : "bg-gray-300"}
              `}
          ></div>

          {/* Header (Clickable) */}
          <button
            onClick={() => toggleDay(index)}
            className="w-full flex items-center justify-between group text-left"
          >
            <h4
              className={`font-heading font-bold text-base md:text-lg transition-colors duration-300
                ${activeDay === index ? "text-deep-blue" : "text-gray-600 group-hover:text-deep-blue"}
              `}
            >
              <span
                className={`mr-2 ${activeDay === index ? "text-sand" : "text-gray-400"}`}
              >
                Day {day.day}:
              </span>
              {day.title}
            </h4>
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform duration-300 ${
                activeDay === index ? "rotate-180 text-sand" : ""
              }`}
            />
          </button>

          {/* Description (Expandable) */}
          <AnimatePresence>
            {activeDay === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-2">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {day.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
