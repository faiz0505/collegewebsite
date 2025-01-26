"use client";

import { useEffect, useState } from "react";

const Toast = ({ type, message }) => {
  cosnt[(visible, setVisible)] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // Define variant styles
  const variantStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`px-4 py-2 rounded shadow-lg flex items-center justify-between w-[90%] sm:w-[30%] mx-auto mt-2 ${
        variantStyles[type]
      } ${visible ? "fixed top-3 left-1/2 -translate-x-1/2" : "hidden"} `}
    >
      <span>{message}</span>
      <button
        className="ml-2 text-white font-bold"
        onClick={() => removeToast(id)}
      >
        x
      </button>
    </div>
  );
};

export default Toast;
