import React from "react";
import CustomInput from "./CustomInput";

const CustomSearch = ({ placeholder, name, variant, icon }) => {
  return (
    <div
      className={`flex items-center  ${
        variant == "primary" ? "py-2 px-2 rounded bg-white" : "py-0"
      }   max-w-[600px] mx-auto shadow`}
    >
      <CustomInput name={name} type={"search"} placeholder={placeholder} />
      <button
        className={`${
          variant == "primary"
            ? "px-5 py-3 bg-secondary text-sm rounded"
            : "bg-primary text-lg py-2 px-3"
        } outline-none  text-white font-semibold  uppercase flex items-center text-nowrap`}
      >
        {icon || "Search for course"}
      </button>
    </div>
  );
};

export default CustomSearch;
