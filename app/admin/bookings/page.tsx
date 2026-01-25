import React from "react";
import { Eye, Trash2, Search, Download } from "lucide-react";

// Mock Data
const bookings = [
  {
    id: "#BK-7890",
    client: "John Doe",
    email: "john@example.com",
    tour: "The Golden Desert Trek",
    date: "2025-11-15",
    status: "Pending",
    amount: "$350",
  },
  {
    id: "#BK-7891",
    client: "Sarah Smith",
    email: "sarah@example.com",
    tour: "Imperial Cities Tour",
    date: "2025-12-01",
    status: "Confirmed",
    amount: "$550",
  },
  {
    id: "#BK-7892",
    client: "Michael Brown",
    email: "michael@example.com",
    tour: "Atlas Mountains Escape",
    date: "2025-10-20",
    status: "Completed",
    amount: "$150",
  },
  {
    id: "#BK-7893",
    client: "Emily Davis",
    email: "emily@example.com",
    tour: "The Golden Desert Trek",
    date: "2026-01-05",
    status: "Cancelled",
    amount: "$350",
  },
  {
    id: "#BK-7894",
    client: "David Wilson",
    email: "david@example.com",
    tour: "Imperial Cities Tour",
    date: "2026-02-14",
    status: "Confirmed",
    amount: "$1100",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-orange-100 text-orange-700",
  Confirmed: "bg-emerald-100 text-emerald-700",
  Completed: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function BookingsPage() {
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
        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-emerald-500">
          <option>All Status</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
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
                        {booking.email}
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
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[booking.status] || "bg-gray-100 text-gray-800"}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
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
    </div>
  );
}
