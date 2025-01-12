import React from "react";
import { blogs } from "../utils";
import Blog from "./ui/Blog";
import { FaPeopleGroup } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

const Blogs = ({ editable }) => {
  return (
    <section className="paddings w-full flex flex-col items-center my-20 h-fit">
      <SectionHeading title={"news"} icon={<FaPeopleGroup />} />
      <h1 className="text-4xl font-bold mt-1 capitalize">read our blogs</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-8 mt-5">
        {blogs.map((blog) => (
          <Blog
            key={blog._id}
            blogDetail={blog}
            admin={true}
            editable={editable}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
