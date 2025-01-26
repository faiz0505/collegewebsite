import React, { Suspense } from "react";
import PageHeader from "../../components/ui/PageHeader";
import { upcomingEvents } from "../../utils";
import EventBox from "../../components/ui/EventBox";
import Pagination from "../../components/ui/Pagination";
import { fetchAllEvents } from "@/app/actions/event.actions";

const page = async () => {
  const res = await fetchAllEvents({ next: { tags: "event" } });
  if (res.error || !res.success) {
    return;
  }
  return (
    <main>
      <PageHeader title={"our events"} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 paddings">
          {res.events.map((event) => {
            return <EventBox key={event._id} event={event} />;
          })}
        </div>
        <div className="mb-20 mt-8">
          <Pagination totalPages={1} />
        </div>
      </Suspense>
    </main>
  );
};

export default page;
