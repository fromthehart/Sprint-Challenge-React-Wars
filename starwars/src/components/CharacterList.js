import React from 'react'
import Character from './Character'
import './StarWars.css'

class CharacterList extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <ul>
        <Character />
      </ul>
    )
  }
}

export default CharacterList