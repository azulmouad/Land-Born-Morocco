"use client";

import React, { useState } from "react";
import { Plus, Trash2, Edit2, Tag, Search, Save, X } from "lucide-react";
import AdminInput from "@/components/admin/ui/AdminInput";
import AdminButton from "@/components/admin/ui/AdminButton";
import AdminTextarea from "@/components/admin/ui/AdminTextarea";

// Mock data
const initialCategories = [
  {
    id: 1,
    name: "Adventure",
    count: 12,
    description: "Thrilling experiences for the bold.",
  },
  {
    id: 2,
    name: "Nature",
    count: 8,
    description: "Explore the natural beauty.",
  },
  {
    id: 3,
    name: "Cultural",
    count: 15,
    description: "Deep dive into local traditions.",
  },
  {
    id: 4,
    name: "Hiking",
    count: 5,
    description: "Trails and treks for all levels.",
  },
];

export default function TourCategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setCategories((prev) =>
        prev.map((c) => (c.id === isEditing ? { ...c, ...formData } : c)),
      );
      setIsEditing(null);
    } else {
      const newId = Math.max(...categories.map((c) => c.id)) + 1;
      setCategories((prev) => [
        ...prev,
        {
          id: newId,
          name: formData.name,
          description: formData.description,
          count: 0,
        },
      ]);
    }
    setFormData({ name: "", description: "" });
  };

  const startEdit = (cat: (typeof initialCategories)[0]) => {
    setIsEditing(cat.id);
    setFormData({ name: cat.name, description: cat.description });
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setFormData({ name: "", description: "" });
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="w-full mx-auto max-w-[1600px] space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tour Categories</h1>
          <p className="text-gray-500 mt-1">Manage tour types and tags</p>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => {
            setIsMobileFormOpen(!isMobileFormOpen);
            if (isEditing) cancelEdit();
          }}
          className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors w-full md:w-auto"
        >
          {isMobileFormOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
          {isMobileFormOpen ? "Close Form" : "Add New Category"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Right Column: Form (Ordered first on mobile) */}
        <div
          className={`space-y-6 order-1 lg:order-2 lg:col-span-1 ${isMobileFormOpen || isEditing ? "block" : "hidden lg:block"}`}
        >
          <div
            className={`bg-white p-6 rounded-xl border shadow-sm sticky top-6 ${isEditing ? "border-emerald-500 ring-1 ring-emerald-500" : "border-slate-200"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                {isEditing ? (
                  <Edit2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Plus className="w-5 h-5 text-emerald-500" />
                )}
                {isEditing ? "Edit Category" : "Add New Category"}
              </h2>
              {isEditing && (
                <button
                  onClick={cancelEdit}
                  className="text-xs text-red-500 hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" /> Cancel
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <AdminInput
                label="Category Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="e.g. Desert Adventures"
                required
              />

              <AdminTextarea
                label="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Short description for this category..."
                rows={3}
              />

              <AdminButton type="submit" className="w-full">
                {isEditing ? "Update Category" : "Create Category"}
              </AdminButton>
            </form>
          </div>
        </div>

        {/* Left Column: List (Ordered second on mobile) */}
        <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <li
                    key={cat.id}
                    className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${isEditing === cat.id ? "bg-emerald-50/50" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isEditing === cat.id ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-600"} transition-colors`}
                      >
                        <Tag className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {cat.name}
                        </h3>
                        <p className="text-xs text-slate-500 truncate max-w-[200px] sm:max-w-md">
                          {cat.description}
                        </p>
                        <span className="text-xs text-gray-400 mt-1 inline-block">
                          {cat.count} tours
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => startEdit(cat)}
                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li className="p-8 text-center text-slate-500">
                  No categories found.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
