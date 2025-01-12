import AddNewButton from "@/app/components/admin/AddNewButton";
import OurCourses from "@/app/components/OurCourses";
import { programs } from "@/app/utils";
import React from "react";

const page = () => {
  return (
    <div className="paddings">
      <div className="flex justify-end mb-4">
        <AddNewButton text={"Add New Course"} />
      </div>
      <OurCourses editable={true} />
    </div>
  );
};

export default page;
