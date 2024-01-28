import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogDetails from "./components/blogDetails/BlogDetails.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import Main from "./components/main/main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "main",
        element: <Main></Main>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "blog/:blogId",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
