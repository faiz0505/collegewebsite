"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FaArrowRightLong,
  FaCalendar,
  FaEye,
  FaRegComment,
} from "react-icons/fa6";
import DeleteButton from "../admin/DeleteButton";
import EditButton from "../admin/EditButton";
const Blog = ({ blogDetail, admin, editable }) => {
  const { _id, title, description, image, date } = blogDetail;
  let views = 100;
  let comments = 12;
  let postBy = "Faiz Ali";
  const router = useRouter();
  return (
    <div
      className={`${
        admin ? "h-[22rem] w-80 rounded-lg" : ""
      } hover:bg-[#eff8ff] cursor-pointer shadow overflow-hidden relative`}
      onClick={() => router.push(`/blogs/blog/${_id}`)}
    >
      <figure
        className={`w-full ${admin ? "h-[55%]" : "h-80"} bg-black/20 relative`}
      >
        {editable && (
          <div className="absolute flex gap-2 top-2 right-2">
            <DeleteButton />
            <EditButton />
          </div>
        )}
        {admin ? (
          <div className="absolute bg-secondary py-1 px-2 rounded top-3 left-3 text-white font-semibold flex items-center gap-2 text-xs capitalize">
            {`${date.day} ${date.month} ${date.year}`}
          </div>
        ) : (
          <div className="absolute bg-white p-1 -bottom-3 right-5 text-black font-semibold flex items-center gap-2 text-md capitalize">
            <figure className="h-10 w-10 bg-secondary"></figure>
            <p>by {postBy}</p>
          </div>
        )}
      </figure>
      <div className="p-2 md:p-4 space-y-3">
        <h2 className="text-xl font-bold capitalize opacity-90">{title}</h2>
        <p className="text-xs opacity-50 font-semibold">{description}</p>
        {admin ? (
          <Link
            href={`/blog/${_id}`}
            className="flex items-center gap-2 text-secondary text-sm font-bold"
          >
            Read More{" "}
            <span className="mt-[1px]">
              <FaArrowRightLong />
            </span>
          </Link>
        ) : (
          <div>
            <hr />
            <div className="mt-4 flex items-center justify-between sm:justify-start sm:gap-3 md:gap-6">
              <div className="flex items-center gap-2 text-gray-600 font-semibold md:text-sm text-xs">
                <FaEye />
                <span className="">{views} Views</span>
              </div>
              <div className="w-[1px] h-3 bg-neutral-400"></div>
              <div className="flex items-center gap-2 text-gray-600 font-semibold md:text-sm text-xs">
                <FaRegComment />
                <span className="">{comments} Comments</span>
              </div>
              <div className="w-[1px] h-3 bg-neutral-400"></div>
              <div className="flex items-center gap-2 text-gray-600 font-semibold md:text-sm text-xs">
                <FaCalendar />
                <span className="">
                  {date.day + " " + date.month + " " + date.year}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
