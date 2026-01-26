"use client";

import React, { useState } from "react";
import {
  Eye,
  Trash2,
  Search,
  Download,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Map,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

// Mock Data
interface Booking {
  id: string;
  client: string;
  email: string;
  phone: string;
  country: string;
  tour: string;
  date: string;
  amount: string;
  status: "Confirmed" | "Not Answered" | "Canceled";
}

const statusConfig: Record<
  Booking["status"],
  { color: string; icon: typeof CheckCircle; bg: string }
> = {
  Confirmed: {
    color: "text-emerald-700",
    bg: "bg-emerald-100",
    icon: CheckCircle,
  },
  "Not Answered": { color: "text-amber-700", bg: "bg-amber-100", icon: Clock },
  Canceled: { color: "text-red-700", bg: "bg-red-100", icon: XCircle },
};

const bookings: Booking[] = [
  {
    id: "#BK-7890",
    client: "John Doe",
    email: "john@example.com",
    phone: "+1 555 123 4567",
    country: "USA",
    tour: "The Golden Desert Trek",
    date: "2025-11-15",
    amount: "$350",
    status: "Not Answered",
  },
  {
    id: "#BK-7891",
    client: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+44 20 7946 0958",
    country: "UK",
    tour: "Imperial Cities Tour",
    date: "2025-12-01",
    amount: "$550",
    status: "Confirmed",
  },
  {
    id: "#BK-7892",
    client: "Michael Brown",
    email: "michael@example.com",
    phone: "+49 30 12345678",
    country: "Germany",
    tour: "Atlas Mountains Escape",
    date: "2025-10-20",
    amount: "$150",
    status: "Confirmed",
  },
  {
    id: "#BK-7893",
    client: "Emily Davis",
    email: "emily@example.com",
    phone: "+33 1 23 45 67 89",
    country: "France",
    tour: "The Golden Desert Trek",
    date: "2026-01-05",
    amount: "$350",
    status: "Canceled",
  },
  {
    id: "#BK-7894",
    client: "David Wilson",
    email: "david@example.com",
    phone: "+61 2 1234 5678",
    country: "Australia",
    tour: "Imperial Cities Tour",
    date: "2026-02-14",
    amount: "$1100",
    status: "Not Answered",
  },
];

export default function BookingsPage() {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-500 mt-1">
            Manage client bookings and inquiries
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  ID
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Client
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Tour
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Amount
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {booking.id}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {booking.client}
                      </span>
                      <span className="text-xs text-gray-500">
                        {booking.country}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {booking.tour}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {booking.date}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {booking.amount}
                  </td>
                  <td className="py-4 px-6">
                    {(() => {
                      const config = statusConfig[booking.status];
                      const StatusIcon = config.icon;
                      return (
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {booking.status}
                        </span>
                      );
                    })()}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination mock */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Showing 1-5 of 12 bookings
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 bg-slate-50 text-slate-600">
              1
            </button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Booking Details
                </h2>
                <p className="text-sm text-gray-500">{selectedBooking.id}</p>
              </div>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <User className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Client
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedBooking.client}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Country
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedBooking.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Mail className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedBooking.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Phone className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedBooking.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <Map className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      Tour
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedBooking.tour}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-pink-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Date
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedBooking.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <DollarSign className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Amount
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedBooking.amount}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Status
                  </p>
                  {(() => {
                    const config = statusConfig[selectedBooking.status];
                    const StatusIcon = config.icon;
                    return (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${config.bg} ${config.color}`}
                      >
                        <StatusIcon className="w-4 h-4" />
                        {selectedBooking.status}
                      </span>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50/50">
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                Delete Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
