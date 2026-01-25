"use client";

import React from "react";
import { Save, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CreateDestinationPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/destinations"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add Destination</h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="e.g. Marrakech"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Region</label>
            <input
              type="text"
              placeholder="e.g. Marrakech-Safi"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="popular"
              className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <label htmlFor="popular" className="text-sm text-gray-700">
              Mark as Popular/Featured
            </label>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Destination
          </button>
        </div>
      </div>
    </div>
  );
}
