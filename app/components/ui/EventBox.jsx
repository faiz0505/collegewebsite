import { formatDate } from "@/app/utils/formatDate";
import { formatTime } from "@/app/utils/formatTime";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

const EventBox = ({ event }) => {
  const { _id, name, description, image, date, time, location } = event;
  return (
    <div className="h-96 w-full bg-[#eff8ff] hover:bg-primary group cursor-pointer shadow">
      <figure className="w-full h-[55%] bg-gray-700/50 relative">
        <div className="absolute bg-secondary py-2 px-3 rounded -bottom-2 left-5 text-white font-semibold flex flex-col items-center capitalize">
          <div className="font-bold text-lg leading-tight">
            {date.split("-")[2]}
          </div>
          <div className="text-xs">{formatDate(date)}</div>
        </div>
      </figure>
      <div className="p-2 md:p-4 space-y-3 mt-2">
        <h2 className="text-xl font-bold capitalize opacity-90 group-hover:text-white">
          {name}
        </h2>
        <p className="text-xs opacity-50 font-semibold group-hover:text-white">
          {description}
        </p>
        <div className="flex items-center gap-2 text-xs group-hover:text-gray-200 text-gray-400">
          {`${formatTime(time.from)} - ${formatTime(time.to)}`}
          <span className="mt-[1px] group-hover:text-white">
            <FaArrowRightLong />
          </span>
          <span className="font-bold text-secondary group-hover:text-white capitalize">
            {location}
          </span>
        </div>
        <Link
          href={`/events/${_id}`}
          className="flex items-center gap-2 text-secondary text-sm font-bold"
        >
          Explore More{" "}
          <span className="mt-[1px]">
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EventBox;
