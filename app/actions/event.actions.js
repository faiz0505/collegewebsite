"use server";

import { revalidateTag } from "next/cache";
import { connectToDb } from "../lib/database/connection";
import { Event } from "../lib/database/models";

export const createNewEvent = async (event) => {
  const { name, description, date, time, location, image } = event;
  try {
    await connectToDb();
    let res = await Event.create({
      name,
      description,
      date,
      time: {
        from: time.from,
        to: time.to,
      },
      location,
      image,
    });
    revalidateTag("event");
    return {
      success: true,
      message: `Successfully created a new event`,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: `An error occured while creating new event`,
      error: error.message || "An error occured while creating new event",
    };
  }
};

export const deleteEvents = async (ids) => {
  try {
    await connectToDb();
    let res = await Event.deleteMany({ _id: { $in: ids } });
    revalidateTag("event");
    return {
      success: true,
      message: `${res.deletedCount} event(s) deleted successfully`,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: `An error occured while deleting events`,
      error: error.message || "An error occured while deleting events event",
    };
  }
};

export const editEvent = async (id, updatedData) => {
  try {
    await connectToDb();
    const res = await Event.findByIdAndUpdate(
      id,
      {
        $set: updatedData,
      },
      { new: true, runValidators: true }
    );
    if (!res) {
      return {
        success: false,
        message: `No event found with the provided ID`,
      };
    }
    revalidateTag("event");
    return {
      success: true,
      message: `Event updated successfully`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error occured while editing event",
      error: `error : ${error.message || "Error occured while editing event"}`,
    };
  }
};

export const fetchAllEvents = async () => {
  try {
    await connectToDb();
    const events = await Event.find().sort({ createdAt: -1 });
    return {
      success: true,
      message: "Events successfully fetched",
      events: JSON.parse(JSON.stringify(events)),
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occured while fetching events`,
      error: error.message || "An error occured while fetching events",
    };
  }
};

export const fetchEventById = async (id) => {
  try {
    await connectToDb();
    const event = await Event.findById(id);
    return {
      success: true,
      message: "Event successfully fetched",
      event: JSON.parse(JSON.stringify(event)),
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occured while fetching event`,
      error: error.message || "An error occured while fetcching event",
    };
  }
};

export const fetchUpcomingEvents = async () => {
  try {
    await connectToDb();
    const today = new Date().toISOString().split("T")[0];
    const events = await Event.find({ date: { $gt: today } }).sort({
      createdAt: -1,
    });

    return {
      success: true,
      message: "Events successfully fetched",
      upcomingEvents: JSON.parse(JSON.stringify(events)),
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while fetching events",
      error: error.message || "An error occurred while fetching events",
    };
  }
};
