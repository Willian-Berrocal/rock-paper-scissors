import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import draw from "../img/draw.png";
import lose from "../img/lose.png";
import paper from "../img/paper.png";
import rock from "../img/rock.png";
import scissors from "../img/scissors.png";
import win from "../img/win.png";

const Game = () => {
  const [userChoice, setuserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const choices = ["rock", "paper", "scissors"];
  const userName = "Neko";
  const rivalName = "NotNeko";

  const handleClick = (value) => {
    setuserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomNumber];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("YOU WIN!");
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("YOU LOSE!");
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        setResult("DRAW!");
        break;
    }
  }, [computerChoice, userChoice]);

  return (
    <div id="Game">
      <div id="header">
        <div className="phrase">
          <h2>Let's the game begin</h2>
          <p>Good Luck!</p>
        </div>
        <div className="arrow">
          <span className="arrow-line"></span>
          <span className="arrow-right"></span>
        </div>
        <div className="game-status">
          <p className="number-round">1° Round</p>
          <p className="won-round">"#" of won rounds </p>
        </div>
      </div>
      <div id="options">
        <div className="rock">
          <img src={rock} alt="rock" onClick={() => handleClick("rock")} />
          <button onClick={() => handleClick("rock")}>rock</button>
        </div>
        <div className="paper">
          <img src={paper} alt="paper" onClick={() => handleClick("paper")} />
          <button onClick={() => handleClick("paper")}>paper</button>
        </div>
        <div className="scissors">
          <img
            src={scissors}
            alt="scissors"
            onClick={() => handleClick("scissors")}
          />
          <button onClick={() => handleClick("scissors")}>scissors</button>
        </div>
      </div>
      <h2>{result}</h2>
      <div className="new-or-out">
        <div className="buttons-choice">
          <button
            className="new-game"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            New Game
          </button>
          <button
            className="exit"
            onClick={() => {
              navigate("/CreateJoinGame");
            }}
          >
            Exit
          </button>
        </div>
        <img className="img-status" src={draw} alt="draw" />
      </div>
    </div>
  );
};

export default Game;
