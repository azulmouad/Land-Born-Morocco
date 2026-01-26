"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminButton from "@/components/admin/ui/AdminButton";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import DynamicList from "@/components/admin/ui/DynamicList";
import { User, Award } from "lucide-react";

export default function AboutProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Omar",
    lastName: "Ouahid",
    jobTitle: "Senior Tour Guide & Founder",
    experience: "10+ Years",
    bio: "Passionate tour guide with over 10 years of experience showing travelers the beauty of Morocco...",
    image: [] as (File | string)[],
    certificates: [
      "Certified Professional Guide",
      "Fluent in English, French & Amazing Stories",
      "Authentic Local Experiences",
      "Comfortable & Safe Transport",
    ] as string[],
  });

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Submitting Profile:", formData);
    setIsLoading(false);
    alert("Profile updated successfully! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
          <p className="text-gray-500 mt-1">Manage your profile information</p>
        </div>
        <AdminButton
          onClick={handleSubmit}
          isLoading={isLoading}
          className="shrink-0"
        >
          Save Changes
        </AdminButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-500" /> Personal Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <AdminInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminInput
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
              <AdminInput
                label="Experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g. 10 Years"
              />
            </div>

            <AdminTextarea
              label="Bio / Introduction"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={6}
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" /> Certificates &
              Skills
            </h2>
            <DynamicList
              items={formData.certificates}
              onChange={(items) =>
                setFormData((prev) => ({ ...prev, certificates: items }))
              }
              placeholder="Add certificate or skill..."
              helperText="List your certifications, languages, or key selling points."
            />
          </div>
        </div>

        {/* Sidebar / Image */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Profile Photo
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
