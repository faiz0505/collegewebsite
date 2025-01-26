import React, { Suspense } from "react";
import SectionHeading from "./SectionHeading";
import { MdOutlineEventAvailable } from "react-icons/md";
import { upcomingEvents } from "../utils";
import EventBox from "./ui/EventBox";
import { fetchUpcomingEvents } from "../actions/event.actions";
const UpcomingEvents = async () => {
  const res = await fetchUpcomingEvents({ next: { tags: "event" } });
  if (res.upcomingEvents.length < 1) {
    return;
  }
  if (res.error) {
    return <div>{`Something went wrong! ${res.error}`}</div>;
  }
  return (
    <section className="paddings flex flex-col items-center mb-20">
      <SectionHeading title={"Our events"} icon={<MdOutlineEventAvailable />} />
      <h1 className="text-4xl font-bold">upcoming events</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {res.upcomingEvents.map((event) => {
            return <EventBox key={event._id} event={event} />;
          })}
        </div>
      </Suspense>
    </section>
  );
};

export default UpcomingEvents;
