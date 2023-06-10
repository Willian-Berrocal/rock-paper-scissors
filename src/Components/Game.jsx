import { useEffect, useState } from "react";

const Game = () => {
  const [userChoice, setuserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

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
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
};

export default Game;
