import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {
  BsFillCalendar2DateFill,
  BsGridFill,
  BsHouseDoorFill,
  BsImageAlt,
} from "react-icons/bs";

export const SidebarData = [
  {
    title: "Add Department",
    path: "/addDepartment",
    // icon: <AiIcons.AiFillHome />,
    icon: <BsHouseDoorFill />,
    cName: "nav-text",
  },
  {
    title: "viewDepartment",
    path: "/viewDepartment",
    icon: <BsGridFill />,
    cName: "nav-text",
  },
  {
    title: "Add Head",
    path: "/addHead",
    icon: <BsFillCalendar2DateFill />,
    cName: "nav-text",
  },
  {
    title: "Add Employee",
    path: "/addEmployee",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "View Employee",
    path: "/viewEmployee",
    icon: <BsImageAlt />,
    cName: "nav-text",
  },
];
