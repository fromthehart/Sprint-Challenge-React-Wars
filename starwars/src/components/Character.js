import React from 'react'

class Character extends React.Component {
  constructor(props) {
    super(props)
  }

  render = props => {
    return (
      <li class="character">
        <details>
          <summary>{this.props.name}</summary>
          <p>Height: {this.props.height}</p>
          <p>Mass: {this.props.mass}</p>
          <p>Hair Color: {this.props.hair_color}</p>
          <p>Skin Color: {this.props.skin_color}</p>
        </details>
      </li>
    )
  }
}

export default Character