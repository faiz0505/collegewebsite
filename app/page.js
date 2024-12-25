import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import OurCourses from "./components/OurCourses";
import Features from "./components/Features";
import UpcomingEvents from "./components/UpcomingEvents";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <OurCourses />
      <Features />
      <UpcomingEvents />
    </main>
  );
};

export default page;
