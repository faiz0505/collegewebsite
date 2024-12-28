import PageHeader from "@/app/components/ui/PageHeader";
import { ourTeachers } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaInstagram, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const page = async ({ params }) => {
  const id = (await params).id;
  const teacher = ourTeachers.find((teacher) => teacher._id === id);
  return (
    <main>
      <PageHeader title={"Teacher Details"} />
      <section className="paddings my-20 grid grid-cols-10">
        <aside className="col-span-3 relative">
          <Image
            src={"/assets/profile.jpg"}
            alt={teacher.name}
            fill
            sizes="100%"
            priority={false}
            className="object-cover"
          />
        </aside>
        <aside className="col-span-7 px-2 md:px-6 lg:px-8 2xl:px-12">
          <h2 className="text-3xl font-bold opacity-80 ">{teacher.name}</h2>
          <p className="text-xs text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="bg-[#f5f5f5] px-2 md:px-4 py-4 flex justify-between rounded-lg my-6">
            <div className="flex flex-col items-center">
              <h6 className="text-xl font-bold">{teacher.courses}</h6>
              <p className="text-sm text-gray-700">Course</p>
            </div>
            <div className="flex flex-col items-center">
              <h6 className="text-xl font-bold">{teacher.experience} years</h6>
              <p className="text-sm text-gray-700">Experience</p>
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex gap-3 items-center flex-col md:flex-row">
                <div className=" text-secondary  text-lg flex-none">
                  <FaPhone />
                </div>

                <p className="text-sm opacity-75 cursor-pointer font-semibold">
                  {teacher.mobileNumber}
                </p>
              </div>
              <div className="flex gap-3 items-center flex-col md:flex-row">
                <div className=" text-secondary  text-lg flex-none">
                  <IoMdMail />
                </div>

                <p className="text-sm opacity-75 cursor-pointer font-semibold">
                  {teacher.email}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">About</h3>
            <p className="text-sm text-gray-700">{teacher.about}</p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-3">
                {teacher.socialLinks.map((socialLink) => {
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
              <Link
                href={`mailto:${teacher.email}`}
                target="_blank"
                className="px-5 py-3 outline-none bg-secondary text-white font-semibold rounded capitalize text-sm flex gap-2 items-center self-center md:self-start"
              >
                Appoinment
                <span>
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default page;
