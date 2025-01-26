"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Popup from "../Popup";

const AddNewButton = ({ text, children }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenPopup((pre) => !pre)}
        className="capitalize outline-none text-sm font-semibold bg-primary/30 px-3 py-2 rounded-lg text-primary-dark flex items-center gap-1 cursor-pointer text-nowrap w-fit"
      >
        <IoMdAdd className="text-lg" />
        {text}
      </button>
      <Popup
        isOpenPopup={isOpenPopup}
        setIsOpenPopup={setIsOpenPopup}
        children={children}
      />
    </>
  );
};

export default AddNewButton;
