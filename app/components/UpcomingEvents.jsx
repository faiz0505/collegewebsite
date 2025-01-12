import React from "react";
import SectionHeading from "./SectionHeading";
import { MdOutlineEventAvailable } from "react-icons/md";
import { upcomingEvents } from "../utils";
import EventBox from "./ui/EventBox";
const UpcomingEvents = () => {
  return (
    upcomingEvents.length > 0 && (
      <section className="paddings flex flex-col items-center mb-20">
        <SectionHeading
          title={"Our events"}
          icon={<MdOutlineEventAvailable />}
        />
        <h1 className="text-4xl font-bold">upcoming events</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {upcomingEvents.map((event) => {
            return <EventBox key={event._id} event={event} />;
          })}
        </div>
      </section>
    )
  );
};

export default UpcomingEvents;
