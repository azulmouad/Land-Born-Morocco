import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Edit2, Trash2, MapPin, Clock, Users } from "lucide-react";
import { tours } from "@/data/tours"; // Using the mock data from the source

export default function ToursPage() {
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
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Tour</span>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
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
        ))}
      </div>
    </div>
  );
}
