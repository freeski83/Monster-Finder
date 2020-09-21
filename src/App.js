import React, { useState, useEffect } from "react";
import CardList from "./components/card-list-component/card-list.component";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/searchbox-component/search-box.component";
import StarfieldAnimation from "react-starfield-animation";

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
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <h1 className="title">Star Wars Planet Guide</h1>
      <SearchBox placeholder="search planets" handleChange={handleChange} />

      <CardList planets={filteredPlanets} />
    </div>
  );
};

export default App;
