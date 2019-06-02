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
               stats={[
                ["Name", char.name],
                ["Gender", char.gender],
                ["Birth Year", char.birth_year],
                ["Height", (char.height / 100) + 'm'],
                ["Weight", char.mass + 'kg']
              ]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;