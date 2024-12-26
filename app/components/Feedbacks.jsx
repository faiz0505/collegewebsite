import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Feedbacks = () => {
  const feedbacksData = [
    {
      _id: "dhf373",
      userProfile: "",
      userName: "Faiz Ali",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor",
      userOccupation: "CEO & Founder",
    },
    {
      _id: "dhsdf73",
      userProfile: "",
      userName: "Aamir Sheikh",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor",
      userOccupation: "CEO & Co-Founder",
    },
    {
      _id: "shgdhs",
      userProfile: "",
      userName: "Sufiyan Ali",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userOccupation: "HR",
    },
    {
      _id: "dh837hf373",
      userProfile: "",
      userName: "Avinash Kale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userOccupation: "HOD",
    },
    {
      _id: "dhfsdf373",
      userProfile: "",
      userName: "Devanand kale",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userOccupation: "Assitant HR",
    },
    {
      _id: "dhf37sud3",
      userProfile: "",
      userName: "Awez khan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      userOccupation: "teacher",
    },
  ];
  return (
    <section className="paddings flex flex-col items-center mb-20 h-fit">
      <SectionHeading title={"our team members"} icon={<FaPeopleGroup />} />
      <h1 className="text-4xl font-bold mt-1">Feedbacks</h1>
      <div className="w-full gap-5 overflow-x-scroll flex scrollbar-hide snap-x">
        {feedbacksData.map((feedback) => {
          return (
            <div
              key={feedback._id}
              className="h-fit shadow bg-[#eff8ff] hover:bg-white w-[32%] flex-none p-3 md:p-5 flex flex-col items-center snap-start mt-8 cursor-pointer"
            >
              <div className="text-secondary text-6xl">
                <BiSolidQuoteAltRight />
              </div>
              <p className="text-center text-xs opacity-50 font-semibold max-w-[90%] mt-1">
                {feedback.description}
              </p>
              <figure className="bg-primary rounded-full h-14 w-14 relative mt-4"></figure>
              <h3 className="font-bold mt-2">{feedback.userName}</h3>
              <p className="text-[10px] opacity-50 ">
                {feedback.userOccupation}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feedbacks;
