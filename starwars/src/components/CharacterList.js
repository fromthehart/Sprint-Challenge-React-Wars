import React from "react"
import Character from "./Character"
import "./StarWars.scss"

class CharacterList extends React.Component {
  // Removed constructor to get rid of Userless Constructor warning in console
  // constructor(props) {
  //   super(props)
  // }

  render = () => {
    return (
      <div className="character-list">
        <ul>
            {this.props.charDirectory.map((char, index) => {
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
              )
            })}
       </ul>
      </div>
    )
  }
}

export default CharacterList