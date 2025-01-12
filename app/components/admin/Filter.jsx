"use client";
import React, { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Filter = ({ filterData }) => {
  const [openIndices, setOpenIndices] = useState([]); // Tracks open items as an array
  const [selectedFilters, setSelectedFilters] = useState({}); // Tracks selected filters

  const handleToggle = (index) => {
    setOpenIndices(
      (prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index) // Remove from openIndices if already open
          : [...prevIndices, index] // Add to openIndices if not already open
    );
  };

  const handleFilterChange = (filterCategory, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterCategory]: option, // Replace the category's selection with the new option
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({}); // Clear all selected filters
  };
  //   useEffect(() => {
  //     console.log(selectedFilters);
  //   }, [selectedFilters]);

  return (
    <div className="space-y-6 bg-white shadow py-4 px-3 rounded-lg">
      <div className="flex justify-between items-center">
        <h4 className="text-2xl font-bold text-gray-800">Filters</h4>
        <button
          onClick={() => setSelectedFilters({})}
          className="capitalize outline-none text-sm font-semibold bg-secondary/30 px-2 py-1 rounded-lg text-secondary flex items-center gap-1 cursor-pointer"
        >
          clear filter
          <RxCross2 />
        </button>
      </div>
      <hr className="mt-2 mb-4 border-secondary" />
      <ul className="space-y-4">
        {filterData.map((item, index) => {
          const isOpen = openIndices.includes(index); // Check if this item is open

          return (
            <li key={item._id}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span className="text-md font-semibold">{item.title}</span>
                {isOpen ? <IoChevronUp /> : <IoChevronDown />}
              </div>

              {/* Dropdown Options */}
              <div
                className={`transition-all duration-300 overflow-hidden space-y-1 ${
                  isOpen ? "h-auto mt-2" : "h-0"
                }`}
              >
                {item.options.map((option) => (
                  <div
                    key={option}
                    className="text-gray-700 ml-4 flex items-center gap-2 capitalize"
                  >
                    <input
                      id={option}
                      type="radio" // Use radio button for single selection
                      name={item.title} // Group options by category
                      checked={selectedFilters[item.title] == option || false}
                      onChange={() => handleFilterChange(item.title, option)}
                    />
                    <label htmlFor={option} className="cursor-pointer"> {option}</label>
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
