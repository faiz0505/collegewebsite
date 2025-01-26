"use client";
import React from "react";
import ReactDOM from "react-dom";

const Popup = ({ isOpenPopup, setIsOpenPopup, children }) => {
  // Ensure the popup renders only when it's supposed to be open
  if (!isOpenPopup) return null;

  // Define the popup content
  const popupContent = (
    <div
      className="fixed h-screen w-full top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center py-4"
      onClick={() => setIsOpenPopup(false)}
    >
      <div
        className="overflow-y-scroll scrollbar-hide"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when interacting with inner content
      >
        {children}
      </div>
    </div>
  );

  // Render the popup into a portal attached to the body
  return ReactDOM.createPortal(popupContent, document.body);
};

export default Popup;
