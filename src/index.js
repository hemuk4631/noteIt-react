import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <React.StrictMode> is For detecting the potential issues and provide warnings to the browser console.
