import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserdata from "../../hooks/auth/useUserdata";
import Loader from "../components/shared/Loader";
import useCheckAdmin from "../../hooks/auth/useCheckAdmin";
import title from "../../assets/title.jpeg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminLayout = location.pathname.includes("/adminLayout");
  const {
    forceCheckLocalStorage,
    loading,
    u_email,
    u_role,
    setU_email,
    setU_role,
  } = useUserdata();
  const [checkWebAdmin, isAdminFound, isLoading] = useCheckAdmin();

  useEffect(() => {
    if (!isLoading || !loading || u_email || u_role) {
      forceCheckLocalStorage();
      checkWebAdmin();
    }
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token")
    setU_email("")
    setU_role("")
    forceCheckLocalStorage()
    checkWebAdmin()
  };

  return (
    <header className="text-gray-600 body-font fixed top-0 sticky">
      <div className="container mx-auto flex flex-wrap mt-2 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">
            <img className="h-[60px] sm:h-[60px]" src={title} />
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/gallery" className="mr-5 hover:text-gray-900">
            Gallery
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/donate" className="mr-5 hover:text-gray-900">
            Donate
          </Link>
          {!u_email ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={(e) => handleLogOut(e)}>Logout</button>
          )}
          {!isAdminFound && (
            <Link className="ps-4" to="/register">
              Sign Up
            </Link>
          )}
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
    </header>
  );
};

export default Header;
