import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Edit2, Trash2, Search, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
          <p className="text-gray-500 mt-1">Manage news and articles</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admin/blogs/categories"
            className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/admin/blogs/create"
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Create Post</span>
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Title
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Category
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Author
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {BLOG_POSTS.map((post) => (
              <tr
                key={post.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span
                      className="font-medium text-gray-900 line-clamp-1 max-w-xs"
                      title={post.title}
                    >
                      {post.title}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                    {post.category}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {post.author}
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {post.date}
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/blogs/edit/${post.id}`}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Link>
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
