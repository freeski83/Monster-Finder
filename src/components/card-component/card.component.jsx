import React from "react";
import "./card.styles.css";

const Card = ({ planet }) => {
  return (
    <div className="card-container">
      <h1>Name: {planet.name}</h1>
      <h3>Diameter: {planet.diameter} Km</h3>
      <h3>Population: {planet.population}</h3>
      <h3>Terrain: {planet.terrain}</h3>
    </div>
  );
};

export default Card;
