"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function TourBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 sticky top-24">
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-heading text-deep-blue mb-2">
          Book This Tour
        </h3>
        <p className="text-gray-500 text-sm">
          Fill out the form below and our team will get back to you with
          availability and a quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sand focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sand focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number (WhatsApp)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 234 567 890"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sand focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message / Custom Requests
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="I am interested in..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sand focus:border-transparent transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-clay hover:bg-clay-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
        >
          <span>Send Enquiry</span>
          <Send
            size={18}
            className="translate-x-0 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </form>

      <p className="mt-4 text-xs text-center text-gray-400">
        *No payment required at this stage
      </p>
    </div>
  );
}
