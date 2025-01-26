"use client";
import React from "react";

const CustomInput = ({ type, name, onChange, placeholder, error }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-3 py-2 rounded-sm w-full border-none outline-none bg-white placeholder:capitalize placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold text-black ${
        error && "outline-1 outline-red-700"
      }`}
    />
  );
};

export default CustomInput;
