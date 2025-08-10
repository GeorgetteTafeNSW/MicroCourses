/*
main.jsx

The entry point for the react js front-end of the MicroCourses application
*/

//import StrictMode to detect common bugs
import { StrictMode } from "react";
//import createRoot to create a root node for all react components
import { createRoot } from "react-dom/client";
//import App.jsx for routing
import App from "./App.jsx";

//create the root for the application in the DOM, then add App.jsx to the tree
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
