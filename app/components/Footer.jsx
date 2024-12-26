import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <section></section>
      <section className="w-full bg-secondary flex flex-col md:flex-row gap-y-5 justify-between items-center py-3 paddings">
        <div className="text-3xl font-extrabold text-white">
          College <span className="">Logo</span>
        </div>
        <p className="text-[10px] text-white font-semibold">
          Copyright © 2024 CollegeName. All right reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
