import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./NavButton.scss";

const NavButton = props => {
  const clickHandler = e => {
    e.preventDefault();
    if (props.pageLink) {
      props.pageChangeHandler(props.pageLink);
    }
  };

  return (
    <div className="navButton">
      { // If a link to a next or previous page was received, return a button with an onClick handler for navigation
        // Otherwise return a disabled button
        props.pageLink ? (
        <button className={props.action} onClick={e => clickHandler(e)}><FontAwesomeIcon icon={props.action === 'prev' ? faAngleLeft: faAngleRight} /></button>
      ) : (
        <button className={props.action} disabled><FontAwesomeIcon icon={props.action === 'prev' ? faAngleLeft: faAngleRight} /></button>
      )}
    </div>
  );
}

export default NavButton;