"use client";

import React from "react";
import { Save, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CreateBlogPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/blogs"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Article Title"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
                <option>Travel Tips</option>
                <option>Food & Culture</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                placeholder="Author Name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Content</label>
            <textarea
              rows={10}
              placeholder="Write your content here..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none font-sans"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
}
