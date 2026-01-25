"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import { MapPin } from "lucide-react";

export default function CreateDestinationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cities: [] as string[],
    image: [] as (File | string)[],
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
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Add Destination</h1>
          <p className="text-slate-500 mt-1">
            Create a new destination highlight for the platform
          </p>
        </div>
        <div className="flex gap-3">
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
    </div>
  );
}
