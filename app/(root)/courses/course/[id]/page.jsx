import PageHeader from "@/app/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaL } from "react-icons/fa6";

export const NewCourseComponent = () => {
  return (
    <div className="flex gap-4 cursor-pointer">
      <figure className="w-24 h-16 bg-primary"></figure>
      <Link href={"/"}>
        <h4 className="font-bold text-lg">Course Name</h4>
        <p className="font-semibold text-gray-600">&#8377;8650</p>
      </Link>
    </div>
  );
};

const page = async ({ params }) => {
  const courseId = (await params).id;
  const originalFee = 37000;
  const discountFee = 14000;
  const discount = Math.floor(
    ((originalFee - discountFee) / originalFee) * 100
  );
  let features = [
    "Intructor : Faiz Ali",
    "Lecture: 6",
    "duration : 6 weeeks",
    "enrolled:20",
    "language:English",
  ];
  return (
    <main>
      <PageHeader title={"course details"} />
      <section className="paddings w-full grid grid-cols-1 md:grid-cols-8 gap-x-4 gap-y-10 my-20">
        <aside className="w-full md:col-span-5 lg:col-span-6 md:pr-2 lg:pr-10 2xl:pr-20">
          <h1 className="text-3xl font-semibold text-gray-900">
            Lorem ipsum dolor sit amet consectetur - {courseId}
          </h1>
          <figure className="h-[350px] w-full relative overflow-hidden my-8">
            <Image
              src={"/assets/scholarship.webp"}
              alt="image"
              fill
              sizes="100%"
              priority={false}
              className="object-cover "
            />
          </figure>
          <div className="space-y-3">
            <h3 className="capitalize text-lg font-bold text-gray-800">
              Course overview
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
              tempore fugit corporis ipsum voluptas sequi sed officiis quod
              molestiae voluptate. Laboriosam officia, voluptas, neque
              necessitatibus quae autem sint obcaecati dignissimos temporibus
              mollitia quos nostrum voluptatum quam molestias doloribus suscipit
              distinctio quisquam, ratione asperiores? Quaerat illum quas,
              dignissimos suscipit tempora quia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam maiores quos mollitia, aut
              corporis id molestiae ea cupiditate modi doloremque natus dicta
              reiciendis expedita perferendis ipsam! Asperiores suscipit ipsum
              placeat. <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos quasi delectus dolor praesentium eum laborum quaerat
              autem facere dolorem, qui optio sequi, non accusantium vero hic
              placeat. Voluptate quo consequuntur, vitae culpa quibusdam ab.
              Totam inventore numquam porro consequuntur sint deserunt harum
              officiis repellendus, velit perferendis minima recusandae! Quaerat
              eum suscipit facilis, consequuntur quod unde magnam exercitationem
              soluta labore harum recusandae veritatis? Natus, eligendi,
              nesciunt enim tenetur nemo totam incidunt suscipit rerum tempora
              laborum, praesentium delectus ipsa dolorum consectetur. Corrupti,
              quidem eligendi. Accusamus a blanditiis velit facere quidem
              doloribus laudantium.
            </p>
          </div>
          <div className="space-y-3 mt-6">
            <h3 className="capitalize text-lg font-bold text-gray-800">
              what you will learn?
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              magni accusamus quas possimus aperiam necessitatibus quibusdam
              facere explicabo culpa! Iusto eius numquam corporis voluptatum,
              soluta excepturi, error, odit sed asperiores nostrum aliquam alias
              dicta! Dolore at, consequuntur enim beatae doloremque illo
              temporibus iusto voluptate minus praesentium mollitia odit,
              placeat dicta illum sequi quaerat quisquam aut incidunt, quia non
              accusamus eos sit. Aut dolore atque veritatis, assumenda explicabo
              reprehenderit in molestias deserunt sunt laudantium, maiores,
              nulla quo exercitationem alias sequi ipsa veniam neque sapiente
              distinctio temporibus culpa? Sunt molestiae eveniet animi.
            </p>
          </div>
        </aside>
        <aside className="lg:col-span-2 md:col-span-3 h-fit space-y-8">
          <div>
            <div className="py-2 px-3 w-full bg-primary rounded-t-lg text-white text-lg font-bold shadow">
              Course Features
            </div>
            <div className="rounded-b-lg bg-white px-3 py-6 shadow">
              <div className="flex justify-between items-end">
                <div className="space-x-1">
                  <span className="text-xl font-bold text-secondary">
                    &#8377;{discountFee}
                  </span>
                  <span className="font-semibold text-sm line-through">
                    &#8377;{originalFee}
                  </span>
                </div>
                <span className="px-2 py-1 bg-secondary/30 text-secondary font-bold text-[10px] rounded h-full self-center">
                  {discount}% OFF
                </span>
              </div>
              <div className="grid mt-3">
                {features.map((feature) => {
                  return (
                    <div
                      key={feature}
                      className="space-x-2 py-3 border-b capitalize"
                    >
                      <span className="font-bold opacity-80">
                        {feature.split(":")[0]}
                      </span>
                      <span>:</span>
                      <span className="text-gray-600">
                        {feature.split(":")[1]}
                      </span>
                    </div>
                  );
                })}
              </div>
              <button className="w-full py-3 outline-none bg-secondary text-white font-semibold rounded capitalize text-sm flex gap-2 items-center justify-center mt-6">
                Enroll Now
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold relative text-gray-800 border-b py-3 before:h-[2px] before:w-20 before:bg-secondary before:absolute before:-bottom-[1px] before:rounded-lg">
              New Courses
            </h3>
            <div className="grid gap-6 mt-8">
              {Array.from({ length: 3 }).map((_, i) => {
                return <NewCourseComponent key={i} />;
              })}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default page;
