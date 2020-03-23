import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = props => (
  <div className={"submenu-dropdown-grid "}>
    <div className="width-1-1">
      <ul className="submenu-navbar">
        <li className="submenu-item">
          <Link className="sub-link" to={props.URL_item1}>
            {props.Title_item1}
          </Link>
        </li>
        {props.Title_item2 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item2}>
              {props.Title_item2}
            </Link>
          </li>
        )}
        {props.Title_item3 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item3}>
              {props.Title_item3}
            </Link>
          </li>
        )}
        {props.Title_item4 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item4}>
              {props.Title_item4}
            </Link>
          </li>
        )}
        {props.Title_item5 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item5}>
              {props.Title_item5}
            </Link>
          </li>
        )}
        {props.Title_item6 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item6}>
              {props.Title_item6}
            </Link>
          </li>
        )}
        {props.Title_item7 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item7}>
              {props.Title_item7}
            </Link>
          </li>
        )}
        {props.Title_item8 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item8}>
              {props.Title_item8}
            </Link>
          </li>
        )}
        {props.Title_item9 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item9}>
              {props.Title_item9}
            </Link>
          </li>
        )}
        {props.Title_item10 != null && (
          <li className="submenu-item">
            <Link className="sub-link" to={props.URL_item10}>
              {props.Title_item10}
            </Link>
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default DropdownMenu;
