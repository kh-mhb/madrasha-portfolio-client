import { Outlet, createBrowserRouter } from "react-router-dom";
import Admin from "./Admin";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Contact from "../components/Contact/Contact";
import Donation from "../components/Donation/Donation";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Committe from "../components/Committe/Committe";
import Teacher from "../components/Teacher/Teacher";
import Student from "../components/Student/Student";
import AddStudent from "../components/AddUser/AddStudent";
import AddTeacher from "../components/AddUser/AddTeacher";
import AddCommitte from "../components/AddUser/AddCommitte";
import CheckStudents from "../components/AddUser/CheckStudents";
import CheckTeacher from "../components/AddUser/CheckTeacher";
import EditTeacher from "../components/AddUser/EditTeacher";
import CheckCommitte from "../components/AddUser/CheckCommitte";
import EditCommitteMember from "../components/AddUser/EditCommitteMember";
import AddWebManagement from "../components/AddUser/AddWebManagement";
import WebManagement from "../components/AddUser/WebManagement";
import RequireAuth from "../../utilities/RequireAuth";
import EditManagement from "../components/AddUser/EditManagement";
import Profile from "../components/AddUser/Profile";
import Gallery from "../components/Gallery/Gallery1";
import NotFound404 from "../components/shared/NotFound404";


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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/committe",
        element: <Committe />,
      },
      {
        path: "/teacher",
        element: <Teacher />,
      },
      {
        path: "/student",
        element: <Student />,
      },
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
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  }
]);
