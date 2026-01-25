import React from "react";
import Image from "next/image";
import { Plus, Trash2, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/hero-1.png", title: "Sahara Sunset" },
  { id: 2, src: "/images/hero-2.png", title: "Berber Camp" },
  { id: 3, src: "/images/hero-3.png", title: "Atlas Mountains" },
  { id: 4, src: "/images/hero-1.png", title: "Camel Trek 1" },
  { id: 5, src: "/images/hero-2.png", title: "Camel Trek 2" },
  { id: 6, src: "/images/hero-3.png", title: "Oasis View" },
];

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-500 mt-1">Manage website images and media</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Upload Image</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium truncate">
                {img.title}
              </p>
            </div>

            {/* Actions overlay */}
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 bg-black/50 text-white rounded-lg hover:bg-black/70 backdrop-blur-sm transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
              <button className="p-1.5 bg-red-500/80 text-white rounded-lg hover:bg-red-600 backdrop-blur-sm transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
