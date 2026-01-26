"use client";

import React, { useState } from "react";
import { Save } from "lucide-react";
import AdminButton from "@/components/admin/ui/AdminButton";
import RichTextEditor from "@/components/admin/ui/RichTextEditor";

export default function PrivacyProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(`<h1>Privacy Policy</h1>
<p>Last updated: January 2026</p>
<h2>1. Introduction</h2>
<p>Welcome to LandBord Morocco. We value your privacy and are committed to protecting your personal data...</p>
<h2>2. Data We Collect</h2>
<p>We may collect personal identification information from Users...</p>`);

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Saving privacy policy:", content);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    alert("Privacy policy saved! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mt-1">
            Update your terms and privacy statement
          </p>
        </div>
        <AdminButton
          onClick={handleSubmit}
          isLoading={isLoading}
          className="shrink-0"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Policy
        </AdminButton>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <RichTextEditor
          label="Privacy Policy Content"
          value={content}
          onChange={setContent}
          placeholder="Write your privacy policy here..."
        />
      </div>
    </div>
  );
}
