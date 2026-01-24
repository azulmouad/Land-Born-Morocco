import { Clock, Users, Languages, Map } from "lucide-react";

interface TourOverviewProps {
  duration: string;
  groupSize: string;
  languages: string[];
  type: string;
}

export default function TourOverview({
  duration,
  groupSize,
  languages,
  type,
}: TourOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-8 p-6 bg-cream/50 rounded-2xl border border-sand/10">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sand/10 text-sand shrink-0">
          <Clock size={20} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-deep-blue mb-1">
            Duration
          </h4>
          <p className="text-gray-600 text-sm leading-snug">{duration}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sand/10 text-sand shrink-0">
          <Users size={20} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-deep-blue mb-1">
            Group Size
          </h4>
          <p className="text-gray-600 text-sm leading-snug">{groupSize}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sand/10 text-sand shrink-0">
          <Languages size={20} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-deep-blue mb-1">
            Languages
          </h4>
          <p className="text-gray-600 text-sm leading-snug">
            {languages.join(", ")}
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sand/10 text-sand shrink-0">
          <Map size={20} />
        </div>
        <div>
          <h4 className="font-heading font-bold text-deep-blue mb-1">
            Tour Type
          </h4>
          <p className="text-gray-600 text-sm leading-snug">{type}</p>
        </div>
      </div>
    </div>
  );
}
