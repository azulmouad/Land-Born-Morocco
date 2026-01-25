"use client";

import React from "react";
import { Save, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CreateTourPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/tours"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create Tour</h1>
          <p className="text-gray-500 mt-1">Add a new tour package</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Tour Title
              </label>
              <input
                type="text"
                placeholder="e.g. Golden Sahara Trek"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                type="number"
                placeholder="299"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              placeholder="Short description..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Overview
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Create Tour
          </button>
        </div>
      </div>
    </div>
  );
}
