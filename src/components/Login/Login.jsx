/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../assets/eye-low-vision-solid.svg";
import { userContext } from "../Provider/AuthProvider";
const Login = () => {
  const { signIn } = useContext(userContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((r) => {
        const loggedUser = r.user;
        console.log(loggedUser);
        form.reset()
        navigate('/')
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
    <div className="loginContainer">
      <div className="loginSubContainer">
        <span className="borderline"></span>
        <form onSubmit={handleSubmit}>
          <h2 className="loginTittle">Login</h2>
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
          />

          <input
            placeholder="Your Password"
            type="password"
            name="password"
            id="password"
          />
          <img onClick={handleShowPassword} className="eye" src={eye} />

          <small className="ForgetPassword">Forget Password</small>
          <p>
            <small>
              New User? <Link to="/register">Register</Link>
            </small>
          </p>
          <button>Login</button>
          <br />
          <p>
            <small className="Login_With_SM">Login With Social Media</small>
          </p>
        </form>
        <div>
          <p className="success">{}</p>
          <p className="error">{}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
