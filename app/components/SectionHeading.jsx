import React from "react";

const SectionHeading = ({ icon, title, customClass }) => {
  return (
    <h6
      className={`text-secondary flex items-center gap-2 font-[500] text-sm capitalize ${customClass}`}
    >
      <span className="text-xl">{icon}</span>
      {title}
    </h6>
  );
};

export default SectionHeading;
