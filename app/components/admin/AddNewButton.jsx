"use client";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddNewButton = ({ text }) => {
  return (
    <div className="">
      <button className="capitalize outline-none text-sm font-semibold bg-primary/30 px-3 py-2 rounded-lg text-primary-dark flex items-center gap-1 cursor-pointer text-nowrap w-fit">
        <IoMdAdd className="text-lg" />
        {text}
      </button>
    </div>
  );
};

export default AddNewButton;
