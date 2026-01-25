"use client";

import React from "react";
import Image from "next/image";
import { Save, Upload } from "lucide-react";

export default function AboutProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
        <p className="text-gray-500 mt-1">Manage your profile information</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        {/* Profile Image */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Profile Image
          </label>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300">
              <Image
                src="/images/hero-1.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Upload className="w-4 h-4" />
              Change Photo
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                defaultValue="Omar"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Ouahid"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Job Title / Role
            </label>
            <input
              type="text"
              defaultValue="Senior Tour Guide & Founder"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Bio / Introduction
            </label>
            <textarea
              rows={5}
              defaultValue="Passionate tour guide with over 10 years of experience showing travelers the beauty of Morocco..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
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
