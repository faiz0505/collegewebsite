"use client";
import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";
import Toast from "../ui/Toast";
import { createNewEvent } from "@/app/actions/event.actions";

const EventForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: { from: "", to: "" },
    location: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("time.")) {
      const [key, subKey] = name.split(".");
      setFormData({
        ...formData,
        [key]: { ...formData[key], [subKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Remove error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.name.trim()) newErrors.name = "Event name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.date) newErrors.date = "date is required";
    if (!formData.time.from || !formData.time.to)
      newErrors.time = "Event time is required";
    if (!formData.location.trim())
      newErrors.location = "Event location is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newErrors = validateForm();

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setIsLoading(true);

      const response = await createNewEvent(formData);
      if (!response.success) {
        return alert(response.error || response.message);
      } else {
        setFormData({
          name: "",
          description: "",
          date: "",
          time: { from: "", to: "" },
          location: "",
          image: "",
        });
        setSuccessMessage(response.message);
        window.location.reload();
      }
    } catch (error) {
      alert(error.message || "Something went wrong! please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md space-y-4"
    >
      {successMessage && (
        <p className="text-sm text-green-700 font-semibold">{successMessage}</p>
      )}
      <div>
        <CustomInput
          type="text"
          name="name"
          placeholder="Event Name"
          value={formData.name}
          onChange={handleChange}
          error={errors?.name}
        />
        {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className={`w-full px-3 py-2 rounded-sm bg-gray-50 ${
            errors.description ? "border border-red-600" : ""
          }`}
        />
        {errors.description && (
          <p className="text-xs text-red-600">{errors.description}</p>
        )}
      </div>
      <div>
        <CustomInput
          type={"date"}
          name={"date"}
          value={formData.date}
          onChange={handleChange}
          error={errors?.date}
        />
        {errors.date && <p className="text-xs text-red-600">{errors.date}</p>}
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2">
          <CustomInput
            type="time"
            name="time.from"
            placeholder="Start Time"
            value={formData.time.from}
            onChange={handleChange}
            error={errors?.time}
          />
          <CustomInput
            type="time"
            name="time.to"
            placeholder="End Time"
            value={formData.time.to}
            onChange={handleChange}
            error={errors?.time}
          />
        </div>
        {errors.time && <p className="text-xs text-red-600">{errors.time}</p>}
      </div>
      <div>
        <CustomInput
          type="text"
          name="location"
          placeholder="Event Location"
          value={formData.location}
          onChange={handleChange}
          error={errors?.location}
        />
        {errors.location && (
          <p className="text-xs text-red-600">{errors.location}</p>
        )}
      </div>
      <div>
        <CustomInput
          type="file"
          name="image"
          placeholder="Event Image"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-sm hover:bg-blue-500 transition"
      >
        {isLoading ? "creating..." : "Create Event"}
      </button>
    </form>
  );
};

export default EventForm;
