"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import Link from "next/link";

const DashboardNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-white flex justify-between items-center paddings py-4 shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-xl text-gray-700 hover:text-gray-900 transition"
        >
          <FaBars />
        </button>
        <Link href={"/admin"} className="text-lg font-semibold">Admin Dashboard</Link>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Logout
      </button>
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default DashboardNavbar;
