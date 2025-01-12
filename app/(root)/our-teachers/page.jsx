import React from "react";
import PageHeader from "../../components/ui/PageHeader";
import { ourTeachers } from "../../utils";
import OurTeacherBox from "../../components/ui/OurTeacherBox";

const page = () => {
  return (
    <main>
      <PageHeader title={"our teachers"} />
      <section className="bg-[#f8f9fe] flex flex-wrap justify-center items-center paddings py-20 gap-5">
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
