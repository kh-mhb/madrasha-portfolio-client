import React from "react";
import { Link } from "react-router-dom";



const AboutUs = () => {
  return (
    <div className="px-10">
      {/* <div className="text-center py-5">
        <h1 className="sm:text-3xl text-3xl  border-y-4 lg:w-1/3 mx-auto py-3 font-medium title-font mb-4 text-gray-900">
          Introduction
        </h1>
      </div> */}
      <div className="grid lg:grid-cols-3 justify-center items-center  gap-x-6">
        <div className="flex  lg:flex-col lg:py-2 gap-2">
          <Link to="/committe" className="btn btn-outline">
            Committe
          </Link>
          <Link to="/teacher" className="btn btn-outline btn-primary">
            Teacher
          </Link>
          <Link to="/student" className="btn btn-outline btn-secondary">
            Student
          </Link>
        </div>
        <div className="col-span-2 ..1.">
          <h3 className="leading-8 break-all font-normal px-2 sm:px-5 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit dolorum, tenetur vitae saepe ipsa dolores enim ab iste
            maiores quae possimus et atque dolorem consequuntur accusamus
            excepturi nobis, minus, odio non! Fugiat repellat reprehenderit
            amet, accusamus, rem, animi expedita laudantium corrupti delectus
            non dolore dolor tenetur maiores ipsa fuga hic sint voluptatum.
            Magni perspiciatis mollitia ea minima ipsa, ipsam, delectus sit
            illum doloribus culpa suscipit? Recusandae, adipisci, delectus animi
            mollitia magnam qui quam, ea numquam nam aspernatur tenetur commodi
            fuga?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
