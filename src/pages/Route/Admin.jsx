import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Header></Header>

      <div className="py-5">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content text-center">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer"
              className="btn bg-blue-600 text-white lg:fixed top-10 right-20 btn-sm drawer-button ml-1"
            >
              Dashboard
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <Link to="/adminLayout/checkstudent">Check Student</Link>
                <Link to="/adminLayout/checkcommitte">Check committe</Link>
                <Link to="/adminLayout/checkteacher">Check Teachers</Link>
                <Link to="/adminLayout/checkeditorials">Check Editorials</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* new section */}
        <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-col w-full mb-12 text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Lutfia Atimkhana
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
                The majority of our work can be divided up into what we call our
                6 pillar.Each one a seperate field that supports of or lifts up
                our organization as a whole
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-3/5 mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Admin;

{
  /* <Link to="/adminLayout/addstudent">Add Student</Link> */
}
{
  /* <Link to="/adminLayout/addcommitte">Add Committe</Link> */
}
{
  /* <Link to="/adminLayout/addteacher">Add Teacher</Link> */
}
{
  /* <Link to="/adminLayout/addeditorials">Add Editorials</Link> */
}
