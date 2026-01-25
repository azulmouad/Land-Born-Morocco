import React from "react";
import { Plus, Trash2, Shield, Mail } from "lucide-react";

const admins = [
  {
    id: 1,
    name: "Super Admin",
    email: "admin@landbord.com",
    role: "Super Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Editor User",
    email: "editor@landbord.com",
    role: "Editor",
    status: "Active",
  },
];

export default function AdminsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admins</h1>
          <p className="text-gray-500 mt-1">Manage system access and roles</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add Admin</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                User
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-600">
                Role
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
            {admins.map((admin) => (
              <tr
                key={admin.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{admin.name}</p>
                      <p className="text-xs text-gray-500">{admin.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">
                  {admin.role}
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {admin.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
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
