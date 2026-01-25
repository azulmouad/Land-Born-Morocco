"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 text-center bg-slate-900 text-white">
          <h2 className="text-3xl font-bold tracking-wide">
            LandBord<span className="text-emerald-400">.</span>
          </h2>
          <p className="text-slate-400 mt-2">Admin Panel Access</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="admin@landbord.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-emerald-600 font-medium"
            >
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
