import { Link } from "react-router-dom";
import React from "react";

const Menu2 = props => (
  <nav id="menu2">
    <div className="menu2-container">
      <ul className="top-menu">
        <li>
          <Link to="/get-connected/visitors">New Here?</Link>
        </li>
        <li>
          <Link to="/media-resources/watch-online">Watch Live</Link>
        </li>
        <li>
          <Link to="/get-connected/tithes-offerings">Give Today</Link>
        </li>
      </ul>
      <div className="spacer" />
      <ul className="icons">
        <li>
          <a href="#" target="_blank" className="icon fa-twitter">
            <span className="label"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/LittleRockAMEZion/"
            target="_blank"
            className="icon fa-facebook-square"
          >
            <span className="label"></span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="icon fa-instagram">
            <span className="label"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCZ3K2j4WbnJ_jqL6Wmqi4mA/featured"
            target="_blank"
            className="icon fa-youtube"
          >
            <span className="label"></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Menu2;
