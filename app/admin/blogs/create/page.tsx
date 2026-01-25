"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import { FileText } from "lucide-react";

export default function CreateBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: [] as (File | string)[],
  });

  const categoryOptions = [
    { value: "travel-tips", label: "Travel Tips" },
    { value: "culture", label: "Culture & History" },
    { value: "food", label: "Food & Drink" },
    { value: "news", label: "Company News" },
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
    console.log("Submitting Blog:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Blog post created successfully! (Mock)");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Write New Blog</h1>
          <p className="text-slate-500 mt-1">
            Share stories and tips with your audience
          </p>
        </div>
        <div className="flex gap-3">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Publish Post
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <AdminInput
              label="Blog Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., 10 Hidden Gems in Morocco"
              className="text-lg font-medium"
            />

            <AdminTextarea
              label="Content / Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write your article content here..."
              rows={15}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Publishing
            </h2>

            <AdminSelect
              label="Category"
              options={categoryOptions}
              value={formData.category}
              onChange={(val) => handleSelectChange("category", val)}
              placeholder="Select category"
            />
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Featured Image
            </h2>
            <ImageUpload
              value={formData.image}
              onChange={(files) =>
                setFormData((prev) => ({ ...prev, image: files }))
              }
              maxFiles={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
