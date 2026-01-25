import React from "react";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
      <div className="p-10 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-white shadow-sm h-96">
        <p className="text-xl">
          Dashboard content requires backend integration.
        </p>
      </div>
    </div>
  );
}
