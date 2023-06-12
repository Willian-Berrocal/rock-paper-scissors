import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import login from "../img/login.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-main">
      <h2>Just log in!</h2>
      <p className="miau">MIAU</p>
      <div className="content">
        <img src={login} alt="" />
        <div className="form-and-others">
          <h2>Hi, . . . !</h2>
          <h3 className="miau">You again?</h3>
          <form className="login-form">
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
            <button
              type="submit"
              className="login-button"
              onClick={() => {
                navigate("/CreateJoinGame");
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
