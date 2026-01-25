"use client";

import React, { useState } from "react";
import { Save, ChevronLeft, Star } from "lucide-react";
import Link from "next/link";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";

export default function CreateReviewPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    text: "",
    image: [] as (File | string)[],
    country: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as string }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Submitting Review:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    alert("Review added manually! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
        <div className="flex gap-3">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            <Save className="w-4 h-4 mr-2" />
            Save Review
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AdminInput
                label="Client Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Jane Doe"
              />
              <AdminInput
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="e.g. USA"
              />
            </div>

            <AdminTextarea
              label="Review Text"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
              placeholder="Paste the client's feedback here..."
              rows={6}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${formData.rating >= star ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="font-bold text-slate-800">Client Image</h3>
            <ImageUpload
              value={formData.image}
              onChange={(files) =>
                setFormData((prev) => ({ ...prev, image: files }))
              }
              maxFiles={1}
              helperText="Client avatar or profile picture"
              className="aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
