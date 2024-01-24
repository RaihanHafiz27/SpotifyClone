import React from "react";
import ReactDOM from "react-dom";
import { Home } from "../src/Page/home";
import { Login } from "./Page/login";
import { Register } from "./Page/register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Home } from "../src/Page/home";
// import { Login } from "./Page/login";
// import { Register } from "./Page/register";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </React.StrictMode>
// );
