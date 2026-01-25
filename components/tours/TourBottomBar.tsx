"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MapPin, X } from "lucide-react";

export default function TourBottomBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Thank you! We will contact you shortly.");
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Bottom Navigation Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-clay hover:bg-clay-dark text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Request Booking</span>
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Modal Sheet */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <div>
                <h3 className="text-xl font-bold font-heading text-deep-blue">
                  Book This Tour
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clay transition-colors pointer-events-none">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-deep-blue placeholder:text-gray-400 focus:bg-white focus:border-clay/20 focus:ring-4 focus:ring-clay/10 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clay transition-colors pointer-events-none">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-deep-blue placeholder:text-gray-400 focus:bg-white focus:border-clay/20 focus:ring-4 focus:ring-clay/10 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clay transition-colors pointer-events-none">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp / Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-deep-blue placeholder:text-gray-400 focus:bg-white focus:border-clay/20 focus:ring-4 focus:ring-clay/10 outline-none transition-all"
                />
              </div>

              {/* Country */}
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clay transition-colors pointer-events-none">
                  <MapPin size={18} />
                </div>
                <input
                  type="text"
                  name="country"
                  placeholder="Your Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-deep-blue placeholder:text-gray-400 focus:bg-white focus:border-clay/20 focus:ring-4 focus:ring-clay/10 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your plans (dates, group size, special requests)..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 text-deep-blue placeholder:text-gray-400 focus:bg-white focus:border-clay/20 focus:ring-4 focus:ring-clay/10 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-clay hover:bg-clay-dark text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
              >
                <span>Request Booking</span>
                <Send
                  size={18}
                  className="translate-x-0 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
