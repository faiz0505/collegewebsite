import React from "react";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import CustomInput from "../components/ui/CustomInput";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  const contactDetails = [
    {
      icon: <FiPhoneCall />,
      headline: "+91 8421932820",
      caption: "Phone suppport",
    },
    {
      icon: <HiOutlineMailOpen />,
      headline: "faizali786313@gmail.com",
      caption: "Email suppport",
    },
    {
      icon: <FiMapPin />,
      headline: "Kamargaon, Maharashtra 444110",
      caption: "College Location",
    },
  ];
  const CustomBox = ({ icon, headline, caption }) => {
    return (
      <div className="w-56 h-56 py-8 px-3 flex flex-col justify-center items-center bg-[#eff8ff] hover:bg-[#fff7f0] rounded cursor-pointer shadow">
        <div className="h-16 w-16 rounded-full flex justify-center items-center bg-white text-gray-800 text-2xl shadow-xl">
          {icon}
        </div>
        <h3 className="font-bold mt-3 opacity-80 text-center">{headline}</h3>
        <h6 className="text-xs font-semibold text-secondary">{caption}</h6>
      </div>
    );
  };
  return (
    <main>
      <PageHeader title={"contact us"} />
      <section className="paddings w-full flex flex-col items-center my-20">
        <SectionHeading title={"Contact info"} />
        <h2 className="text-center text-2xl text-black font-bold mb-6 mt-2">
          Get In Touch
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 ">
          {contactDetails.map((contactDetail) => {
            return (
              <CustomBox
                key={contactDetail.headline}
                icon={contactDetail.icon}
                headline={contactDetail.headline}
                caption={contactDetail.caption}
              />
            );
          })}
        </div>
      </section>
      <section className="bg-[#eff8ff] py-20">
        <h2 className="text-center text-3xl text-gray-800 font-bold mb-6 mt-2">
          Custom Inqure Form
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 paddings">
          <CustomInput type={"text"} name={"name"} placeholder={"Full Name"} />
          <CustomInput
            type={"email"}
            name={"email"}
            placeholder={"Email address"}
          />
          <CustomInput type={"text"} name={"subject"} placeholder={"subject"} />
          <textarea
            name="message"
            id=""
            placeholder="Message Here"
            rows={6}
            className="w-full col-span-full bg-white border-none outline-none px-3 py-2 rounded-sm placeholder:capitalize placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold"
          ></textarea>
          <div className="place-self-center col-start-2">
            <button className="px-5 py-3 outline-none bg-secondary text-white font-semibold rounded-sm capitalize text-sm flex gap-2 items-center mx-auto md:mx-0" type="submit">
             Make An request
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
