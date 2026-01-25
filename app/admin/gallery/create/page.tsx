"use client";

import React from "react";
import { Save, ChevronLeft, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function CreateGalleryPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/gallery"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upload Image</h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">
            Click to upload image
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            SVG, PNG, JPG or GIF (max. 3MB)
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Title / Alt Text
            </label>
            <input
              type="text"
              placeholder="e.g. Sahara Sunset"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Category / Tag
            </label>
            <input
              type="text"
              placeholder="e.g. Nature"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Image
          </button>
        </div>
      </div>
    </div>
  );
}
