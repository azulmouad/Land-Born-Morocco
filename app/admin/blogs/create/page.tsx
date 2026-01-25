"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import RichTextEditor from "@/components/admin/ui/RichTextEditor";
import { FileText, Globe } from "lucide-react";

export default function CreateBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "", // HTML content from RTE
    image: [] as (File | string)[],
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
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

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, description: content }));
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
    <div className="w-full mx-auto max-w-[1600px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Write New Blog</h1>
          <p className="text-slate-500 mt-1">
            Share stories and tips with your audience
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Publish Post
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
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

            <RichTextEditor
              label="Content"
              value={formData.description}
              onChange={handleEditorChange}
              placeholder="Write your article content here..."
            />
          </div>
        </div>

        {/* Sidebar Column */}
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

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" /> SEO Metadata
            </h2>

            <AdminInput
              label="Meta Title"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleInputChange}
              placeholder="SEO Title"
            />

            <AdminInput
              label="Keywords"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleInputChange}
              placeholder="comma, separated, keywords"
            />

            <AdminTextarea
              label="Meta Description"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              placeholder="Brief summary for search engines..."
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
