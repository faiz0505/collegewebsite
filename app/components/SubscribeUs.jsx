import React from "react";
import CustomInput from "./ui/CustomInput";

const SubscribeUs = () => {
  return (
    <section className="paddings py-10 bg-primary grid md:grid-cols-2 text-white">
      <aside>
        <div></div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold capitalize">
            subscribe for newsletter
          </h2>
          <p className="text-sm text-opacity-65 w-[70%]">
            Get the latest news, events and updates about our college directly
            in your inbox
          </p>
        </div>
      </aside>
      <aside>
        <div className="flex items-center bg-white py-2 px-2 rounded w-[75%] place-self-end">
          <CustomInput
            name={"email"}
            type={"email"}
            placeholder={"email address"}
          />
          <button className="px-5 py-3 outline-none bg-primary text-white font-semibold rounded uppercase text-sm flex gap-2 items-center text-nowrap">
            subscribe now
          </button>
        </div>
      </aside>
    </section>
  );
};

export default SubscribeUs;
