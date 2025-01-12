import { teachers } from "@/app/utils";
import React from "react";

const FacultyTable = () => {
  return (
    <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white shadow-md hidden md:table">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Designation</th>
                <th className="py-2 px-4 text-left">Department</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{teacher.id}</td>
                  <td className="py-2 px-4">{teacher.name}</td>
                  <td className="py-2 px-4">{teacher.designation}</td>
                  <td className="py-2 px-4">{teacher.department}</td>
                  <td className="py-2 px-4">{teacher.email}</td>
                  <td className="py-2 px-4">{teacher.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View as Cards */}
          <div className="grid  sm:grid-cols-2 gap-4 md:hidden">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <p className="text-gray-700">
                  <span className="font-semibold">ID:</span> {teacher.id}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span> {teacher.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Designation:</span>{" "}
                  {teacher.designation}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Department:</span>{" "}
                  {teacher.department}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {teacher.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> {teacher.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
  );
};

export default FacultyTable;
