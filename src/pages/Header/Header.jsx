import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserdata from "../../hooks/auth/useUserdata";
import Loader from "../components/shared/Loader";
import useCheckAdmin from "../../hooks/auth/useCheckAdmin";
import title from "../../assets/title.jpeg";

const Header = () => {
  let content
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminLayout = location.pathname.includes("/adminLayout");
  const [checkWebAdmin, isAdminFound, isLoading] = useCheckAdmin();
  const {
    forceCheckLocalStorage,
    loading,
    u_email,
    u_role,
    setU_email,
    setU_role,
  } = useUserdata()

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  useEffect(() => {
    if (!isLoading || !loading || u_email || u_role) {
      forceCheckLocalStorage();
      checkWebAdmin();
    }
  }, [location.pathname]);



  if(screenWidth > 770){
    content = (
      <div className="py-2 px-2 mx-auto flex flex-wrap bg-gray-600 fixed sticky top-0 z-50  md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">
            <img className="h-[40px] sm:h-[40px] rounded-full"  src={title} />
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="text-gray-50 mr-5 hover:text-gray-900">Home</Link>
          <Link to="/gallery" className="text-gray-50 mr-5 hover:text-gray-900">Gallery</Link>
          <Link to="/contact" className="text-gray-50 mr-5 hover:text-gray-900">Contact</Link>
          <Link to="/donate"  className="text-gray-50 mr-5 text-whit hover:text-gray-900">Donate</Link>
          <Link to="/aboutus" className="text-gray-50 mr-5 text-whit hover:text-gray-900">About Us</Link>
          <Link to="/notice"  className="text-gray-50 mr-5 text-whit hover:text-gray-900">Notice</Link>
          <Link to="/curriculum"  className="text-gray-50 mr-5 text-whit hover:text-gray-900">Curriculum</Link>
          {!u_email && <Link className="text-gray-50" to="/login">Login</Link>}
          {!isAdminFound && (<Link className="ps-4 text-gray-50" to="/register">Sign Up</Link>)}
        </nav>
        {!isAdminLayout && (
          <Link
            to="adminLayout"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Admin
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    )
  }else{
    content = (
      <div className="flex justify-center z-50 top-0 sticky bg-gray-600 py-2">
        <div className="flex-1">
          <Link
            to="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <span className="ml-3 mt-1 text-xl">
              <img className="h-[40px] sm:h-[40px] rounded-full" src={title} />
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {!isAdminLayout && (
              <Link
                to="adminLayout"
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Admin
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            )}
            <li>
              <details>
                <summary className="font-semibold text-gray-50">GOTO</summary>
                <ul className="p-2 bg-base-100 rounded-t-none right-1">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/notice">Notice</Link></li>
                  <li><Link to="/donate">Donate</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/curriculum">Curriculum</Link></li>
                  {!u_email && <li><Link to="/login">Login</Link></li>}
                  {!isAdminFound && (<li><Link to="/register">Signup</Link></li>)}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return content
}

export default Header;

// <header className="text-white-900 body-font absolute top-0 sticky bg-green-400 z-50 py-1 px-1 ">

{
  /* <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">
            <img className="h-[40px] sm:h-[40px] rounded-full"  src={title} />
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/gallery" className="mr-5 hover:text-gray-900">Gallery</Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
          <Link to="/donate" className="mr-5 text-whit hover:text-gray-900">Donate</Link>
          <Link to="/aboutus" className="mr-5 text-whit hover:text-gray-900">About Us</Link>
          <Link to="/notice" className="mr-5 text-whit hover:text-gray-900">Notice</Link>
          <Link to="/notice" className="mr-5 text-whit hover:text-gray-900">Curriculum</Link>
          {!u_email && <Link to="/login">Login</Link>}
          {!isAdminFound && (<Link className="ps-4" to="/register">Sign Up</Link>)}
        </nav>
        {!isAdminLayout && (
          <Link
            to="adminLayout"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Admin
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div> */
}
// </header>
