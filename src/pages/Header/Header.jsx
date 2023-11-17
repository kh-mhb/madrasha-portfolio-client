import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserdata from "../../hooks/auth/useUserdata";
import Loader from "../components/shared/Loader";
import useCheckAdmin from "../../hooks/auth/useCheckAdmin";

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isAdminLayout = location.pathname.includes('/adminLayout')
  const { forceCheckLocalStorage , loading , u_email , u_role , setU_email , setU_role} = useUserdata()
  const [ checkWebAdmin , isAdminFound , isLoading] = useCheckAdmin()

  useEffect(()=>{
    forceCheckLocalStorage()
    if(!isLoading || !loading || u_email || u_role){
      
    }
  },[location.pathname])

  if(loading){
    return <Loader />
  }

  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('access_token')
    setU_email('')  
    setU_role('')
  }
  

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Title</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/gallery" className="mr-5 hover:text-gray-900">
              Gallery
            </Link>
            <Link to="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/donate" className="mr-5 hover:text-gray-900">
              Donate
            </Link>
            {!u_email ? <Link to="/login">Login</Link>:<button onClick={(e) => handleLogOut(e)}>Logout</button>}
            {!isAdminFound && <Link className="ps-4" to="/register">Sign Up</Link>}
          </nav>
          {!isAdminLayout && <Link
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
          </Link>}
        </div>
      </header>
    </div>
  );
};

export default Header;
