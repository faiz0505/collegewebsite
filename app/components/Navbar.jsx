"use client";
import React, { useState } from "react";
import { socialLinks } from "../utils/socialLinks";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import Image from "next/image";
import { navLinks } from "../utils/navLinks";
import { HoverLinksBox } from "./ui/HoverLinksBox";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((pre) => !pre);
  return (
    <nav className="relative w-full z-50">
      <div className="flex flex-col md:flex-row justify-between items-center relative md:h-14 w-full text-white">
        <Image
          src={"/assets/upper-navbar-background.png"}
          fill
          alt="upper navbar background"
          className="h-full w-full hidden md:block"
        />
        <div className=" relative flex items-center gap-2 bg-secondary md:w-auto w-full md:bg-transparent paddings py-2 justify-center">
          <h6 className="font-[500] text-sm">Follow us :-</h6>
          <ul className="flex items-center gap-2">
            {socialLinks.map((socialLink) => {
              return (
                <li key={socialLink.name} className="hover-animation">
                  <Link
                    target="_blank"
                    href={socialLink.href}
                    className="hover:text-primary"
                  >
                    {socialLink.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" relative bg-primary md:bg-transparent paddings py-2 md:w-auto w-full">
          <div className="flex items-center h-full gap-3">
            <div className="flex items-center gap-3">
              <div className="border border-secondary rounded-full p-2">
                <FiPhoneCall className="text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Call Now</span>
                <span className="font-[700] text-sm">+91 8421932820</span>
              </div>
            </div>
            <div className="w-[1px] h-full bg-slate-100"></div>
            <div className="flex items-center gap-3">
              <div className="border border-secondary rounded-full p-2">
                <HiOutlineMailOpen className="text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Email Now</span>
                <span className="font-[700] text-sm">youremail123@gmail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white paddings h-14  flex items-center justify-between relative backdrop-blur-3xl">
        <div className="text-3xl font-extrabold text-primary">
          College <span className="text-secondary">Logo</span>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-5  md:h-full absolute top-14  md:top-0  md:py-0 right-0 md:relative w-full md:w-auto bg-secondary  md:bg-transparent backdrop-blur-3xl transition-all duration-300 ease-in-out md:translate-x-0 z-50 ${
            isMenuOpen ? "h-fit py-5" : "h-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row justify-center gap-6 items-center font-semibold text-primary">
            {navLinks.map((link) => {
              return link.type === "single" ? (
                <li key={link.title}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ) : (
                <HoverLinksBox key={link.title} parentLink={link} />
              );
            })}
          </ul>
          <button className="uppercase outline-none border-none md:h-full py-5 md:py-0 px-5 md:bg-secondary bg-primary text-white font-[600] text-sm">
            addmission open
          </button>
        </div>
        <button
          onClick={() => toggleMenu()}
          className="p-2 rounded-full bg-secondary md:hidden outline-none border-none"
        >
          {isMenuOpen ? (
            <RxCross2 className="text-2xl text-primary" />
          ) : (
            <SlMenu className="text-2xl text-primary" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
