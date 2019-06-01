import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./NavButton.scss";

export default class NavButton extends Component {
  clickHandler = e => {
    e.preventDefault();
    if (this.props.pageLink) {
      this.props.pageChangeHandler(this.props.pageLink);
    }
  };

  render = props => {
    return (
      <div className="navButton">
        {this.props.pageLink ? (
          <button className={this.props.action} onClick={e => this.clickHandler(e)}><FontAwesomeIcon icon={this.props.action === 'prev' ? faAngleLeft: faAngleRight} /></button>
        ) : (
          <button className={this.props.action} disabled><FontAwesomeIcon icon={this.props.action === 'prev' ? faAngleLeft: faAngleRight} /></button>
        )}
      </div>
    );
  };
}