import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin Panel - LandBord Morocco",
  description: "Administrative dashboard for LandBord Morocco",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-6 md:p-8 mt-14 md:mt-0 transition-all overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
