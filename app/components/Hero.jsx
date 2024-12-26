import Image from "next/image";
import React from "react";
import { headlineServices } from "../utils/services";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen md:h-[600px] lg:h-screen xl:h-[600px] bg-black relative z-0">
      <Image
        src={"/assets/hero-background.jpg"}
        alt="Hero Image"
        fill
        sizes="100%"
        priority={true}
        className="absolute object-cover opacity-30 z-0"
      />
      <div className="text-white paddings h-full flex flex-col relative">
        <div className="mt-20 flex flex-col items-center md:items-start">
          <h5 className="uppercase font-semibold text-sm flex text-center items-center gap-2">
            Welcome to CollegeName{" "}
            <span className="h-[1px] w-10 bg-secondary inline-block"></span>
          </h5>
          <h1 className="text-4xl md:text-start text-center md:text-5xl font-bold leading-[1.15] my-2">
            Education is the best
            <br /> key success in life
          </h1>
          <p className="text-xs font-[500] text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quam voluptates delectus in quis?
          </p>
          <div className="flex gap-6 mt-8 justify-center md:justify-start">
            <button className="px-5 py-3 outline-none bg-secondary text-white font-semibold rounded uppercase text-xs">
              discover more
            </button>
            <button className="px-6 py-3 outline-none bg-transparent text-white font-semibold rounded uppercase border-[1px] hover:bg-secondary border-white text-xs">
              contact us
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 w-full justify-center gap-4 paddings absolute bottom-0 left-0 ">
          {headlineServices.map((service) => {
            return (
              <div
                key={service._id}
                className="flex gap-3 bg-primary/80 p-4 hover:bg-secondary/80 cursor-pointer"
              >
                <div className="text-4xl md:text-5xl">{service.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-xs">{service.description}</p>
                  <Link
                    href={`/service/${service._id}`}
                    className="text-sm font-semibold inline-block hover:text-blue-900"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
