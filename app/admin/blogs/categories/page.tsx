import React from "react";
import { Plus, Edit2, Trash2, Tag } from "lucide-react";

const categories = [
  { id: 1, name: "Travel Tips", count: 4 },
  { id: 2, name: "Food & Culture", count: 8 },
  { id: 3, name: "City Guides", count: 12 },
  { id: 4, name: "Adventure", count: 6 },
];

export default function BlogCategoriesPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Categories</h1>
          <p className="text-gray-500 mt-1">Manage article topics</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Category</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.count} articles</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
