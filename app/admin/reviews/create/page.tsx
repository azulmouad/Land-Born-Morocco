"use client";

import React from "react";
import { Save, ChevronLeft, Star } from "lucide-react";
import Link from "next/link";

export default function CreateReviewPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/reviews"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add Review</h1>
          <p className="text-gray-500 mt-1">
            Manually add a client testimonial
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Rating</label>
            <div className="flex items-center gap-2 text-gray-300">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-8 h-8 cursor-pointer hover:text-amber-400 transition-colors"
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Review Text
            </label>
            <textarea
              rows={4}
              placeholder="Client feedback..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
}
