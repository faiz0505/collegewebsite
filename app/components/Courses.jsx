import React from "react";
import { blogs, programs } from "../utils";
import Blog from "./ui/Blog";
import { FaPeopleGroup } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import CourseBox from "./ui/CourseBox";
import Pagination from "./ui/Pagination";

const Courses = () => {
  return (
    <section className="paddings w-full flex flex-col items-center mb-20 mt-10 h-fit">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-8 mt-5">
        {programs.map((program) => {
          return program.courses.map((course) => {
            return <CourseBox key={course._id} courseDetail={course} />;
          });
        })}
      </div>
      <Pagination totalPages={10} />
    </section>
  );
};

export default Courses;
