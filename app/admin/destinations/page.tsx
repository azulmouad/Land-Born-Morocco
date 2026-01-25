"use client";

import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  MapPin,
  Search,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AdminButton from "@/components/admin/ui/AdminButton";
import AdminInput from "@/components/admin/ui/AdminInput";

// Mock Data
const destinations = [
  {
    id: 1,
    name: "Marrakech",
    image: "/images/hero-1.png", // Using existing placeholder asset
    citiesCount: 1,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Fez Imperial City",
    image: "/images/hero-2.png",
    citiesCount: 2,
    status: "active",
    createdAt: "2024-02-10",
  },
  {
    id: 3,
    name: "Sahara Desert",
    image: "/images/hero-3.png",
    citiesCount: 3,
    status: "active",
    createdAt: "2024-03-22",
  },
  {
    id: 4,
    name: "Chefchaouen",
    image: "/images/hero-1.png",
    citiesCount: 1,
    status: "draft",
    createdAt: "2024-06-05",
  },
  {
    id: 5,
    name: "Essaouira Coast",
    image: "/images/hero-2.png",
    citiesCount: 1,
    status: "active",
    createdAt: "2024-07-12",
  },
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Destinations</h1>
          <p className="text-gray-500 mt-1">
            Manage travel destinations and regions
          </p>
        </div>
        <Link href="/admin/destinations/create">
          <AdminButton icon={<Plus className="w-4 h-4" />}>
            Add Destination
          </AdminButton>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  {dest.status === "active" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100/90 backdrop-blur-sm text-slate-600 text-xs font-semibold rounded-full border border-slate-200">
                      <XCircle className="w-3 h-3" /> Draft
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                  {dest.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>{dest.citiesCount} Cities included</span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {dest.createdAt}
                  </div>

                  <div className="flex gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-slate-200">
            <p className="text-slate-500">No destinations found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
