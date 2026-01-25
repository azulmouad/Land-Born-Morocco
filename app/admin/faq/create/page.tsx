"use client";

import React, { useState } from "react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminButton from "@/components/admin/ui/AdminButton";
import { HelpCircle } from "lucide-react";

export default function CreateFAQPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
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
    console.log("Submitting FAQ:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    alert("FAQ created successfully! (Mock)");
    setFormData({ question: "", answer: "" }); // Reset after add
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Create FAQ</h1>
          <p className="text-slate-500 mt-1">
            Add a commonly asked question and its answer
          </p>
        </div>
        <div className="flex gap-3">
          <AdminButton variant="outline" onClick={() => window.history.back()}>
            Back
          </AdminButton>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-emerald-600 font-medium mb-2">
          <HelpCircle className="w-5 h-5" />
          <span>Q&A Details</span>
        </div>

        <AdminInput
          label="Question"
          name="question"
          value={formData.question}
          onChange={handleInputChange}
          placeholder="e.g., What is the best time to visit?"
          helperText="Keep questions concise and clear."
        />

        <AdminTextarea
          label="Answer"
          name="answer"
          value={formData.answer}
          onChange={handleInputChange}
          placeholder="Provide a helpful and detailed answer..."
          rows={5}
        />

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <AdminButton onClick={handleSubmit} isLoading={isLoading}>
            Save FAQ
          </AdminButton>
        </div>
      </div>
    </div>
  );
}
