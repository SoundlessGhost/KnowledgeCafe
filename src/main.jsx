import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogDetails from "./components/blogDetails/blogDetails.jsx";

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
        element: <div>Hey Bro I Caught u</div>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path: "blog/:blogId",
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
