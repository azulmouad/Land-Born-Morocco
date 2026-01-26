"use client";

import React from "react";
import {
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

// Mock data
const stats = [
  {
    label: "Bookings Pending",
    value: "23",
    icon: Clock,
    color: "bg-amber-500",
  },
  {
    label: "Bookings Confirmed",
    value: "89",
    icon: CheckCircle,
    color: "bg-emerald-500",
  },
  {
    label: "Bookings Canceled",
    value: "15",
    icon: XCircle,
    color: "bg-red-500",
  },
  {
    label: "Total Tours",
    value: "8",
    icon: MapPin,
    color: "bg-blue-500",
  },
  {
    label: "Total Blogs",
    value: "12",
    icon: MessageSquare,
    color: "bg-purple-500",
  },
  {
    label: "Total Destinations",
    value: "6",
    icon: MapPin,
    color: "bg-indigo-500",
  },
];

const recentBookings = [
  {
    id: "#BK-7894",
    client: "David Wilson",
    tour: "Imperial Cities Tour",
    date: "2026-02-14",
    status: "Not Answered",
    amount: "$1100",
  },
  {
    id: "#BK-7893",
    client: "Emily Davis",
    tour: "The Golden Desert Trek",
    date: "2026-01-05",
    status: "Canceled",
    amount: "$350",
  },
  {
    id: "#BK-7892",
    client: "Michael Brown",
    tour: "Atlas Mountains Escape",
    date: "2025-10-20",
    status: "Confirmed",
    amount: "$150",
  },
  {
    id: "#BK-7891",
    client: "Sarah Smith",
    tour: "Imperial Cities Tour",
    date: "2025-12-01",
    status: "Confirmed",
    amount: "$550",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                  <Icon
                    className={`w-6 h-6 ${stat.color.replace("bg-", "text-")}`}
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
            <Link
              href="/admin/bookings"
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600">
                    ID
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600">
                    Client
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600">
                    Tour
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="py-3 px-6 text-right text-xs font-semibold text-gray-600">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3 px-6 text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-700">
                      {booking.client}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-600">
                      {booking.tour}
                    </td>
                    <td className="py-3 px-6">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === "Confirmed"
                            ? "bg-emerald-100 text-emerald-700"
                            : booking.status === "Not Answered"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-sm font-medium text-gray-900 text-right">
                      {booking.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2">
            <Link
              href="/admin/tours"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <MapPin className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Manage Tours
              </span>
            </Link>
            <Link
              href="/admin/destinations"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <MapPin className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Manage Destinations
              </span>
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Manage Blogs
              </span>
            </Link>
            <Link
              href="/admin/gallery"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                Update Gallery
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
