"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import { Camera } from "lucide-react";

export default function CreateGalleryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    cities: [] as string[],
    media: [] as (File | string)[],
  });

  const cityOptions = [
    { value: "marrakech", label: "Marrakech" },
    { value: "casablanca", label: "Casablanca" },
    { value: "fes", label: "Fes" },
    { value: "tangier", label: "Tangier" },
    { value: "chefchaouen", label: "Chefchaouen" },
    { value: "merzouga", label: "Merzouga" },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting Gallery Item:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Gallery item added successfully! (Mock)");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Add to Gallery</h1>
          <p className="text-slate-500 mt-1">Upload memories to the timeline</p>
        </div>
        <div className="flex gap-3">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Upload Media
          </AdminButton>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <ImageUpload
          label="Media (Image or Video)"
          value={formData.media}
          onChange={(files) =>
            setFormData((prev) => ({ ...prev, media: files }))
          }
          multiple
          maxFiles={5}
          helperText="Upload images or videos for this gallery entry"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminInput
            label="Full Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g., Sunset in Merzouga"
          />
          <AdminInput
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <AdminSelect
          label="Related Cities"
          options={cityOptions}
          value={formData.cities}
          onChange={(val) => handleSelectChange("cities", val)}
          multiple
          placeholder="Select cities shown in media"
        />

        <AdminTextarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Story behind this moment..."
          rows={3}
        />
      </div>
    </div>
  );
}
