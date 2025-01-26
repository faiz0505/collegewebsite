"use client";
import React, { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Popup from "../Popup";
const ConfirmationPopup = ({ title, onConfirm, onCancel, isLoading }) => (
  <div className="w-full max-w-[500px] bg-white rounded-lg shadow py-8 px-6">
    <h2 className="text-lg font-semibold text-center mb-4">
      Are you sure you want to delete{" "}
      <span className="text-red-600 font-bold">"{title}"</span>?
    </h2>
    <p className="text-sm text-gray-600 text-center mb-6">
      This action cannot be undone.
    </p>
    <div className="flex justify-center space-x-4">
      <button
        onClick={onConfirm}
        className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
      >
        {isLoading ? "deleting..." : "Yes, Delete"}
      </button>
      <button
        onClick={onCancel}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition"
      >
        No, Cancel
      </button>
    </div>
  </div>
);

const DeleteButton = ({
  text,
  title,
  handleDelete,
  isLoading,
  isPopupOpen,
  setIsOpenPopup,
}) => {
  const handleCancel = () => setIsOpenPopup(false);

  return (
    <div>
      <button
        onClick={() => setIsOpenPopup(true)}
        className="capitalize outline-none text-sm font-semibold bg-secondary/30 px-3 py-2 rounded-lg text-secondary flex items-center gap-1 cursor-pointer text-nowrap "
      >
        {text}
        <MdOutlineDeleteForever className="text-lg" />
      </button>
      <Popup isOpenPopup={isPopupOpen} setIsOpenPopup={setIsOpenPopup}>
        <ConfirmationPopup
          title={title}
          onConfirm={handleDelete}
          onCancel={handleCancel}
          isLoading={isLoading}
        />
      </Popup>
    </div>
  );
};

export default DeleteButton;
