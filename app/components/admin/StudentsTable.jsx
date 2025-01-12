"use client";
import { students } from "@/app/utils/students";
import React, { useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import AddNewButton from "./AddNewButton";

const StudentsTable = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const handleSelect = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents((prev) => prev.filter((s) => s !== student));
    } else {
      setSelectedStudents((pre) => [...pre, student]);
    }
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <div className="flex items-end mb-4 md:flex-row flex-col-reverse gap-y-3">
        <div
          className={`${
            selectedStudents.length > 0 ? "flex" : "hidden"
          }  gap-4`}
        >
          <DeleteButton text={"Remove"} />
          <EditButton text={"Edit"} />
        </div>
        <div className="place-self-end justify-self-end ml-auto">
          <AddNewButton text={"Add New Student"} />
        </div>
      </div>
      <table className="min-w-full border border-gray-200 bg-white shadow-md">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-2 px-4 text-left">
              <FaRegCheckSquare />
            </th>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left text-nowrap">Full Name</th>
            <th className="py-2 px-4 text-left text-nowrap">Mother Name</th>
            <th className="py-2 px-4 text-left">Age</th>
            <th className="py-2 px-4 text-left">Gender</th>
            <th className="py-2 px-4 text-left">Course</th>
            <th className="py-2 px-4 text-left">Department</th>
            <th className="py-2 px-4 text-left text-nowrap">Addmission Date</th>
            <th className="py-2 px-4 text-left pr-20">Address</th>
            <th className="py-2 px-4 text-left">DOB</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student._id}
              className={`border-b last:border-none  transition ${
                selectedStudents.includes(student._id) && "bg-secondary/50"
              }`}
            >
              <td className="py-2 px-4" htmlFor={student._id}>
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student._id) || false}
                  name={student._id}
                  value={student._id}
                  id={student._id}
                  className="mx-auto h-4 w-4"
                  onChange={() => handleSelect(student._id)}
                />
              </td>
              <td className="py-2 px-4">{student._id}</td>
              <td className="py-2 px-4 text-nowrap">
                {student.name + " " + student.fatherName}
              </td>
              <td className="py-2 px-4">{student.motherName}</td>
              <td className="py-2 px-4">{student.age}</td>
              <td className="py-2 px-4">{student.gender}</td>
              <td className="py-2 px-4">{student.course}</td>
              <td className="py-2 px-4">{student.department}</td>
              <td className="py-2 px-4">{student.admissionDate}</td>
              <td className="py-2 px-4">{student.address}</td>
              <td className="py-2 px-4 text-nowrap">{student.dateOfBirth}</td>
              <td className="py-2 px-4 text-nowrap">{student.phone}</td>
              <td className="py-2 px-4">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View as Cards */}
      {/* <div className="grid  sm:grid-cols-2 gap-4 md:hidden">
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
      </div> */}
    </div>
  );
};

export default StudentsTable;
