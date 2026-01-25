"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import { MapPin, Globe } from "lucide-react";

export default function CreateDestinationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cities: [] as string[],
    image: [] as (File | string)[],
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
    { value: "ouarzazate", label: "Ouarzazate" },
    { value: "essaouira", label: "Essaouira" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Submitting Destination:", formData);
    setIsLoading(false);
    alert("Destination created successfully! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Add Destination</h1>
          <p className="text-slate-500 mt-1">
            Create a new destination highlight for the platform
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Save Destination
          </AdminButton>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <ImageUpload
          label="Destination Image"
          value={formData.image}
          onChange={(files) =>
            setFormData((prev) => ({ ...prev, image: files }))
          }
          maxFiles={1}
          helperText="Main cover image for the destination card"
        />

        <AdminInput
          label="Destination Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g., The Blue City (Chefchaouen)"
        />

        <AdminSelect
          label="Related Cities"
          options={cityOptions}
          value={formData.cities}
          onChange={(val) =>
            setFormData((prev) => ({ ...prev, cities: val as string[] }))
          }
          multiple
          placeholder="Select cities included in this destination region"
          helperText="Select one or more cities that belong to this destination area"
        />

        <AdminTextarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe what makes this destination unique..."
          rows={5}
        />
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 mt-6">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4 h-4 text-emerald-500" /> SEO Configuration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminInput
            label="Meta Title"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleInputChange}
            placeholder="SEO Title (defaults to destination name)"
            helperText="Recommended length: 50-60 characters"
          />

          <AdminInput
            label="Keywords"
            name="metaKeywords"
            value={formData.metaKeywords}
            onChange={handleInputChange}
            placeholder="e.g., chefchaouen, blue city, morocco travel"
            helperText="Comma separated keywords"
          />
        </div>

        <AdminTextarea
          label="Meta Description"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleInputChange}
          placeholder="Brief summary for search engines..."
          rows={3}
          helperText="Recommended length: 150-160 characters"
        />
      </div>
    </div>
  );
}
