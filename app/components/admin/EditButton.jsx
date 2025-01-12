"use client";
import React from "react";
import { MdEdit } from "react-icons/md";

const EditButton = ({ text, toggler, toggleEdit }) => {
  const handleClick = () => {
    if (toggler) {
      toggleEdit();
    }
  };
  return (
    <div>
      <button
        onClick={() => handleClick()}
        className="capitalize outline-none text-sm font-semibold bg-primary/30 px-3 py-2 rounded-lg text-primary flex items-center gap-1 cursor-pointer text-nowrap "
      >
        {text}
        <MdEdit className="text-lg" />
      </button>
    </div>
  );
};

export default EditButton;
