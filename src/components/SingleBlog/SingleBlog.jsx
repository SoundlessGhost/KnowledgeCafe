/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SingleBlog.css";
import { Link } from "react-router-dom";
const SingleBlog = ({ picture }) => {
  const { id, title, body } = picture;
  return (
    <div>
      <div className="postContainer">
        <p> Id :{id}</p>
        <p>Title -:- {title}</p>
        <p>
          Body -:- {body} <Link to={`/blog/${id}`}>Show More</Link>
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
