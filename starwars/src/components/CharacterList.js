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
                height={char.height}
                mass={char.mass}
                hair_color={char.hair_color}
                skin_color={char.skin_color}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;