import React, { useEffect, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      <br />
      <button type="submit" className="login-button">
        Log In
      </button>
    </form>
  );
};
export default Login;
