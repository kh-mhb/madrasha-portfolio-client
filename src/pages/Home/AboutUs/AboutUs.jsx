import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="px-1 lg:px-10">
      <div className="grid lg:grid-cols-3 justify-center items-center  mt-6">
        <div className="flex  lg:flex-col lg:py-2 gap-2">
          <Link to="/committe" className="btn btn-outline ml-10 lg:ml-0">
            Committe
          </Link>
          <Link to="/teacher" className="btn btn-outline">
            Teacher
          </Link>
          <Link to="/student" className="btn btn-outline">
            Students
          </Link>
        </div>

        <div className="col-span-2 ..1.">
          <h3 className="leading-8 break-all font-normal px-2 sm:px-5 ">
            Explore the distinct roles and contributions of our Committee,
            dedicated Teachers, and talented Students. Each plays a vital part
            in shaping our institution and fostering a positive learning
            environment. Discover their stories, achievements, and the essence
            of our educational journey.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
