import { fetchAllEvents } from "@/app/actions/event.actions";
import EditEvents from "@/app/components/admin/EditEvents";
import Notifications from "@/app/components/admin/Notifications";
import React, { Suspense } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";

const page = async () => {
  const res = await fetchAllEvents({ next: { tags: "event" } });

  return (
    <div className="gap-y-10 paddings grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div className="w-full grid grid-cols-2 gap-2">
        <div className="bg-white px-6 py-3 w-full rounded-lg shadow flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
            <PiStudentBold className="text-3xl text-primary" />
          </div>
          <h2 className="text-2xl font-bold mt-1">6873</h2>
          <h6 className="text-sm font-semibold text-neutral-700">
            Total Students
          </h6>
        </div>
        <div className="bg-white px-6 py-3 w-full rounded-lg shadow flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
            <GiTeacher className="text-3xl text-primary" />
          </div>
          <h2 className="text-2xl font-bold mt-1">13</h2>
          <h6 className="text-sm font-semibold text-neutral-700">
            Total Teachers
          </h6>
        </div>
        <div className="bg-white px-6 py-3 w-full rounded-lg shadow flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
            <FaBook className="text-[1.66rem] text-primary" />
          </div>
          <h2 className="text-2xl font-bold mt-1">32</h2>
          <h6 className="text-sm font-semibold text-neutral-700">
            Total Courses
          </h6>
        </div>
        <div className="bg-white p-2 w-full rounded-lg shadow grid">
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
              <FaMale className="text-[1.66rem] text-primary" />
            </div>
            <div>
              {" "}
              <h2 className="text-xl font-bold mt-1">3983</h2>
              <h6 className="text-xs font-semibold text-neutral-700">
                Total Boys
              </h6>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
              <FaFemale className="text-[1.66rem] text-primary" />
            </div>
            <div>
              {" "}
              <h2 className="text-xl font-bold mt-1">2938</h2>
              <h6 className="text-xs font-semibold text-neutral-700">
                Total Girls
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Notifications />
      <Suspense fallback={<div>Loading...</div>}>
        <EditEvents data={res} />
      </Suspense>
    </div>
  );
};

export default page;
