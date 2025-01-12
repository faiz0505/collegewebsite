import React from "react";
import PageHeader from "../../components/ui/PageHeader";
import CustomSearch from "../../components/ui/CustomSearch";
import Blogs from "../../components/Blogs";
import OurCourses from "../../components/OurCourses";
import Courses from "../../components/Courses";

const page = () => {
  return (
    <main>
      <PageHeader title={"Courses"} />
      <div className="paddings mt-20">
        <CustomSearch
          name={"searchforcourse"}
          placeholder={"type keyowords, course name or department..."}
        />
      </div>
      <Courses />
    </main>
  );
};

export default page;
