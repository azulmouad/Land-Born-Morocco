"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Map,
  MapPin,
  Image as ImageIcon,
  FileText,
  Star,
  HelpCircle,
  User,
  Settings,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
} from "lucide-react";

// If cn utility is not available, I'll define a simple one here for now or use template literals.
// Checking package.json revealed clsx and tailwind-merge, so simple cn is likely standard.
// If not found, I will create it.
// For this file, I will assume a local helper if import fails, but let's stick to standard patterns.
// Given I haven't checked lib/utils, I will inline a helper if needed or just use template strings for safety in this step,
// BUT standard nextjs projects often have it. I'll gamble on standard template strings to avoid dependency issues for this specific file until verified.

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Bookings",
    href: "/admin/bookings",
    icon: CalendarDays,
    submenu: [{ title: "List Bookings", href: "/admin/bookings" }],
  },
  {
    title: "Tours",
    icon: Map,
    submenu: [
      { title: "List Tours", href: "/admin/tours" },
      { title: "Create Tour", href: "/admin/tours/create" },
      { title: "Categories", href: "/admin/tours/categories" },
    ],
  },
  {
    title: "Destinations",
    icon: MapPin,
    submenu: [
      { title: "List Destinations", href: "/admin/destinations" },
      { title: "Create Destination", href: "/admin/destinations/create" },
    ],
  },
  {
    title: "Gallery",
    icon: ImageIcon,
    submenu: [
      { title: "List Gallery", href: "/admin/gallery" },
      { title: "Create Image", href: "/admin/gallery/create" },
    ],
  },
  {
    title: "Blogs",
    icon: FileText,
    submenu: [
      { title: "List Blogs", href: "/admin/blogs" },
      { title: "Create Blog", href: "/admin/blogs/create" },
      { title: "Categories", href: "/admin/blogs/categories" },
    ],
  },
  {
    title: "Reviews",
    icon: Star,
    submenu: [
      { title: "List Reviews", href: "/admin/reviews" },
      { title: "Create Review", href: "/admin/reviews/create" },
    ],
  },
  {
    title: "FAQ",
    icon: HelpCircle,
    submenu: [
      { title: "List FAQ", href: "/admin/faq" },
      { title: "Create FAQ", href: "/admin/faq/create" },
    ],
  },
  {
    title: "Profile",
    icon: User,
    submenu: [
      { title: "About Me", href: "/admin/profile/about" },
      { title: "Contact Info", href: "/admin/profile/contact" },
      { title: "Privacy Policy", href: "/admin/profile/privacy" },
      { title: "Social Media", href: "/admin/profile/social" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    submenu: [
      { title: "Admins", href: "/admin/settings/admins" },
      { title: "SMTP", href: "/admin/settings/smtp" },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (href: string) => pathname === href;
  const isSubmenuActive = (item: any) => {
    if (item.href && isActive(item.href)) return true;
    if (item.submenu) {
      return item.submenu.some((sub: any) => isActive(sub.href));
    }
    return false;
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 border-b flex items-center p-4">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <span className="font-bold text-lg ml-2">Admin Panel</span>
      </div>

      {/* Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-slate-900 text-slate-100 flex flex-col transition-transform duration-300 z-50 
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold tracking-wider">
            LandBord<span className="text-emerald-400">.</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
          {sidebarItems.map((item) => {
            const active = isSubmenuActive(item);
            const isOpen = openSubmenus[item.title] || active; // Auto-open if active

            return (
              <div key={item.title}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors duration-200 
                        ${active ? "bg-slate-800 text-emerald-400" : "hover:bg-slate-800 text-slate-300 hover:text-white"}`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className={`w-5 h-5 ${active ? "text-emerald-400" : "text-slate-400"}`}
                        />
                        <span className="font-medium text-sm">
                          {item.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="ml-9 mt-1 space-y-1 mb-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block py-2 px-3 text-sm rounded-md transition-colors
                                        ${
                                          isActive(sub.href)
                                            ? "bg-emerald-500/10 text-emerald-400 font-medium"
                                            : "text-slate-400 hover:text-white hover:bg-slate-800"
                                        }
                                    `}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200
                        ${
                          isActive(item.href)
                            ? "bg-slate-800 text-emerald-400"
                            : "hover:bg-slate-800 text-slate-300 hover:text-white"
                        }
                    `}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <item.icon
                      className={`w-5 h-5 ${isActive(item.href) ? "text-emerald-400" : "text-slate-400"}`}
                    />
                    <span className="font-medium text-sm">{item.title}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button className="flex items-center gap-3 px-3 py-2 w-full text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
