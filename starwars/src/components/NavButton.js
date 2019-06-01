import React, {Component} from "react"
import "./NavButton.scss"

export default class NavButton extends Component {

  clickHandler = e => {
    e.preventDefault()
    if (this.props.pageNum) {
      this.props.pageChange(this.props.pageNum)
    }
  }

  render = props => {
    console.log(this.props)
    return (
      <div className="navButton">
        {
          (this.props.pageNum === 1 || this.props.pageNum === this.props.pageTotal) ?
            (<button disabled>{this.props.label}</button>):
            (<button onClick={e => this.clickHandler(e)}>{this.props.label}</button>)
        }
      </div>
    )
  }
}