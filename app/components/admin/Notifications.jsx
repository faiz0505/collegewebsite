import React from "react";
import AddNewButton from "./AddNewButton";
import DeleteButton from "./DeleteButton";

const Notifications = () => {
  const notifications = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto facilis quia consectetur vitae pariatur?",
      date: "17 Mar 2024",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto facilis quia consectetur vitae pariatur?",
      date: "17 Mar 2024",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto facilis quia consectetur vitae pariatur?",
      date: "17 Mar 2024",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto facilis quia consectetur vitae pariatur?",
      date: "17 Mar 2024",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto facilis quia consectetur vitae pariatur?",
      date: "17 Mar 2024",
    },
  ];
  return (
    <div className="p-3 bg-white rounded-lg shadow h-80 overflow-y-auto scrollbar-hide">
      <div className="flex justify-between items-center sticky top-0 backdrop-blur-lg">
        <h2 className="text-xl font-bold ">Notice Board</h2>
        <AddNewButton text={"Add"} />
      </div>
      <div className="space-y-3 mt-5">
        {notifications.map((notification, i) => {
          return (
            <div className="space-y-2" key={notification.date + i}>
              <div className="flex justify-between items-end">
                <span className="px-3 py-1 text-xs bg-primary/20 text-primary w-fit rounded-lg">
                  {notification.date}
                </span>
                <DeleteButton />
              </div>
              <p className="text-sm text-gray-700">{notification.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
