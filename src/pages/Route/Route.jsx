import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Donation from "../components/Donation/Donation";

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
    ],
  },
]);
