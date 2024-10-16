import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./app.css";
import { Pokemon } from "./pages/Pokemon";
import { Pokemons } from "./pages/Pokemons";
import { Items } from "./pages/items";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Pokemons/:name" element={<Pokemon />} />
          <Route path="/Pokemons" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
