"use client";

import React from "react";
import { Save } from "lucide-react";

export default function PrivacyProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="shrink-0">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500 mt-1">
          Update your terms and privacy statement
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex-1 flex flex-col p-6">
        <div className="flex-1">
          <textarea
            className="w-full h-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none font-mono text-sm leading-relaxed"
            defaultValue={`# Privacy Policy\n\nLast updated: January 2026\n\n## 1. Introduction\n\nWelcome to LandBord Morocco. We value your privacy and are committed to protecting your personal data...\n\n## 2. Data We Collect\n\nWe may collect personal identification information from Users...`}
          />
        </div>

        <div className="pt-6 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Policy
          </button>
        </div>
      </div>
    </div>
  );
}
