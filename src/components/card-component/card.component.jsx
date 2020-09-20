import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <h1>Name: {props.planet.name}</h1>
      <h3>Diameter: {props.planet.diameter} Km</h3>
    </div>
  );
};

export default Card;
