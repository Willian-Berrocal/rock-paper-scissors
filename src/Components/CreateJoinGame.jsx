import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateJoinGame.css";

const CreateJoinGame = () => {
  const navigate = useNavigate();
  const randomId = Math.floor(Math.random() * 10000);

  return (
    <div id="Create-Join-Game">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Log Out
      </button>
      <h1>Create or Join Game</h1>
      <div className="main-create-join">
        <div className="create-game">
          <p>#{randomId}</p>
          <button
            onClick={() => {
              navigate("/Game");
            }}
          >
            Create Game
          </button>
        </div>
        <div className="join-game">
          <input type="text" />
          <button
            onClick={() => {
              navigate("/Game");
            }}
          >
            Join Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateJoinGame;
