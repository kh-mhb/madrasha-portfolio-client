import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Route/Route.jsx";
import { Toaster } from "react-hot-toast";
import Header from "./pages/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="max-w-7xl mx-auto"
    >
      <RouterProvider router={router} />
      <Toaster />
    </div>
  </React.StrictMode>
);
