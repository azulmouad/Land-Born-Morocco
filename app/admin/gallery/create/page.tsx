"use client";

import React, { useState, useEffect } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminSelect from "@/components/admin/ui/AdminSelect";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import { Camera, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface MediaItem {
  file: File | string;
  preview: string;
  caption: string;
}

export default function CreateGalleryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    cities: [] as string[],
  });

  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

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

  const handleMediaUpload = (files: (File | string)[]) => {
    // Convert new files to MediaItem structure
    const newItems = files.map((file) => {
      let preview = "";
      if (typeof file === "string") {
        preview = file;
      } else {
        preview = URL.createObjectURL(file);
      }
      return {
        file,
        preview,
        caption: "",
      };
    });

    setMediaItems((prev) => [...prev, ...newItems]);
  };

  const removeMediaItem = (index: number) => {
    setMediaItems((prev) => {
      const newItems = [...prev];
      // Revoke object URL to avoid memory leaks if it's a blob
      if (newItems[index].preview.startsWith("blob:")) {
        URL.revokeObjectURL(newItems[index].preview);
      }
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const updateMediaCaption = (index: number, caption: string) => {
    setMediaItems((prev) => {
      const newItems = [...prev];
      newItems[index].caption = caption;
      return newItems;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const submissionData = {
      ...formData,
      media: mediaItems.map((m) => ({ file: m.file, caption: m.caption })),
    };
    console.log("Submitting Gallery Item:", submissionData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Gallery item added successfully! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Add to Gallery</h1>
          <p className="text-slate-500 mt-1">Upload memories to the timeline</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Cancel
          </AdminButton>
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Upload Media
          </AdminButton>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column: Media Upload & Details */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-emerald-500" /> Media Content
            </h2>

            {/* Upload Area using ImageUpload purely for selection triggered, keeping it simple or reusing it? 
                        The ImageUpload component handles value/onChange internally and shows previews. 
                        We want to intercept that. 
                        Let's use a simple hidden file input tailored or just use ImageUpload 
                        but we clear it after selection to add to our custom list.
                    */}

            <div className="p-8 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 text-center hover:bg-slate-100 transition-colors">
              <ImageUpload
                label="Add Images/Videos"
                onChange={(files) => handleMediaUpload(files)}
                value={[]} // Always keep empty to act as an 'adder'
                multiple
                helperText="Select files to add to the gallery list below"
              />
            </div>

            {/* Media List with Captions */}
            {mediaItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 relative group"
                  >
                    <div className="relative w-24 h-24 shrink-0 bg-slate-200 rounded-lg overflow-hidden">
                      <Image
                        src={item.preview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Image Caption
                      </label>
                      <input
                        type="text"
                        value={item.caption}
                        onChange={(e) =>
                          updateMediaCaption(index, e.target.value)
                        }
                        placeholder="Enter caption for this image..."
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                      <button
                        onClick={() => removeMediaItem(index)}
                        className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: General Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-lg font-semibold text-slate-800">
              Event Details
            </h2>

            <AdminInput
              label="Event Title"
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

            <AdminSelect
              label="Related Cities"
              options={cityOptions}
              value={formData.cities}
              onChange={(val) => handleSelectChange("cities", val)}
              multiple
              placeholder="Select cities"
            />

            <AdminTextarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Story behind this moment..."
              rows={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
