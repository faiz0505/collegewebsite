import React from "react";
import PageHeader from "../components/ui/PageHeader";
import About from "../components/About";
import ScholarshipProgram from "../components/ScholarshipProgram";
import Contact from "../components/Contact";
import Feedbacks from "../components/Feedbacks";
import Image from "next/image";
import { GrMap } from "react-icons/gr";
import { DiAtom } from "react-icons/di";

const page = () => {
  return (
    <main>
      <PageHeader title={"About Us"} />
      <About />
      <ScholarshipProgram />
      <section className="w-full h-[700px] grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="flex bg-primary">
          <div className="text-8xl text-white self-end opacity-10">
            <GrMap />
          </div>
          <div className="space-y-3 self-center paddings">
            <div className="h-12 w-12 rounded-full bg-secondary flex justify-center items-center text-white text-xl">
              {" "}
              <GrMap />
            </div>
            <h2 className="text-3xl font-bold text-white">Campus Tour</h2>
            <p className="text-xs text-white opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              aliquam molestiae, cumque pariatur eligendi nostrum architecto,
              quos aperiam necessitatibus repudiandae consectetur omnis eveniet
              ab, rerum doloremque! Quisquam minus dolorem deleniti id impedit
              in, reprehenderit, deserunt illum voluptatum similique, maiores
              asperiores.
            </p>
          </div>
        </div>
        <figure className="relative">
          <Image
            src={"/assets/scholarship.webp"}
            alt="scholarship program"
            fill
            sizes="100%"
            priority={false}
            loading="lazy"
            className="object-cover object-center absolute"
          />
        </figure>{" "}
        <figure className="relative">
          <Image
            src={"/assets/hero-background.jpg"}
            alt="scholarship program"
            fill
            sizes="100%"
            priority={false}
            loading="lazy"
            className="object-cover object-center absolute"
          />
        </figure>
        <div className="flex flex-row-reverse bg-primary-dark">
          <div className="text-8xl text-white self-end opacity-10">
            <DiAtom />
          </div>
          <div className="space-y-3 self-center paddings">
            <div className="h-12 w-12 rounded-full bg-secondary flex justify-center items-center text-white text-2xl">
              {" "}
              <DiAtom />
            </div>
            <h2 className="text-3xl font-bold text-white">Powerful Alumni</h2>
            <p className="text-xs text-white opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              aliquam molestiae, cumque pariatur eligendi nostrum architecto,
              quos aperiam necessitatibus repudiandae consectetur omnis eveniet
              ab, rerum doloremque! Quisquam minus dolorem deleniti id impedit
              in, reprehenderit, deserunt illum voluptatum similique, maiores
              asperiores.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Feedbacks />
    </main>
  );
};

export default page;
