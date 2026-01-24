"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { ItineraryDay } from "@/data/tours";

interface TourItineraryProps {
  itinerary: ItineraryDay[];
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
  const [activeDay, setActiveDay] = useState<number | null>(0); // Default open first day

  const toggleDay = (index: number) => {
    setActiveDay(activeDay === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {itinerary.map((day, index) => (
        <div
          key={index}
          className={`border rounded-xl transition-colors ${activeDay === index ? "border-sand bg-sand/5" : "border-gray-100 bg-white"}`}
        >
          <button
            onClick={() => toggleDay(index)}
            className="w-full flex items-center justify-between p-4 md:p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                    flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold text-sm md:text-base border
                    ${activeDay === index ? "bg-sand text-white border-sand" : "bg-white text-gray-400 border-gray-200"}
              `}
              >
                {day.day}
              </div>
              <h4
                className={`font-heading font-bold text-lg md:text-xl ${activeDay === index ? "text-deep-blue" : "text-gray-600"}`}
              >
                {day.title}
              </h4>
            </div>
            <ChevronDown
              className={`text-gray-400 transition-transform duration-300 ${activeDay === index ? "rotate-180 text-sand" : ""}`}
            />
          </button>

          <AnimatePresence>
            {activeDay === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 md:p-6 pt-0 pl-16 md:pl-20 border-t border-dashed border-gray-200/50 mt-2">
                  <p className="text-gray-600 leading-relaxed">
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
