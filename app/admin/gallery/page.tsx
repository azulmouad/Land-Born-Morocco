"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Trash2, Edit2, MapPin, Calendar, Clock } from "lucide-react";

const galleryTimeline = [
  {
    id: 1,
    title: "Sahara Sunset Experience",
    description: "Capturing the golden hour over the dunes of Merzouga.",
    images: ["/images/hero-1.png", "/images/hero-2.png", "/images/hero-3.png"],
    date: "2024-03-15",
    location: "Merzouga",
    type: "image",
  },
  {
    id: 2,
    title: "Traditional Berber Camp",
    description: "Night under the stars with traditional music and food.",
    images: ["/images/hero-2.png", "/images/hero-1.png"],
    date: "2024-03-14",
    location: "Merzouga",
    type: "image",
  },
  {
    id: 3,
    title: "Atlas Mountains Trek",
    description: "Hiking through the scenic valleys of the High Atlas.",
    images: [
      "/images/hero-3.png",
      "/images/hero-1.png",
      "/images/hero-2.png",
      "/images/hero-3.png",
      "/images/hero-1.png",
    ],
    date: "2024-02-20",
    location: "Imlil",
    type: "image",
  },
  {
    id: 4,
    title: "Chefchaouen Blue Streets",
    description: "Wandering through the blue-washed alleys of the medina.",
    images: ["/images/hero-1.png"],
    date: "2024-01-10",
    location: "Chefchaouen",
    type: "image",
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery Timeline</h1>
          <p className="text-gray-500 mt-1">
            Manage your visual story and media
          </p>
        </div>
        <Link
          href="/admin/gallery/create"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Memory</span>
        </Link>
      </div>

      <div className="relative">
        {/* Timeline Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

        <div className="space-y-12">
          {galleryTimeline.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* Timeline Date Marker (Desktop) */}
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm mt-6 hidden md:block z-10" />

              {/* Date Label (Desktop) */}
              <div className="w-32 pt-5 text-right hidden md:block shrink-0">
                <span className="block text-sm font-bold text-slate-800">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="block text-xs text-slate-500">
                  {new Date(item.date).getFullYear()}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 w-full">
                {/* Mobile Date */}
                <div className="md:hidden flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      dateStyle: "medium",
                    })}
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Grid Section */}
                    <div
                      className={`relative md:w-1/3 min-w-[240px] bg-slate-100 ${item.images.length > 1 ? "grid grid-cols-2 gap-0.5" : ""}`}
                    >
                      {item.images.slice(0, 4).map((img, idx) => {
                        const isLast = idx === 3;
                        const remaining = item.images.length - 4;

                        return (
                          <div
                            key={idx}
                            className={`relative ${item.images.length === 1 ? "h-56 md:h-auto" : "h-28 md:h-32"}`}
                          >
                            <Image
                              src={img}
                              alt={`${item.title} ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                            {isLast && remaining > 0 && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg backdrop-blur-xs">
                                +{remaining}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Info Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 mb-2 uppercase tracking-wide">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                          <Edit2 className="w-3.5 h-3.5" />
                          Edit
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100">
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
