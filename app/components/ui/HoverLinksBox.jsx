"use client";
import React, { useState } from "react";
import Link from "next/link";

export const HoverLinksBox = ({ parentLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={parentLink.href || "#"} className="hover:text-blue-500">
        {parentLink.title}
      </Link>

      {parentLink.subLinks && parentLink.subLinks.length > 0 && (
        <div
          className={`absolute inline-block left-0 top-full bg-white border rounded-md shadow-md w-48 z-50 ${
            isHovered ? "md:block hidden" : "hidden"
          }`}
        >
          <ul className="flex flex-col z-50">
            {parentLink.subLinks.map((subLink) => (
              <li key={subLink.title} className="hover:bg-gray-100">
                <Link
                  href={subLink.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                >
                  {subLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
