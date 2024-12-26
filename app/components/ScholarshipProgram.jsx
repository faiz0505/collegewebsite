import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ScholarshipProgram = () => {
  return (
    <section className="h-fit w-full py-8 relative bg-cyan-950 my-20">
      <Image
        src={"/assets/scholarship.webp"}
        alt="scholarship program"
        fill
        sizes="100%"
        priority={false}
        loading="lazy"
        className="object-cover object-center absolute opacity-20"
      />
      <div className="relative flex justify-between flex-col md:flex-row gap-y-6 items-start paddings">
        <div className="text-white space-y-2 flex flex-col">
          <h2 className="text-3xl font-bold capitalize text-center md:text-left">
            scholarship program
          </h2>
          <p className="text-xs text-opacity-65 w-[70%] text-center md:text-left self-center md:self-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            aspernatur id, sed sequi tempore numquam illum modi esse nisi quam.
          </p>
        </div>
        <button className="px-5 py-3 outline-none bg-secondary text-white font-semibold rounded capitalize text-sm flex gap-2 items-center self-center md:self-start">
          financial aid{" "}
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ScholarshipProgram;
