import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { experience } from "../utils";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
const About = () => {
  return (
    <section className="paddings py-20 gap-y-8 grid-cols-1 grid md:grid-cols-2 gap-4 bg-[#eff8ff]">
      <SectionHeading
        icon={<GiGraduateCap />}
        title={"about our college"}
        customClass={"md:hidden place-self-center"}
      />

      <aside className="flex gap-3 h-80 md:h-full">
        <figure className="h-full w-full bg-primary border-2 border-secondary rounded-3xl overflow-hidden relative">
          <Image
            src={"/assets/about1.webp"}
            alt="About College"
            fill
            sizes="100%"
            loading="lazy"
            priority={false}
          />
        </figure>
        <div className="flex flex-col gap-3 w-full h-full">
          <div className="bg-secondary h-[30%] border-b-2 border-primary rounded-[0.7rem] text-white flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold">{`${experience}+`}</h3>
            <p className="text-sm font-semibold">Years of experience</p>
          </div>
          <figure className="bg-secondary h-[70%] border-2 border-primary rounded-[1.3rem] overflow-hidden relative">
            <Image
              src={"/assets/about2.webp"}
              alt="About College"
              fill
              sizes="100%"
              loading="lazy"
              priority={false}
              className="object-cover"
            />
          </figure>
        </div>
      </aside>
      <aside className="space-y-3">
        <SectionHeading
          icon={<GiGraduateCap />}
          title={"about our college"}
          customClass={"hidden md:flex"}
        />
        <h1 className="text-4xl capitalize font-bold text-gray-950 text-center md:text-left">
          a few words about the <br className="hidden md:block" /> college
        </h1>
        <p className="text-sm text-gray-600 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quis in voluptas beatae obcaecati fuga porro voluptatem explicabo,
          nisi consequatur impedit quaerat corrupti placeat?
          <br className="hidden md:block" /> At quisquam commodi asperiores
          facere nostrum earum quo, inventore cum tempore, perferendis dolores
          repellat dolorem sit?
        </p>
        <div className="flex flex-col md:flex-row gap-y-6 items-center py-3">
          <div className="flex gap-3">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-secondary text-white text-lg font-bold flex-none">
              01
            </div>
            <div>
              <h4 className="text-xl text-black font-bold">Lorem, ipsum.</h4>
              <p className="text-[10px] font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-row-reverse md:flex-row">
            <div className="h-12 w-12 flex justify-center items-center rounded-full bg-secondary text-white text-lg font-bold flex-none">
              02
            </div>
            <div>
              <h4 className="text-xl text-black font-bold">Lorem, ipsum.</h4>
              <p className="text-[10px] font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque.
              </p>
            </div>
          </div>
        </div>
        <button className="border-none outline-none bg-primary rounded px-4 py-3 text-white font-[500] text-xs flex items-center gap-3 justify-self-center md:justify-self-start">
          Read More{" "}
          <span className="mt-[1px]">
            <FaArrowRightLong />
          </span>
        </button>
      </aside>
    </section>
  );
};

export default About;
