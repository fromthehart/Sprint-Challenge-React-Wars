import React from "react";
import Character from "./Character";
import "./StarWars.scss";

const CharacterList = props => {
  return (
    <div className={`character-list ${props.fading ? "" : "hidden"}`}>
      <ul>
        {props.charDirectory.map((char, index) => {
          return (
            <li key={index} className="character">
              <Character
                name={char.name}
                gender={char.gender}
                birth_year={char.birth_year}
                height={char.height}
                mass={char.mass}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;