import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import CreateJoinGame from "./Components/CreateJoinGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Game" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/CreateJoinGame" element={<CreateJoinGame />} />
      </Routes>
    </Router>
  );
}

export default App;
