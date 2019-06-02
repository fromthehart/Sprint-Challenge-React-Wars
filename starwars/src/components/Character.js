import React from "react";

const Character = props => {
  return (
    <details>
      <summary className="name">
        <span>{props.stats[0][1]}</span>
      </summary>
      <div className="info">
        {props.stats.map((stat, index) => {
          console.log(stat)
          if (index) {
            return (
              <div className="attribute">
                <h4 className="heading">{stat[0]}: </h4> {stat[1]}
              </div>
            )
          } else {
            return null;
        }})}
      </div>
    </details>
  );
}

export default Character;