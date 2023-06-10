import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import CreateJoinGame from "./Components/CreateJoinGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Game" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/CreateJoinGame" element={<CreateJoinGame />} />
      </Routes>
    </Router>
  );
}

export default App;
