import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
const Blog = ({ blogDetail }) => {
  const { _id, title, description, image, date } = blogDetail;

  return (
    <div className="h-[22rem] w-80 hover:bg-[#eff8ff] cursor-pointer shadow rounded-lg overflow-hidden">
      <figure className="w-full h-[55%] bg-primary relative">
        <div className="absolute bg-secondary py-1 px-2 rounded top-3 left-3 text-white font-semibold flex items-center gap-2 text-xs capitalize">
          {`${date.day} ${date.month} ${date.year}`}
        </div>
      </figure>
      <div className="p-2 md:p-4 space-y-3">
        <h2 className="text-xl font-bold capitalize opacity-90">{title}</h2>
        <p className="text-xs opacity-50 font-semibold">{description}</p>
        <Link
          href={`/blog/${_id}`}
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

export default Blog;
