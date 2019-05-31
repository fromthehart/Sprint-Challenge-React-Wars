import React from 'react'

class Character extends React.Component {
  // Removed constructor to get rid of Userless Constructor warning in console
  // constructor(props) {
  //   super(props)
  // }

  render = () => {
    return (
      // Added unique 'key' prop to each <li> attempting to get rid of "Each child
      // in a list should have a unique 'key' prop." warning in console. No such luck. Ideas? 
      <li key={this.props.id} className="character">
        <details>
          <summary className="heading">
            <span>{this.props.name}</span>
          </summary>
          <div className="info">
            <div className="attribute">
              <h4 className="heading">Height:</h4> {this.props.height}cm
            </div>
            <div className="attribute">
              <h4 className="heading">Mass:</h4> {this.props.mass}kg
            </div>
            <div className="attribute">
              <h4 className="heading">Hair Color:</h4> {this.props.hair_color}
            </div>
            <div className="attribute">
              <h4 className="heading">Skin Color:</h4> {this.props.skin_color}
            </div>
          </div>
        </details>
      </li>
    )
  }
}

export default Character