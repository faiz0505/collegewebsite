import Image from "next/image";
import React from "react";
import { ourbestfeattures } from "../utils/features";
const Features = () => {
  return (
    <section className="h-screen md:h-[600px] lg:h-screen xl:h-[600px] w-full bg-white relative overflow-hidden flex justify-between flex-col md:flex-row md:pt-10 pb-20">
      <aside className="h-fit md:h-full bg-primary-dark md:mt-5 flex py-10 relative gap-5 shadow w-full">
        <Image
          src={"/assets/atom-icon.jpg"}
          alt="atom-icon"
          height={120}
          width={120}
          className="opacity-20 h-auto w-auto mix-blend-multiply self-end -mt-5 absolute md:relative z-0"
        />
        <div className="text-white px-3 self-center space-y-3 z-10">
          <h2 className="text-[2rem] font-bold capitalize text-center md:text-left">
            Our best features
          </h2>
          <p className="text-sm opacity-75 font-light text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            ipsa nesciunt quae doloribus dignissimos, sit rem perspiciatis
            voluptate.
          </p>
          <div className="grid gap-5 pt-4">
            {ourbestfeattures.map((feature) => {
              return (
                <div key={feature.title} className="flex gap-3">
                  <div className="h-12 w-12 bg-secondary rounded-full flex justify-center items-center text-white text-2xl flex-none">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="text-xs font-light opacity-75">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
      <aside className="bg-secondary h-full md:-mt-5 shadow relative w-full">
        <Image
          src={"/assets/hero-background.jpg"}
          alt="feature image"
          fill
          sizes="100%"
          priority={false}
          className="object-cover"
        />
      </aside>
    </section>
  );
};

export default Features;
