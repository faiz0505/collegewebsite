import React from "react";
import PageHeader from "../components/ui/PageHeader";
import { ourTeachers } from "../utils";
import OurTeacherBox from "../components/ui/OurTeacherBox";

const page = () => {
  return (
    <main>
      <PageHeader title={"our teachers"} />
      <section className="bg-[#f8f9fe] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center paddings py-20 gap-5">
        {ourTeachers.map((teacher) => {
          return (
            <OurTeacherBox
              key={teacher._id}
              id={teacher._id}
              name={teacher.name}
              subject={teacher.subject}
              socialLinks={teacher.socialLinks}
              profilePic={teacher.profilePic}
            />
          );
        })}
      </section>
    </main>
  );
};

export default page;
