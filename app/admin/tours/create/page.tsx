"use client";

import React, { useState } from "react";
import {
  Save,
  ChevronLeft,
  Plus,
  Trash2,
  GripVertical,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Types matching our data model
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface TourFormData {
  title: string;
  subtitle: string;
  price: number;
  durationDays: string;
  durationNights: string;
  groupSize: string;
  languages: string; // Comma separated for input
  type: string;
  overview: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  cancellationPolicy: string;
  images: string[];
}

const initialData: TourFormData = {
  title: "",
  subtitle: "",
  price: 0,
  durationDays: "",
  durationNights: "",
  groupSize: "",
  languages: "",
  type: "",
  overview: "",
  highlights: [""],
  included: [""],
  excluded: [""],
  itinerary: [{ day: 1, title: "", description: "" }],
  cancellationPolicy: "",
  images: [],
};

export default function CreateTourPage() {
  const [formData, setFormData] = useState<TourFormData>(initialData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- Dynamic List Handlers ---
  const handleListChange = (
    key: "highlights" | "included" | "excluded",
    index: number,
    value: string,
  ) => {
    const newList = [...formData[key]];
    newList[index] = value;
    setFormData((prev) => ({ ...prev, [key]: newList }));
  };

  const addListItem = (key: "highlights" | "included" | "excluded") => {
    setFormData((prev) => ({ ...prev, [key]: [...prev[key], ""] }));
  };

  const removeListItem = (
    key: "highlights" | "included" | "excluded",
    index: number,
  ) => {
    const newList = [...formData[key]];
    newList.splice(index, 1);
    setFormData((prev) => ({ ...prev, [key]: newList }));
  };

  // --- Itinerary Handlers ---
  const handleItineraryChange = (
    index: number,
    field: keyof ItineraryDay,
    value: string | number,
  ) => {
    const newItinerary = [...formData.itinerary];
    newItinerary[index] = { ...newItinerary[index], [field]: value };
    setFormData((prev) => ({ ...prev, itinerary: newItinerary }));
  };

  const addItineraryDay = () => {
    setFormData((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        { day: prev.itinerary.length + 1, title: "", description: "" },
      ],
    }));
  };

  const removeItineraryDay = (index: number) => {
    const newItinerary = [...formData.itinerary];
    newItinerary.splice(index, 1);
    // Recalculate day numbers
    const reordered = newItinerary.map((day, i) => ({ ...day, day: i + 1 }));
    setFormData((prev) => ({ ...prev, itinerary: reordered }));
  };

  const handleSubmit = () => {
    console.log("Submitting Tour Data:", formData);
    alert("Tour data logged to console! (Backend integration pending)");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between sticky top-0 z-10 bg-gray-50/80 backdrop-blur-md py-4 border-b border-gray-200/50 -mx-6 px-6 md:mx-0 md:px-0">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/tours"
            className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-gray-200 shadow-sm"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Create Tour
            </h1>
            <p className="text-sm text-gray-500">
              Design a new travel experience
            </p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Save className="w-4 h-4" />
          <span className="font-medium">Publish Tour</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">
                01
              </span>
              Basic Details
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Tour Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Grand Morocco Desert Adventure"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Subtitle
                </label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  placeholder="A short, catchy description..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Overview
                </label>
                <textarea
                  name="overview"
                  rows={5}
                  value={formData.overview}
                  onChange={handleChange}
                  placeholder="Detailed description of the experience..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                />
              </div>
            </div>
          </div>

          {/* Images Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">
                02
              </span>
              Gallery
            </h3>

            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50/50 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-medium text-gray-900">
                Drop images here
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                or click to browse (max 5MB)
              </p>
            </div>
            {/* Mock Image Preview List could go here */}
          </div>

          {/* Itinerary Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">
                  03
                </span>
                Itinerary
              </h3>
              <button
                onClick={addItineraryDay}
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-all"
              >
                <Plus className="w-4 h-4" /> Add Day
              </button>
            </div>

            <div className="space-y-4">
              {formData.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/30 group"
                >
                  <div className="flex flex-col items-center gap-2 pt-2">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      Day {day.day}
                    </div>
                    <div className="h-full w-0.5 bg-gray-200" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <input
                      type="text"
                      value={day.title}
                      onChange={(e) =>
                        handleItineraryChange(index, "title", e.target.value)
                      }
                      placeholder="Day Title (e.g. Arrival in Marrakech)"
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium"
                    />
                    <textarea
                      value={day.description}
                      onChange={(e) =>
                        handleItineraryChange(
                          index,
                          "description",
                          e.target.value,
                        )
                      }
                      placeholder="Activities for the day..."
                      rows={3}
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none text-sm"
                    />
                  </div>
                  <button
                    onClick={() => removeItineraryDay(index)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg self-start transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Lists (Highlights, included/excluded) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">
                04
              </span>
              Lists & Features
            </h3>

            {/* Highlights */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 flex justify-between">
                Highlights
                <button
                  onClick={() => addListItem("highlights")}
                  className="text-xs text-emerald-600 font-medium hover:underline"
                >
                  + Add Item
                </button>
              </label>
              {formData.highlights.map((item, index) => (
                <div key={`hl-${index}`} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleListChange("highlights", index, e.target.value)
                    }
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
                    placeholder="e.g. Camel trekking at sunset"
                  />
                  <button
                    onClick={() => removeListItem("highlights", index)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 flex justify-between">
                  Included
                  <button
                    onClick={() => addListItem("included")}
                    className="text-xs text-emerald-600 font-medium hover:underline"
                  >
                    + Add Item
                  </button>
                </label>
                {formData.included.map((item, index) => (
                  <div key={`inc-${index}`} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleListChange("included", index, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
                      placeholder="e.g. Breakfast"
                    />
                    <button
                      onClick={() => removeListItem("included", index)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Excluded */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 flex justify-between">
                  Excluded
                  <button
                    onClick={() => addListItem("excluded")}
                    className="text-xs text-emerald-600 font-medium hover:underline"
                  >
                    + Add Item
                  </button>
                </label>
                {formData.excluded.map((item, index) => (
                  <div key={`exc-${index}`} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleListChange("excluded", index, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
                      placeholder="e.g. Flight tickets"
                    />
                    <button
                      onClick={() => removeListItem("excluded", index)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Sidebar for Settings */}
        <div className="space-y-6">
          <div className="sticky top-28 space-y-6">
            {/* Configuration Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-2">
                Tour Configuration
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Price (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-bold text-lg text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Duration
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name="durationDays"
                        value={formData.durationDays}
                        onChange={handleChange}
                        placeholder="Days"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                        Days
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        name="durationNights"
                        value={formData.durationNights}
                        onChange={handleChange}
                        placeholder="Nights"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                        Nights
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Group Size
                  </label>
                  <input
                    type="text"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    placeholder="e.g. Max 10 Guests"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Type / Category
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  >
                    <option value="">Select Type</option>
                    <option value="adventure">Adventure</option>
                    <option value="culture">Cultural</option>
                    <option value="hiking">Hiking</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Languages
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="e.g. English, French"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-2">
                Policies
              </h3>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Cancellation
                </label>
                <textarea
                  name="cancellationPolicy"
                  value={formData.cancellationPolicy}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Policy details..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
