import React from 'react'
import Character from './Character'
import './StarWars.scss'

class CharacterList extends React.Component {
  // Removed constructor to get rid of Userless Constructor warning in console
  // constructor(props) {
  //   super(props)
  // }

  render = () => {
    return (
      this.props.charDirectory.map((char, index) => {
        return (
          <div className="character-list">
            <ul>
              <Character 
                id={index.toString()} // Unique key for each <li> item. See comment in Character.js
                name={char.name}
                height={char.height}
                mass={char.mass}
                hair_color={char.hair_color}
                skin_color={char.skin_color}
              />
            </ul>
          </div>
        )
      })
    )
  }
}

export default CharacterList