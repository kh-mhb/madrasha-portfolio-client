import { Outlet, createBrowserRouter } from "react-router-dom";
import Admin from "./Admin";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Contact from "../components/Contact/Contact";
import Donation from "../components/Donation/Donation";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Committe from "../components/AboutUs/Committe";
import Teacher from "../components/AboutUs/Teacher";
import Student from "../components/AboutUs/Student";

import RequireAuth from "../../utilities/RequireAuth";
import Profile from "../components/AdminDashBoard/Profile";
import Gallery from "../components/Gallery/Gallery1";

import NotFound404 from "../components/shared/NotFound404";
import AboutUs from "../components/AboutUs/AboutUs";
import Message from "../components/AboutUs/Message";

import AddCommitte from "../components/AdminDashBoard/CommitteManagement/AddCommitte";
import CheckCommitte from "../components/AdminDashBoard/CommitteManagement/CheckCommitte";
import EditCommitteMember from "../components/AdminDashBoard/CommitteManagement/EditCommitteMember";

import AddWebManagement from "../components/AdminDashBoard/WebManagement/AddWebManagement";
import WebManagement from "../components/AdminDashBoard/WebManagement/WebManagement";
import EditManagement from "../components/AdminDashBoard/WebManagement/EditManagement";

import AddTeacher from "../components/AdminDashBoard/TeacherManagement/AddTeacher";
import CheckTeacher from "../components/AdminDashBoard/TeacherManagement/CheckTeacher";
import EditTeacher from "../components/AdminDashBoard/TeacherManagement/EditTeacher";

import AddStudent from "../components/AdminDashBoard/StudentManagement/AddStudent";
import CheckStudents from "../components/AdminDashBoard/StudentManagement/CheckStudents";
import CheckNotice from "../components/AdminDashBoard/NoticeManagement/CheckNotice";
import AddNotice from "../components/AdminDashBoard/NoticeManagement/AddNotice";
import Notice from "../components/Notice/Notice";
import NoticeDetails from "../components/Notice/NoticeDetails";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/donate",
        element: <Donation />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/noticedetails/:id",
        element: <NoticeDetails />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        children:[
          {
            path: "",
            element: <Message />,
          },
          {
            path: "committe",
            element: <Committe />,
          },
          {
            path: "teacher",
            element: <Teacher />,
          },
          {
            path: "student",
            element: <Student />,
          },
        ]
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
  {
    path: "adminLayout",
    element: (
      <RequireAuth>
        <Admin>
          <Outlet />
        </Admin>
      </RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "addstudent",
        element: <AddStudent />,
      },
      {
        path: "checkstudent",
        element: <CheckStudents />,
      },
      {
        path: "addcommitte",
        element: <AddCommitte />,
      },
      {
        path: "checkcommitte",
        element: <CheckCommitte />,
      },
      {
        path: "editcommitte/:id/:u_email",
        element: <EditCommitteMember />,
      },
      {
        path: "addteacher",
        element: <AddTeacher />,
      },
      {
        path: "checkteacher",
        element: <CheckTeacher />,
      },
      {
        path: "editteacher/:id/:t_name",
        element: <EditTeacher />,
      },
      {
        path: "addeditorials",
        element: <AddWebManagement />,
      },
      {
        path: "checkeditorials",
        element: <WebManagement />,
      },
      {
        path: "editmanagement/:id/:p_email",
        element: <EditManagement />,
      },
      {
        path: "checknotice",
        element: <CheckNotice />,
      },
      {
        path: "editnotice/:id/:p_email",
        element: <EditManagement />,
      },
      {
        path: "addnotice",
        element: <AddNotice />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  }
]);
