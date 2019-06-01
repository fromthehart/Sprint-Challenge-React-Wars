import React from "react";

const Character = props => {
  return (
    <details>
      <summary className="name">
        <span>{props.name}</span>
      </summary>
      <div className="info">
        <div className="attribute">
          <h4 className="heading">Height:</h4> {props.height}cm
        </div>
        <div className="attribute">
          <h4 className="heading">Mass:</h4> {props.mass}kg
        </div>
        <div className="attribute">
          <h4 className="heading">Hair Color:</h4> {props.hair_color}
        </div>
        <div className="attribute">
          <h4 className="heading">Skin Color:</h4> {props.skin_color}
        </div>
      </div>
    </details>
  );
}

export default Character;