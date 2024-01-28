/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { userContext } from "../Provider/AuthProvider";

const Main = () => {
  const { user, loading } = useContext(userContext);
  if (loading) {
    return "loading ... ";
  }
  return <div>{user && <div>Hey Bro I Caught u {user.email}</div>}</div>;
};

export default Main;
