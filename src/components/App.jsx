import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(data.map((bot) => bot)));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <div>
      <Router>
        <nav className="nav-link">
          <NavLink className="nav" to={"/"}>
            Bots
          </NavLink>{" "}
          <NavLink className="nav" to={"/your-army"}>
            Army
          </NavLink>
        </nav>
        <Routes>
          {" "}
          <Route
            path="/"
            element={<BotCollection bots={bots} addToArmy={addToArmy} />}
          />
          <Route
            path="your-army"
            element={<YourBotArmy army={army} setArmy={setArmy} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
