"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa6";
const CustomAccordion = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen((pre) => !pre);
  return (
    <div>
      <h4
        className={`px-4 py-2 border rounded-sm ${
          isOpen ? "border-secondary" : "border-gray-700"
        }`}
      >
        <button
          onClick={() => toggleCollapse()}
          className="flex justify-between items-center w-full"
        >
          <span className="text-sm font-semibold opacity-80">{`${number} ${question}`}</span>
          {isOpen ? <FaAngleLeft /> : <FaAngleDown />}
        </button>
      </h4>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } text-xs font-semibold opacity-40 leading-relaxed mt-4`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default CustomAccordion;
