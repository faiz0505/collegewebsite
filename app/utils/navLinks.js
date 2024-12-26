export const navLinks = [
  { title: "Home", type: "single", href: "/" },
  { title: "About Us", type: "single", href: "/aboutus" },
  {
    title: "Courses",
    type: "multiple",
    href: "/courses",
    subLinks: [
      {
        title: "Course 1",
        type: "single",
        href: "/course/course1",
      },
      {
        title: "Course 2",
        type: "single",
        href: "/course/course2",
      },
      {
        title: "Course 3",
        type: "single",
        href: "/course/course3",
      },
      {
        title: "Course 4",
        type: "single",
        href: "/course/course4",
      },
      {
        title: "Course 5",
        type: "single",
        href: "/course/course5",
      },
    ],
  },
  {
    title: "Events",
    type: "multiple",
    href: "/events",
    subLinks: [
      {
        title: "Event 1",
        type: "single",
        href: "/event/event1",
      },
      {
        title: "Event 2",
        type: "single",
        href: "/event/event2",
      },
      {
        title: "Event 3",
        type: "single",
        href: "/event/event3",
      },
      {
        title: "Event 4",
        type: "single",
        href: "/event/event4",
      },
      {
        title: "Event 5",
        type: "single",
        href: "/event/event5",
      },
    ],
  },
  {
    title: "Pages",
    type: "multiple",
    subLinks: [
      {
        title: "Page 1",
        type: "single",
        href: "/page/page1",
      },
      {
        title: "Page 2",
        type: "single",
        href: "/page/page2",
      },
      {
        title: "Page 3",
        type: "single",
        href: "/page/page3",
      },
    ],
  },
  { title: "Services", type: "footer", href: "/services" },
  { title: "Blogs", type: "footer", href: "/blogs" },
  { title: "Contact us", type: "single", href: "/contactus" },
];
