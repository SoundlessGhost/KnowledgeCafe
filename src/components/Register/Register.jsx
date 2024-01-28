/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import eye from "../../assets/eye-low-vision-solid.svg";
import { userContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(userContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((r) => {
        const loggedUser = r.user;
        console.log(loggedUser);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Show & Hide Password_Function
  const handleShowPassword = () => {
    const password = document.getElementById("password");
    password.type === "password"
      ? (password.type = "text")
      : (password.type = "password");
  };
  return (
    <div className="registerContainer">
      <div className="registerSubContainer">
        <form onSubmit={handleRegister}>
          <h2 className="registerTittle">Register</h2>
          <input placeholder="Your Name" type="text" name="name" id="" />
          <br />
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
          />
          <br />
          <input
            placeholder="Your Password"
            type="password"
            name="password"
            id="password"
          />
          <img onClick={handleShowPassword} className="Eye" src={eye} />
          <br />
          <p>
            <small>
              Already Have An Account? <Link to="/login">Login</Link>
            </small>
          </p>
          <button>Register</button>
          <br />
        </form>
        <div>
          <p className="success">{}</p>
          <p className="error">{}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
