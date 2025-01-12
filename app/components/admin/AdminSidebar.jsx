import Link from "next/link";
import React from "react";
import {
  FaUserGraduate,
  FaBook,
  FaBullhorn,
  FaChalkboardTeacher,
  FaPhotoVideo,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const AdminSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { name: "Students", icon: <FaUserGraduate />, link: "/admin/students" },
    { name: "Faculty", icon: <FaChalkboardTeacher />, link: "/admin/faculty" },
    { name: "Courses", icon: <FaBook />, link: "/admin/courses" },
    { name: "Blogs", icon: <FaBullhorn />, link: "/admin/blogs" },
    { name: "Gallery", icon: <FaPhotoVideo />, link: "/admin/gallery" },
  ];

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-0"
      } transition-all duration-300 bg-primary overflow-hidden text-white min-h-screen shadow-lg absolute top-0 left-0 z-50`}
    >
      <div className="p-4 text-lg font-bold flex items-center justify-between">
        <span>Admin Panel</span>
        <RxCross2
          className="text-2xl cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>
      <nav className="mt-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700 transition"
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`${isSidebarOpen ? "block" : "hidden"} text-sm`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
