import React, { useState, useEffect } from "react";
import CardList from "./components/card-list-component/card-list.component";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/searchbox-component/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setMonsters(res.data));
  }, []);

  return (
    <div className="App">
      <h1>Monster Finder</h1>
      <SearchBox placeholder="search monsters" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
