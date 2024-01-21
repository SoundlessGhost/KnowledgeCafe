/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const post = useLoaderData()
  return (
    <div>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogDetails;
