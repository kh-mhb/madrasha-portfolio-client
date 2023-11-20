import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Admin = () => {


  return (


      <div className="mx-auto relative">
        <Header></Header>
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content text-center">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer"
              className="btn bg-blue-600 text-white absolute left-1 lg:top-0 btn-sm drawer-button"
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
            <ul className="menu p-4 w-80  min-h-full bg-base-200 text-base-content pt-20">
              <li className="pl-16 pt-8">
                <Link>Profile</Link>
                <Link to="/adminLayout/checkstudent">Check Student</Link>
                <Link to="/adminLayout/checkcommitte">Check committe</Link>
                <Link to="/adminLayout/checkteacher">Check Teachers</Link>
                <Link to="/adminLayout/checkeditorials">Check Editorials</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
};

export default Admin