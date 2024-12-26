import Image from "next/image";
import React from "react";
import CourseSearchForm from "./ui/CourseSearchForm";

const SearchForCourse = () => {
  return (
    <section className="w-full relative flex flex-col md:flex-row items-center gap-y-10 paddings justify-between bg-primary-dark">
      <Image
        src={"/assets/searchforcourses-bg.webp"}
        alt="background"
        fill
        sizes="100%"
        priority={false}
        className="object-cover opacity-10"
      />
      <aside className="relative flex flex-col justify-center pt-5 md:pt-0">
        <div className="text-white space-y-2">
          <h2 className="text-3xl font-bold capitalize text-center md:text-start">
            search for courses
          </h2>
          <p className="text-xs text-opacity-65 md:w-[70%] text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            aspernatur id, sed sequi tempore numquam illum modi esse nisi quam.
          </p>
        </div>
        <CourseSearchForm />
      </aside>
      <aside className="relative">
        <Image
          src={"/assets/searchforcourses.png"}
          height={900}
          width={900}
          alt="search for course"
          loading="lazy"
          className="h-auto w-auto"
        />
      </aside>
    </section>
  );
};

export default SearchForCourse;
