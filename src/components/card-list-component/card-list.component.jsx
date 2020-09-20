import React from "react";
import Card from "../card-component/card.component";
import "./card-list.styles.css";

const CardList = ({ planets }) => {
  return (
    <div className="card-list">
      {planets.map((planet) => (
        <Card key={planet.url} planet={planet} />
      ))}
    </div>
  );
};

export default CardList;
