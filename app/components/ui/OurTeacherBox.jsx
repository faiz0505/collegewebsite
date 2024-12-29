"use client";
import Link from "next/link";
import React from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
const OurTeacherBox = ({ name, profilePic, subject, socialLinks, id }) => {
  const router = useRouter();
  return (
    <div
      className="w-80 py-8 flex flex-col items-center bg-white rounded shadow-sm cursor-pointer"
      onClick={() => router.push(`/our-teachers/${id}`)}
    >
      <figure className="h-20 w-20 bg-secondary rounded-full relative overflow-hidden">
        <Image
          src={"/assets/profile.jpg"}
          alt={name}
          fill
          sizes="100%"
          priority={false}
          className="object-cover"
        />
      </figure>
      <h3 className="text-lg font-bold mt-3 opacity-80">{name}</h3>
      <h6 className="text-xs font-semibold text-secondary">{subject}</h6>
      <div className="flex gap-3 mt-4">
        {socialLinks.map((socialLink) => {
          return (
            <Link
              key={socialLink.name}
              href={socialLink.href}
              className="h-10 w-10 flex justify-center items-center rounded-full border text-gray-700 hover:bg-secondary hover:text-white text-xl"
            >
              {socialLink.name == "facebook" ? (
                <TiSocialFacebook />
              ) : socialLink.name == "instagram" ? (
                <FaInstagram />
              ) : (
                <TiSocialTwitter />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeacherBox;
