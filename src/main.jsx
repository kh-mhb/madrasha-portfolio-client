import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Route/Route.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="max-w-[1366px] mx-auto"
    >
      <RouterProvider router={router} />
      <Toaster />
    </div>
  </React.StrictMode>
)