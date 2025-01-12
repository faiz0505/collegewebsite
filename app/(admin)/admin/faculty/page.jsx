import FacultyTable from "@/app/components/admin/FacultyTable";
import Filter from "@/app/components/admin/Filter";
import StudentsTable from "@/app/components/admin/StudentsTable";
import CustomSearch from "@/app/components/ui/CustomSearch";
import Pagination from "@/app/components/ui/Pagination";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

const page = () => {
  const filterData = [
    {
      _id: "ur94",
      title: "Gender",
      options: ["male", "female"],
    },
    {
      _id: "ur96",
      title: "department",
      options: ["computer science", "atrs", "commerse"],
    },
    {
      _id: "ur97",
      title: "class",
      options: ["11th", "12th"],
    },
    {
      _id: "ur98",
      title: "Demo",
      options: ["example 1", "example 2"],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-4 paddings">
      <div className="w-full md:col-span-4 lg:col-span-3 space-y-4">
        <div className="w-full">
          <div className="bg-white px-6 py-3 rounded-lg shadow flex items-center gap-4 h-24">
            <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
              <FaChalkboardTeacher className="text-3xl text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-1">27</h2>
              <h6 className="text-sm font-semibold text-neutral-700">
                Total Faculties
              </h6>
            </div>
          </div>
        </div>
        <Filter filterData={filterData} />
      </div>
      <div className="w-full flex flex-col md:col-span-8 lg:col-span-9 space-y-4">
        <div className="w-full flex py-[2px] flex-col md:flex-row justify-between items-start gap-2">
          <div className="md:w-[70%] w-full">
            <CustomSearch
              placeholder={"type name, email, department or keywords..."}
              variant={"primary"}
              text={"Search"}
            />
          </div>
          <div className="bg-white px-6 py-3 rounded-lg shadow flex items-center gap-4 h-24 w-full md:w-[30%]">
            <div className="h-12 w-12 bg-primary/30 flex justify-center items-center text-white rounded-full">
              <FaFilter className="text-2xl text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-1">4</h2>
              <h6 className="text-sm font-semibold text-neutral-700">
                Filtered Faculties
              </h6>
            </div>
          </div>
        </div>
        <FacultyTable />
        <Pagination totalPages={10} />
      </div>
    </div>
  );
};

export default page;
