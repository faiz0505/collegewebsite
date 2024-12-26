import React from "react";
import ContactForm from "./ui/ContactForm";
import CustomAccordion from "./ui/CustomAccordion";
import { faqs } from "../utils/faq";

const Contact = () => {
  return (
    <section className="w-full h-auto md:pb-14 lg:pb-20 md:h-[640px] lg:h-screen xl:h-[600px] paddings flex flex-col md:flex-row gap-14">
      <aside className="h-full w-full md:w-[60%] space-y-5 overflow-scroll scrollbar-hide">
        <h2 className="text-4xl font-semibold capitalize">
          Get Every single answer here.
        </h2>
        <p className="text-sm opacity-50 max-w-[75%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt atque
          quae odio cum, pariatur inventore saepe.
        </p>
        <div className="space-y-5">
          {faqs.map((faq) => {
            return (
              <CustomAccordion
                key={faq.id}
                number={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            );
          })}
        </div>
      </aside>
      <aside className="h-full w-full md:w-[40%]">
        <ContactForm />
      </aside>
    </section>
  );
};

export default Contact;
