import Image from "next/image";
import React from "react";

const PageHeader = ({ title }) => {
  return (
    <header className="w-full h-[250px] md:h-[300px] grid grid-cols-2 relative backdrop-opacity-30">
      <h1 className="text-3xl font-bold text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 capitalize text-nowrap">
        {title}
      </h1>
      <aside className="bg-primary flex items-end paddings">
        <figure>
          <Image
            src={"/assets/college-draw.png"}
            alt="about"
            height={500}
            width={500}
          />
        </figure>
      </aside>
      <aside className=" relative z-10">
        <Image
          src={"/assets/about2.webp"}
          alt="about"
          fill
          sizes="100%"
          priority={false}
          loading="lazy"
          className="object-cover absolute z-0"
        />

        <div className="h-full w-full bg-gradient-to-r from-primary to-transparent absolute"></div>
      </aside>
    </header>
  );
};

export default PageHeader;
