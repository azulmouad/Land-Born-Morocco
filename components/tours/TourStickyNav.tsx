"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "inclusions", label: "Includes/Excludes" },
  { id: "itinerary", label: "Itinerary" },
  { id: "booking", label: "Booking" },
];

export default function TourStickyNav() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140; // Account for navbar + sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex overflow-x-auto scrollbar-hide">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`shrink-0 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
              activeSection === section.id
                ? "text-clay border-clay"
                : "text-gray-600 border-transparent hover:text-deep-blue"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
