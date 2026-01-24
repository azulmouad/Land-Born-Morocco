import { Check } from "lucide-react";

interface TourHighlightsProps {
  highlights: string[];
}

export default function TourHighlights({ highlights }: TourHighlightsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-heading font-bold text-deep-blue mb-4">
        Tour Highlights
      </h3>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <Check
              size={18}
              className="text-sand shrink-0 mt-0.5"
              strokeWidth={2.5}
            />
            <span className="text-gray-700 text-sm md:text-base leading-snug">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
