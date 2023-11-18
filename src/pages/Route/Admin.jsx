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
          <div className="drawer-content">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer"
              className="btn bg-blue-600 text-white fixed bottom-16 btn-sm drawer-button ml-1">
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

      <Footer></Footer>
    </div>
  );
};

export default Admin;


                {/* <Link to="/adminLayout/addstudent">Add Student</Link> */}
                {/* <Link to="/adminLayout/addcommitte">Add Committe</Link> */}
                {/* <Link to="/adminLayout/addteacher">Add Teacher</Link> */}
                {/* <Link to="/adminLayout/addeditorials">Add Editorials</Link> */}