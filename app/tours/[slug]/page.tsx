import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourOverview from "@/components/tours/TourOverview";
import TourHighlights from "@/components/tours/TourHighlights";
import TourInclusions from "@/components/tours/TourInclusions";
import TourGallery from "@/components/tours/TourGallery";
import TourItinerary from "@/components/tours/TourItinerary";
import TourBookingForm from "@/components/tours/TourBookingForm";
import TourRelated from "@/components/tours/TourRelated";
import { getTourBySlug } from "@/data/tours";
import { Check, X, MapPin, Share2, Heart, Star } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found - Land Born Morocco",
    };
  }

  return {
    title: `${tour.title} - Land Born Morocco`,
    description: tour.subtitle,
  };
}

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen">
      <Navbar variant="opaque" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-deep-blue mb-3">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-clay fill-clay" />
                  <span className="font-bold text-deep-blue">5.0</span>
                  <span className="text-gray-400">·</span>
                  <span className="underline decoration-gray-300">
                    120 reviews
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-gray-500" />
                  <span>Morocco</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-black/5 rounded-full transition-colors text-deep-blue font-medium text-sm">
                <Share2 size={18} />
                <span className="hidden md:inline">Share</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-black/5 rounded-full transition-colors text-deep-blue font-medium text-sm">
                <Heart size={18} />
                <span className="hidden md:inline">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section - Now displayed at the top */}
        <div className="mb-10 rounded-3xl overflow-hidden shadow-sm">
          <TourGallery images={tour.images} title={tour.title} />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Stats */}
            {/* Description & Overview Stats */}
            <section>
              <TourOverview
                duration={tour.duration}
                groupSize={tour.groupSize}
                languages={tour.languages}
                type={tour.type}
              />
              <h2 className="text-3xl font-heading font-bold text-deep-blue mb-6">
                Overview
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {tour.overview}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <TourHighlights highlights={tour.highlights} />
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-deep-blue mb-6">
                Itinerary
              </h2>
              <TourItinerary itinerary={tour.itinerary} />
            </section>

            {/* Cancellation Policy */}
            <section className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-lg font-heading font-bold text-clay-dark mb-2">
                Cancellation Policy
              </h3>
              <p className="text-gray-700 text-sm">{tour.cancellationPolicy}</p>
            </section>
          </div>

          {/* Right Column: Sticky Booking Form */}
          <div className="relative">
            <TourBookingForm />
          </div>
        </div>

        {/* Related Tours */}
        <div className="mt-20 md:mt-32 border-t border-gray-200 pt-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-blue mb-10 text-center">
            You Might Also Like
          </h2>
          <TourRelated />
        </div>
      </div>

      <Footer />
    </main>
  );
}
