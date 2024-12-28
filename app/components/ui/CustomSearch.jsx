import React from "react";
import CustomInput from "./CustomInput";

const CustomSearch = ({ placeholder, name }) => {
  return (
    <div className="flex items-center bg-white py-2 px-2 rounded max-w-[600px] mx-auto shadow">
      <CustomInput name={name} type={"search"} placeholder={placeholder} />
      <button className="px-5 py-3 outline-none bg-secondary text-white font-semibold rounded uppercase text-sm flex gap-2 items-center text-nowrap">
        Search for course
      </button>
    </div>
  );
};

export default CustomSearch;
