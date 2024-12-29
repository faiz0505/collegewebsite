import React from "react";
import PageHeader from "../components/ui/PageHeader";
import { upcomingEvents } from "../utils";
import EventBox from "../components/ui/EventBox";
import Pagination from "../components/ui/Pagination";

const page = () => {
  return (
    <main>
      <PageHeader title={"our events"} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 paddings">
        {upcomingEvents.map((event) => {
          return <EventBox key={event._id} event={event} />;
        })}
      </div>
      <div className="mb-20 mt-8">
        <Pagination totalPages={1} />
      </div>
    </main>
  );
};

export default page;
