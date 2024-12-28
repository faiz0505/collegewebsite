"use client";
import { useState } from "react";

export default function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Always display the first page
    if (currentPage > 2) {
      pageNumbers.push(
        <button
          key={1}
          className="px-4 py-2 border rounded bg-white text-gray-700"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(
          <span key="dots-left" className="px-4 py-2 text-gray-500">
            ...
          </span>
        );
      }
    }

    // Display the current page and its surrounding pages
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          className={`h-10 w-10 flex justify-center items-center border rounded-full font-semibold ${
            i === currentPage
              ? "bg-secondary text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Always display the last page
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        pageNumbers.push(
          <div
            key="dots-right"
            className="h-10 w-10 border rounded-full text-gray-500 flex justify-center pt-1"
          >
            ...
          </div>
        );
      }

      pageNumbers.push(
        <button
          key={totalPages}
          className="h-10 w-10 flex justify-center items-center border rounded-full bg-white text-gray-700 font-semibold"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`h-10 w-10 flex justify-center items-center border rounded-full ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`h-10 w-10 flex justify-center items-center border rounded-full ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700"
        }`}
      >
        &gt;
      </button>
    </div>
  );
}
