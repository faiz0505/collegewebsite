import React from "react";
import { navLinks } from "../utils/navLinks";
import Link from "next/link";
import { HoverLinksBox } from "./ui/HoverLinksBox";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-primary-dark w-full py-20 text-white paddings gap-10">
        <aside>
          <h4 className="text-xl font-bold relative before:absolute before:w-14 before:h-[1px] before:bg-secondary before:-bottom-1 text-[#f3f4f5] mb-6 text-center md:text-left">
            About Us
          </h4>
          <p className="text-sm opacity-60 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            repellendus recusandae consequuntur sunt aliquam magni optio
            veritatis atque delectus quasi. Atque magnam labore nulla sapiente
            nemo non dolorum recusandae sunt.
          </p>
        </aside>
        <aside className="place-self-center">
          <h4 className="text-xl font-bold relative before:absolute before:w-14 before:h-[1px] before:bg-secondary before:-bottom-1 text-[#f3f4f5] mb-6">
            Our Links{" "}
          </h4>
          <ul className="flex text-sm flex-col gap-3 opacity-80 text-center md:text-left">
            {navLinks.map((link) => {
              return link.type === "single" || link.type === "footer" ? (
                <li key={link.title}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ) : (
                ""
              );
            })}
          </ul>
        </aside>
        <aside>
          <h4 className="text-xl font-bold relative before:absolute before:w-14 before:h-[1px] before:bg-secondary before:-bottom-1 text-[#f3f4f5] mb-6 text-center md:text-left">
            Contact Us
          </h4>
          <div className="space-y-4 flex flex-col items-center md:items-start gap-y-3">
            <div className="flex gap-3 items-center flex-col md:flex-row">
              <div className="h-10 w-10 bg-secondary rounded-full flex justify-center items-center text-white text-lg flex-none">
                <FaLocationDot />
              </div>
              <div>
                <p className="text-xs opacity-75 cursor-pointer text-center md:text-left">
                  your college location, city,
                  <br /> state name,{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center flex-col md:flex-row">
              <div className="h-10 w-10 bg-secondary rounded-full flex justify-center items-center text-white text-lg flex-none">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs opacity-75 cursor-pointer text-center md:text-left">
                  1800-123-9876
                  <br />
                  +91 8421932820
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center flex-col md:flex-row">
              <div className="h-10 w-10 bg-secondary rounded-full flex justify-center items-center text-white text-lg flex-none">
                <IoMdMail />
              </div>
              <div>
                <p className="text-xs opacity-75 cursor-pointer text-center md:text-left">
                  faizali786313@gmail.com
                  <br />
                  yourcollegeemail123@gmail.com
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section className="w-full bg-secondary flex flex-col md:flex-row gap-y-5 justify-between items-center py-3 paddings">
        <div className="text-3xl font-extrabold text-white">
          College <span className="">Logo</span>
        </div>
        <p className="text-[10px] text-white font-semibold">
          Copyright © 2024 CollegeName. All right reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
