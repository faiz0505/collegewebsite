import React from "react";
import CustomInput from "./CustomInput";
import { FaArrowRightLong, FaLandmarkFlag } from "react-icons/fa6";

const ContactForm = () => {
  const formFields = [
    { name: "name", type: "text", placeholder: "full name" },
    { name: "email", type: "email", placeholder: "email address" },
    { name: "phone", type: "number", placeholder: "phone no." },
  ];
  return (
    <form
      action=""
      className="h-full w-full bg-primary-dark rounded py-8 md:py-10 md:px-6 px-3 relative"
    >
      <h2 className="text-2xl font-bold capitalize text-white text-center md:text-start">
        make an contact
      </h2>
      <div className="mt-6 space-y-4">
        {formFields.map((feild) => (
          <CustomInput
            key={feild.name}
            type={feild.type}
            name={feild.name}
            placeholder={feild.placeholder}
          />
        ))}
        <textarea
          name="message"
          id=""
          placeholder="Message..."
          rows={4}
          className="w-full bg-white border-none outline-none px-3 py-2 rounded-sm placeholder:capitalize placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold"
        ></textarea>
        <button className="px-5 py-3 outline-none bg-secondary text-white font-semibold rounded-sm capitalize text-sm flex gap-2 items-center mx-auto md:mx-0">
          Submit here
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="absolute text-white text-8xl bottom-3 right-3 opacity-25">
        <FaLandmarkFlag />
      </div>
    </form>
  );
};

export default ContactForm;
