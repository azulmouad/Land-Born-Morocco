"use client";

import React from "react";
import { Save, MapPin, Phone, Mail } from "lucide-react";

export default function ContactProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact Info</h1>
        <p className="text-gray-500 mt-1">Manage public contact details</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="grid gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500" /> Email Address
            </label>
            <input
              type="email"
              defaultValue="contact@landbord.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-500" /> Phone Number
            </label>
            <input
              type="text"
              defaultValue="+212 6 00 00 00 00"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500" /> Address / Location
            </label>
            <input
              type="text"
              defaultValue="Merzouga, Morocco"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Google Maps Embed Link
            </label>
            <textarea
              rows={3}
              defaultValue="https://www.google.com/maps/embed?..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-mono text-xs text-gray-600"
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
