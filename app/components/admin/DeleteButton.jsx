"use client";
import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteButton = ({ text }) => {
  return (
    <div>
      <button className="capitalize outline-none text-sm font-semibold bg-secondary/30 px-3 py-2 rounded-lg text-secondary flex items-center gap-1 cursor-pointer text-nowrap ">
        {text}
        <MdOutlineDeleteForever className="text-lg" />
      </button>
    </div>
  );
};

export default DeleteButton;
