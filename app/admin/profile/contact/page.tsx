"use client";

import React, { useState } from "react";
import { Save, MapPin, Phone, Mail } from "lucide-react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";
import AdminButton from "@/components/admin/ui/AdminButton";

export default function ContactProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "contact@landbord.com",
    phone: "+212 6 00 00 00 00",
    address: "Merzouga, Morocco",
    mapEmbed: "https://www.google.com/maps/embed?...",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("Saving contact info:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    alert("Contact info saved! (Mock)");
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Info</h1>
          <p className="text-gray-500 mt-1">Manage public contact details</p>
        </div>
        <AdminButton
          onClick={handleSubmit}
          isLoading={isLoading}
          className="shrink-0"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </AdminButton>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AdminInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="contact@example.com"
          />

          <AdminInput
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+212 6 00 00 00 00"
          />
        </div>

        <AdminInput
          label="Address / Location"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="City, Country"
        />

        <AdminTextarea
          label="Google Maps Embed Link"
          name="mapEmbed"
          value={formData.mapEmbed}
          onChange={handleInputChange}
          rows={3}
          helperText="Paste your Google Maps embed URL here"
        />
      </div>
    </div>
  );
}
