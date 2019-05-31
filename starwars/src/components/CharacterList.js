import React from 'react'
import Character from './Character'
import './StarWars.css'

class CharacterList extends React.Component {
  constructor(props) {
    super(props)
  }

  render = props => {
    console.log(this.props.charDirectory)
    return (
      this.props.charDirectory.map((char, index) => {
        return (
          <ul>
            <Character 
              key={index.toString()}
              name={char.name}
              height={char.height}
              mass={char.mass}
              hair_color={char.hair_color}
              skin_color={char.skin_color}
            />
          </ul>
        )
      })
    )
  }
}

export default CharacterList