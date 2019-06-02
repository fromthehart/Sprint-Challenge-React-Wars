import React from "react";

const Character = props => {
  return (
    <details>
      <summary className="name">
        <span>{props.name}</span>
      </summary>
      <div className="info">
        <div className="attribute">
          <h4 className="heading">Gender:</h4> {props.gender}
        </div>
        <div className="attribute">
          <h4 className="heading">Birth Year:</h4> {props.birth_year}
        </div>
        <div className="attribute">
          <h4 className="heading">Height:</h4> {props.height / 100}m
        </div>
        <div className="attribute">
          <h4 className="heading">Weight:</h4> {props.mass}kg
        </div>
      </div>
    </details>
  );
}

export default Character;