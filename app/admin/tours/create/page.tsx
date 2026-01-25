"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import DynamicList from "@/components/admin/ui/DynamicList";
import RichTextEditor from "@/components/admin/ui/RichTextEditor";
import {
  Plus,
  Trash2,
  Calendar,
  MapPin,
  List,
  Image as ImageIcon,
  Globe,
} from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export default function CreateTourPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    durationDays: "",
    durationNights: "",
    groupSize: "",
    languages: "",
    tourType: "",
    cities: [] as string[],
    categories: [] as string[],
    thumbnail: [] as (File | string)[],
    gallery: [] as (File | string)[],
    highlights: [] as string[],
    included: [] as string[],
    notIncluded: [] as string[],
    itinerary: [] as ItineraryDay[],
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });

  // Mock Options
  const cityOptions = [
    { value: "marrakech", label: "Marrakech" },
    { value: "casablanca", label: "Casablanca" },
    { value: "fes", label: "Fes" },
    { value: "tangier", label: "Tangier" },
    { value: "chefchaouen", label: "Chefchaouen" },
    { value: "merzouga", label: "Merzouga" },
  ];

  const categoryOptions = [
    { value: "desert", label: "Desert Tours" },
    { value: "imperial", label: "Imperial Cities" },
    { value: "coast", label: "Coastal Tours" },
    { value: "hiking", label: "Hiking & Trekking" },
  ];

  const tourTypeOptions = [
    { value: "private", label: "Private Tour" },
    { value: "group", label: "Group Tour" },
    { value: "luxury", label: "Luxury Tour" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Itinerary Helpers
  const addItineraryDay = () => {
    setFormData((prev) => ({
      ...prev,
      itinerary: [
        ...prev.itinerary,
        { day: prev.itinerary.length + 1, title: "", description: "" },
      ],
    }));
  };

  const updateItineraryDay = (
    index: number,
    field: keyof ItineraryDay,
    value: string,
  ) => {
    const newItinerary = [...formData.itinerary];
    if (field === "day") return; // Day number is auto-managed
    // @ts-ignore
    newItinerary[index][field] = value;
    setFormData((prev) => ({ ...prev, itinerary: newItinerary }));
  };

  const removeItineraryDay = (index: number) => {
    const newItinerary = formData.itinerary.filter((_, i) => i !== index);
    // Recalculate day numbers
    const reindexedItinerary = newItinerary.map((item, i) => ({
      ...item,
      day: i + 1,
    }));
    setFormData((prev) => ({ ...prev, itinerary: reindexedItinerary }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting Tour Data:", formData);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Tour created successfully! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Create New Tour</h1>
          <p className="text-slate-500 mt-1">
            Add a new travel experience for your customers
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Publish Tour
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-6">
          {/* Basic Info */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <List className="w-5 h-5 text-emerald-500" /> Basic Information
            </h2>
            <AdminInput
              label="Tour Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Majestic Sahara 3 Day Tour"
            />
            <RichTextEditor
              label="Description"
              value={formData.description}
              onChange={(content) =>
                setFormData((prev) => ({ ...prev, description: content }))
              }
              placeholder="Detailed description of the tour..."
            />
            <div className="grid grid-cols-2 gap-4">
              <AdminInput
                label="Duration (Days)"
                name="durationDays"
                type="number"
                value={formData.durationDays}
                onChange={handleInputChange}
                placeholder="ex: 3"
              />
              <AdminInput
                label="Duration (Nights)"
                name="durationNights"
                type="number"
                value={formData.durationNights}
                onChange={handleInputChange}
                placeholder="ex: 2"
              />
            </div>
          </section>

          {/* Details & Specs */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-500" /> Details &
              Specification
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminInput
                label="Group Size"
                name="groupSize"
                value={formData.groupSize}
                onChange={handleInputChange}
                placeholder="e.g., Max 10 people"
              />
              <AdminInput
                label="Languages"
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                placeholder="e.g., English, French, Arabic"
              />
            </div>
            <AdminSelect
              label="Tour Type"
              options={tourTypeOptions}
              value={formData.tourType}
              onChange={(val) => handleSelectChange("tourType", val)}
              placeholder="Select tour style"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminSelect
                label="Cities"
                options={cityOptions}
                value={formData.cities}
                onChange={(val) => handleSelectChange("cities", val)}
                multiple
                placeholder="Select cities visited"
              />
              <AdminSelect
                label="Categories"
                options={categoryOptions}
                value={formData.categories}
                onChange={(val) => handleSelectChange("categories", val)}
                multiple
                placeholder="Select tour categories"
              />
            </div>
          </section>

          {/* Itinerary */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-500" /> Itinerary
              </h2>
              <AdminButton
                size="sm"
                variant="secondary"
                onClick={addItineraryDay}
                icon={<Plus className="w-4 h-4" />}
              >
                Add Day
              </AdminButton>
            </div>

            <div className="space-y-4">
              {formData.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 relative group"
                >
                  <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {day.day}
                  </div>
                  <div className="flex-1 space-y-3">
                    <AdminInput
                      placeholder="Day Title (e.g., Departure from Marrakech)"
                      value={day.title}
                      onChange={(e) =>
                        updateItineraryDay(index, "title", e.target.value)
                      }
                      className="bg-white"
                    />
                    <AdminTextarea
                      placeholder="Activities description..."
                      value={day.description}
                      onChange={(e) =>
                        updateItineraryDay(index, "description", e.target.value)
                      }
                      className="bg-white"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={() => removeItineraryDay(index)}
                    className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {formData.itinerary.length === 0 && (
                <div className="text-center py-8 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                  No itinerary days added yet.
                </div>
              )}
            </div>
          </section>

          {/* Media */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-emerald-500" /> Media
            </h2>

            <ImageUpload
              label="Thumbnail Image"
              value={formData.thumbnail}
              onChange={(files) =>
                setFormData((prev) => ({ ...prev, thumbnail: files }))
              }
              maxFiles={1}
            />

            <div className="border-t border-slate-100 pt-4">
              <ImageUpload
                label="Gallery Images"
                value={formData.gallery}
                onChange={(files) =>
                  setFormData((prev) => ({ ...prev, gallery: files }))
                }
                multiple
                maxFiles={10}
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Inclusions */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Features
            </h2>

            <DynamicList
              label="Tour Highlights"
              items={formData.highlights}
              onChange={(items) =>
                setFormData((prev) => ({ ...prev, highlights: items }))
              }
              placeholder="Add highlight..."
            />

            <div className="border-t border-slate-100 pt-4">
              <DynamicList
                label="Included"
                items={formData.included}
                onChange={(items) =>
                  setFormData((prev) => ({ ...prev, included: items }))
                }
                placeholder="Add included item..."
              />
            </div>

            <div className="border-t border-slate-100 pt-4">
              <DynamicList
                label="Not Included"
                items={formData.notIncluded}
                onChange={(items) =>
                  setFormData((prev) => ({ ...prev, notIncluded: items }))
                }
                placeholder="Add not included item..."
              />
            </div>
          </section>

          {/* SEO Metadata */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" /> SEO Configuration
            </h2>

            <AdminInput
              label="Meta Title"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleInputChange}
              placeholder="SEO Title (defaults to tour title)"
              helperText="Recommended length: 50-60 characters"
            />

            <AdminTextarea
              label="Meta Description"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              placeholder="Brief summary for search engines..."
              rows={3}
              helperText="Recommended length: 150-160 characters"
            />

            <AdminInput
              label="Keywords"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleInputChange}
              placeholder="e.g., desert tour, sahara, camel trek"
              helperText="Comma separated keywords"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
