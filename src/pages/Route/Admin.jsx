import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useConsistancy from "../../hooks/additional/useConsistancy";
import useUserdata from "../../hooks/auth/useUserdata";
import useCheckAdmin from "../../hooks/auth/useCheckAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {
  const location = useLocation()
  const [trackConsistency] = useConsistancy()
  const {
    forceCheckLocalStorage,
    loading,
    u_email,
    u_role,
    setU_email,
    setU_role,
  } = useUserdata()
  const [checkWebAdmin, isAdminFound, isLoading] = useCheckAdmin()


  useEffect(()=>{
    trackConsistency()
    forceCheckLocalStorage()
  },[location.pathname])

  
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token")
    setU_email("")
    setU_role("")
    forceCheckLocalStorage()
    checkWebAdmin()
  }


  return (
      <div className="mx-auto relative">
        <Header></Header>
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content text-center">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer"
              className=" fixed bottom-8 right-8 lg:right-64"
            >
              <FontAwesomeIcon className="text-red-900" size="3x" icon={faBars} fade pull="left"  />
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
                <Link to="/adminLayout/checknotice">Check Notice</Link>
                <Link to="/adminLayout/checkeditorials">Check Editorials</Link>

                <button onClick={(e) => handleLogOut(e)} className="btn btn-sm fixed bottom-4 w-1/2 bg-red-600 text-teal-50 font-bold">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

  );
};

export default Admin