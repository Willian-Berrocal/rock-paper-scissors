import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="neko-home">
      <div className="content">
        <h1>NEKO</h1>
        <h3>Welcome, my cat</h3>
        <p>Now you're team cats, NOT dogs, rabbits... other.</p>
        <p>We'll keep that in mind</p>
        <button
          className="login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </button>
        <button
          className="signup"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Home;
