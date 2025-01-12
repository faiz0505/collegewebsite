import React from "react";
import SectionHeading from "../../components/SectionHeading";
import PageHeader from "../../components/ui/PageHeader";
import { blogs } from "../../utils";
import Blog from "../../components/ui/Blog";

const page = () => {
  return (
    <div className="grid gap-8">
      {blogs.map((blog) => (
        <Blog key={blog._id} blogDetail={blog} />
      ))}
    </div>
  );
};

export default page;
