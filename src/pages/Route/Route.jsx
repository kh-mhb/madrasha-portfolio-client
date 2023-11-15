import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Donation from "../components/Donation/Donation";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Committe from "../components/Committe/Committe";
import Teacher from "../components/Teacher/Teacher";
import Student from "../components/Student/Student";
import Admin from "./Admin";
import AddStudent from "../components/AddUser/AddStudent";
import AddTeacher from "../components/AddUser/AddTeacher";
import AddCommitte from "../components/AddUser/AddCommitte";
import CheckStudents from "../components/AddUser/CheckStudents";
import CheckTeacher from "../components/AddUser/CheckTeacher";
import EditTeacher from "../components/AddUser/EditTeacher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/donate",
        element: <Donation></Donation>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/committe",
        element: <Committe></Committe>,
      },
      {
        path: "/teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "/student",
        element: <Student></Student>,
      },
    ],
  },
  {
    path: "adminLayout",
    element: <Admin></Admin>,
    children: [
      {
        path: "addstudent",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "checkstudent",
        element: <CheckStudents />,
      },
      {
        path: "addcommitte",
        element: <AddCommitte></AddCommitte>,
      },
      {
        path: "addteacher",
        element: <AddTeacher></AddTeacher>,
      },
      {
        path: "checkteacher",
        element: <CheckTeacher/>,
      },
      {
        path: "editteacher/:id",
        element: <EditTeacher/>,
      },
    ],
  },
]);
