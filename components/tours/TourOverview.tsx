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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-cream rounded-xl text-sand">
          <Clock size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            Duration
          </p>
          <p className="text-deep-blue font-semibold">{duration}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-cream rounded-xl text-sand">
          <Users size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            Group Size
          </p>
          <p className="text-deep-blue font-semibold">{groupSize}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-cream rounded-xl text-sand">
          <Languages size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            Languages
          </p>
          <p className="text-deep-blue font-semibold">{languages.join(", ")}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-cream rounded-xl text-sand">
          <Map size={20} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            Tour Type
          </p>
          <p className="text-deep-blue font-semibold">{type}</p>
        </div>
      </div>
    </div>
  );
}
