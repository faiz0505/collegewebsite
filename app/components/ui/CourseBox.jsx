import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

const CourseBox = ({ courseDetail }) => {
  const { _id, title, description, image, stream } = courseDetail;
  return (
    <div className="h-[22rem] w-80 hover:bg-[#eff8ff] cursor-pointer shadow">
      <figure className="w-full h-[55%] bg-primary relative">
        <div className="absolute bg-secondary py-2 px-3 rounded -bottom-4 right-5 text-white font-semibold flex items-center gap-2 text-xs md:text-sm capitalize">
          <span className="text-lg">
            <GiGraduateCap />
          </span>
          {stream}
        </div>
      </figure>
      <div className="p-2 md:p-4 space-y-3">
        <h2 className="text-xl font-bold capitalize opacity-90">{title}</h2>
        <p className="text-xs opacity-50 font-semibold">{description}</p>
        <Link
          href={`/course/${_id}`}
          className="flex items-center gap-2 text-secondary text-sm font-bold"
        >
          Read More{" "}
          <span className="mt-[1px]">
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CourseBox;
