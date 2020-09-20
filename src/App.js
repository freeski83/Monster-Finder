import React, { useState, useEffect } from "react";
import CardList from "./components/card-list-component/card-list.component";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/searchbox-component/search-box.component";

const App = () => {
  const [planets, setPlanets] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => setPlanets(res.data.results));
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Planet Guide</h1>
      <SearchBox placeholder="search planets" handleChange={handleChange} />

      <CardList planets={filteredPlanets} />
    </div>
  );
};

export default App;
