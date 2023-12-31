import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  let content;

  content = (
    <div className="flex flex-col lg:flex-row px-0  ">
      <div className="w-full lg:px-1 lg:py-4 lg:max-w-xs flex flex-col bg-gray-300 h-auto lg:h-full lg:fixed top-12 lg:top-12">
        <Link
          to="/aboutus/committe"
          className="btn btn-md bg-gray-700 text-gray-50 font-bold w-full"
        >
          Committe
        </Link>
        <Link
          to="/aboutus/teacher"
          className="btn btn-md bg-gray-700 text-gray-50 font-bold w-full"
        >
          Teacher
        </Link>
        <Link
          to="/aboutus/student"
          className="btn btn-md bg-gray-700 text-gray-50 font-bold w-full"
        >
          Student
        </Link>
      </div>
      <div className="w-full lg:ml-72 lg:pl-8 lg:mt-0">
        <Outlet />
      </div>
      <button
        className="fixed bottom-4 rounded bg-red-700 text-red-50 p-2 ml-2"
        onClick={() => window.scrollTo(0, 0)}
      >
        top
      </button>
    </div>
  );
  return content;
};

export default AboutUs;
