import AddNewButton from "@/app/components/admin/AddNewButton";
import Blogs from "@/app/components/Blogs";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-end mb-4 paddings">
        <AddNewButton text={"Post Blog"} />
      </div>
      <Blogs editable={true} />
    </div>
  );
};

export default page;
