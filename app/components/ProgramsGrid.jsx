import React from "react";
import CourseBox from "./ui/CourseBox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DeleteButton from "./admin/DeleteButton";
import EditButton from "./admin/EditButton";
const ProgramsGrid = ({ title, courses, editable }) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-3 mb-5">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {editable ? (
          <div className="flex gap-3 items-center">
            <DeleteButton text={"Delete Program"} />
            <EditButton text={"Edit Program"} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-full grid grid-flow-col overflow-x-scroll scrollbar-hide gap-5 py-2 px-1">
        {courses.map((course) => {
          return (
            <CourseBox
              key={course._id}
              courseDetail={course}
              editable={editable}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgramsGrid;
