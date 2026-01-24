import { Check, X } from "lucide-react";

interface TourInclusionsProps {
  included: string[];
  excluded: string[];
}

export default function TourInclusions({
  included,
  excluded,
}: TourInclusionsProps) {
  return (
    <div className="mb-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Included */}
        <div>
          <h3 className="text-lg md:text-xl font-heading font-bold text-deep-blue mb-4 flex items-center gap-2">
            Included
          </h3>
          <ul className="space-y-3">
            {included.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check
                  size={18}
                  className="text-olive shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-gray-700 text-sm md:text-base leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded */}
        <div>
          <h3 className="text-lg md:text-xl font-heading font-bold text-deep-blue mb-4 flex items-center gap-2">
            Not Included
          </h3>
          <ul className="space-y-3">
            {excluded.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <X
                  size={18}
                  className="text-clay shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-gray-700 text-sm md:text-base leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
