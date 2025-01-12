"use client";
import React from "react";
import CustomInput from "./CustomInput";

const CommentForm = () => {
  return (
    <form
      action=""
      className="grid gap-4 bg-[#f7f7f7] p-3 md:p-5 xl:p-10 2xl:p-16 w-full max-w-[800px] relative z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <textarea
        name="message"
        id=""
        placeholder="type your comment..."
        rows={4}
        className="w-full bg-white border-none outline-none px-3 py-2 rounded-sm placeholder:capitalize placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold"
      ></textarea>
      <CustomInput name={"name"} type={"text"} placeholder={"your name"} />
      <CustomInput name={"email"} type={"email"} placeholder={"your email"} />
      <button className="px-8 py-3 bg-primary text-white outline-none border-none text-lg font-semibold justify-self-start">
        post comment
      </button>
    </form>
  );
};

export default CommentForm;
