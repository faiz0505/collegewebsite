import React from "react";
import SectionHeading from "./SectionHeading";
import { GiGraduateCap } from "react-icons/gi";
import ProgramsGrid from "./ProgramsGrid";
import { programs } from "../utils";

const OurCourses = () => {
  return (
    <section className="bg-white py-20 paddings">
      <SectionHeading icon={<GiGraduateCap />} title={"our courses"} />
      <div className="space-y-10">
        {programs.map((program) => {
          return (
            <ProgramsGrid
              key={program.title}
              title={program.title}
              courses={program.courses}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurCourses;
