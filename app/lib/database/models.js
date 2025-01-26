import mongoose from "mongoose";

export const eventSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  date: {
    type: String,
    require: true,
  },
  time: {
    from: { type: String, require: true },
    to: { type: String, require: true },
  },
  location: { type: String, require: true },
  image: { type: String, require: false, default: "/assets/about1.webp" },
});

export const Event =
  mongoose.models.events || mongoose.model("events", eventSchema);
