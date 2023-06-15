import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import signup from "../img/signup.png";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const navigate = useNavigate();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const password1Handler = (event) => {
    setPassword1(event.target.value);
  };

  return (
    <div className="signup-main">
      <h2>Please, sign up!</h2>
      <p className="miau">MIAU</p>
      <div className="signup-content">
        <img src={signup} alt="" />
        <div className="form-and-others">
          <h2>Do it right now! please?</h2>
          <h3 className="miau">Actually, it's an order</h3>
          <form className="signup-form">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={usernameHandler}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={passwordHandler}
            />
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="confirm password"
              onChange={password1Handler}
            />
            <button
              type="submit"
              className="add-button"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
