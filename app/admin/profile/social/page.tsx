"use client";

import React from "react";
import { Save, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function SocialProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Social Media</h1>
        <p className="text-gray-500 mt-1">Connect your social accounts</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="grid gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Facebook className="w-4 h-4 text-blue-600" /> Facebook URL
            </label>
            <input
              type="url"
              placeholder="https://facebook.com/..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-600" /> Instagram URL
            </label>
            <input
              type="url"
              placeholder="https://instagram.com/..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Twitter className="w-4 h-4 text-sky-500" /> Twitter / X URL
            </label>
            <input
              type="url"
              placeholder="https://twitter.com/..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-700" /> LinkedIn URL
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
