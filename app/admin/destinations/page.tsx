import React from "react";
import { Plus, Edit2, Trash2, MapPin, Search } from "lucide-react";

// Mock Data
const destinations = [
  {
    id: 1,
    name: "Marrakech",
    region: "Marrakech-Safi",
    popular: true,
    toursCount: 15,
  },
  { id: 2, name: "Fez", region: "Fez-Meknes", popular: true, toursCount: 8 },
  {
    id: 3,
    name: "Merzouga",
    region: "Drâa-Tafilalet",
    popular: true,
    toursCount: 12,
  },
  {
    id: 4,
    name: "Chefchaouen",
    region: "Tangier-Tetouan-Al Hoceima",
    popular: false,
    toursCount: 4,
  },
  {
    id: 5,
    name: "Essaouira",
    region: "Marrakech-Safi",
    popular: false,
    toursCount: 6,
  },
];

export default function DestinationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Destinations</h1>
          <p className="text-gray-500 mt-1">
            Manage travel destinations and regions
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add Destination</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Region
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600 text-center">
                Tours
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600 text-center">
                Featured
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {destinations.map((dest) => (
              <tr
                key={dest.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-900">
                      {dest.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-500">
                  {dest.region}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900 text-center">
                  {dest.toursCount}
                </td>
                <td className="py-4 px-6 text-center">
                  {dest.popular ? (
                    <span className="inline-flex px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="text-gray-400 text-xs">-</span>
                  )}
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
