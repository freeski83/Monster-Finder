import React, { useState, useEffect } from "react";
import CardList from "./components/card-list-component/card-list.component";
import axios from "axios";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setMonsters(res.data));
  }, []);

  return (
    <div>
      <CardList>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </CardList>
    </div>
  );
};

export default App;
