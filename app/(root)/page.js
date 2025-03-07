import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import OurCourses from "../components/OurCourses";
import Features from "../components/Features";
import UpcomingEvents from "../components/UpcomingEvents";
import ScholarshipProgram from "../components/ScholarshipProgram";
import Contact from "../components/Contact";
import SearchForCourse from "../components/SearchForCourse";
import Feedbacks from "../components/Feedbacks";
import SubscribeUs from "../components/SubscribeUs";
import Blogs from "../components/Blogs";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <OurCourses editable={false}/>
      <Features />
      <UpcomingEvents />
      <ScholarshipProgram />
      <Contact />
      <Feedbacks />
      {/* <SearchForCourse /> */}
      <Blogs />
      <SubscribeUs />
    </main>
  );
};

export default page;
