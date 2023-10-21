import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/AuthProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Router/route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
