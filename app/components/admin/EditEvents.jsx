"use client";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import { upcomingEvents } from "@/app/utils";
import AddNewButton from "./AddNewButton";
import { truncateString } from "@/app/utils/truncateString";
import EditButton from "./EditButton";

const EditEvents = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const toggleEdit = () => setIsEditable((pre) => !pre);
  const handleSelect = (event) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents((pre) => pre.filter((e) => e !== event));
    } else {
      setSelectedEvents((pre) => [...pre, event]);
    }
  };

  return (
    <div className="p-3 bg-white rounded-lg shadow h-80 overflow-y-auto scrollbar-hide">
      <div className="flex justify-between items-center sticky top-0 backdrop-blur-lg">
        <h2 className="text-xl font-bold ">Edit Events</h2>
        <div className="flex items-center gap-2">
          <AddNewButton text={"Add"} />
          <EditButton toggler={true} toggleEdit={toggleEdit} />
          {selectedEvents.length > 0 && <DeleteButton />}
        </div>
      </div>
      <div
        className={`${
          !isEditable ? "-translate-x-8" : "-translate-x-0"
        } space-y-3 mt-5 transition-all duration-100 ease-linear`}
      >
        {upcomingEvents.map((event, i) => {
          return (
            <div className="space-y-2" key={event._id}>
              <div className="flex gap-2 items-center">
                <div className="mr-2">
                  <input
                    type="checkbox"
                    checked={selectedEvents.includes(event._id) || false}
                    onChange={() => handleSelect(event._id)}
                  />
                </div>
                <figure className="h-12 w-12 bg-black/30 flex-none"></figure>
                <div className="w-full">
                  <h3 className="text-md font-bold">
                    {truncateString(event.name, 30)}
                  </h3>
                  <p className="text-[10px]">
                    {truncateString(event.description, 30)}
                  </p>
                  <p className="text-[10px] font-semibold">
                    {truncateString(event.location, 25)}
                  </p>
                  <div className="flex justify-between font-semibold">
                    <p className="text-[10px]">
                      {event.date.day +
                        " " +
                        event.date.month +
                        " " +
                        event.date.year}
                    </p>
                    <p className="text-[10px]">{event.time}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditEvents;
