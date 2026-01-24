"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MapPin } from "lucide-react";

export default function TourBookingForm() {
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
    // Here we would typically handle form submission
    console.log("Form submitted", formData);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 sticky top-24">
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold font-heading text-deep-blue mb-2">
          Book This Tour
        </h3>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
          Ready for an unforgettable journey? Fill in your details and we'll
          arrange everything.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* country (New) */}
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
          className="w-full bg-clay hover:bg-clay-dark text-white font-bold py-4 rounded-2xl shadow-lg shadow-deep-blue/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
        >
          <span>Request Booking</span>
          <Send
            size={18}
            className="translate-x-0 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </form>
    </div>
  );
}
