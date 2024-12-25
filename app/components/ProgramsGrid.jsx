import React from "react";
import CourseBox from "./ui/CourseBox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const ProgramsGrid = ({ title, courses }) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-3 mb-5">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {/* <div className="flex items-center gap-3">
          <button className="border-none outline-none h-8 w-8 rounded bg-primary flex justify-center items-center hover:bg-secondary text-white">
            <FaChevronLeft />
          </button>
          <button className="border-none outline-none h-8 w-8 rounded bg-primary flex justify-center items-center hover:bg-secondary text-white">
            <FaChevronRight />
          </button>
        </div> */}
      </div>
      <div className="w-full grid grid-flow-col overflow-x-scroll scrollbar-hide gap-5 py-2 px-1">
        {courses.map((course) => {
          return <CourseBox key={course._id} courseDetail={course} />;
        })}
      </div>
    </div>
  );
};

export default ProgramsGrid;
