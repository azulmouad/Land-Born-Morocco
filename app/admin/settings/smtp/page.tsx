"use client";

import React from "react";
import { Save, Server, ShieldCheck } from "lucide-react";

export default function SMTPPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">SMTP Settings</h1>
        <p className="text-gray-500 mt-1">Configure email sending services</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-8">
        <div className="grid gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              SMTP Host
            </label>
            <div className="relative">
              <Server className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="smtp.example.com"
                className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Port</label>
              <input
                type="text"
                placeholder="587"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Encryption
              </label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
                <option>TLS</option>
                <option>SSL</option>
                <option>None</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="user@example.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Test Connection
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
