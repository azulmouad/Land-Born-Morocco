"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Edit2,
  Trash2,
  MapPin,
  Clock,
  Users,
  Search,
} from "lucide-react";
import { tours } from "@/data/tours";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminSelect from "@/components/admin/ui/AdminSelect";

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");

  // Get unique cities from tours data for filter options
  // Assuming tour.location or similar exists, but mock data structure implies maybe we just mock cities for now
  // or extract from available data if possible. Let's use a static list for reliability based on create page options.
  const cityOptions = [
    { value: "all", label: "All Cities" },
    { value: "marrakech", label: "Marrakech" },
    { value: "casablanca", label: "Casablanca" },
    { value: "fes", label: "Fes" },
    { value: "tangier", label: "Tangier" },
    { value: "chefchaouen", label: "Chefchaouen" },
    { value: "merzouga", label: "Merzouga" },
  ];

  /* 
     Filering Logic:
     - Filter by Title (case insensitive)
     - Filter by City (check if tour location/title contains city or if we had a dedicated city field)
     Since I don't see the full 'tours' object structure in the view, I will assume a generic filter strategy:
     If 'selectedCity' is 'all', show all. Else check if any property matches or strictly if we have city data.
     For this MVP, I'll check if the tour title or a potential 'location' field includes the city name.
  */
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCity =
      selectedCity === "all" ||
      tour.title.toLowerCase().includes(selectedCity) ||
      (tour as any).location?.toLowerCase().includes(selectedCity); // Fallback safe check

    return matchesSearch && matchesCity;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tours</h1>
          <p className="text-gray-500 mt-1">Manage your tour packages</p>
        </div>
        <Link
          href="/admin/tours/create"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Tour</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tours by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
        <div>
          <AdminSelect
            options={cityOptions}
            value={selectedCity}
            onChange={(val) => setSelectedCity(val as string)}
            placeholder="Filter by city"
            className="w-full"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={tour.images[0]}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                  ${tour.price}
                </div>
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white shadow-sm">
                  {tour.type}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {tour.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {tour.subtitle}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">
                    ID: #{tour.id}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/tours/edit/${tour.id}`}
                      className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500">
              No tours found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCity("all");
              }}
              className="mt-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
