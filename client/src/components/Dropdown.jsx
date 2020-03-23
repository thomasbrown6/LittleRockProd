import React from "react";
import { Link } from "react-router-dom";

const Dropdown = props => (
  <ul className={props.hidden}>
    {/* {props.activeIndex != null && (
            )} */}
    {props.item1 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url1}>
          {props.item1}
        </Link>
      </li>
    )}
    {props.item2 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url2}>
          {props.item2}
        </Link>
      </li>
    )}
    {props.item3 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url3}>
          {props.item3}
        </Link>
      </li>
    )}
    {props.item4 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url4}>
          {props.item4}
        </Link>
      </li>
    )}
    {props.item5 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url5}>
          {props.item5}
        </Link>
      </li>
    )}
    {props.item6 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url6}>
          {props.item6}
        </Link>
      </li>
    )}
    {props.item7 != null && (
      <li>
        <Link className="rightmenu-link" to={props.url7}>
          {props.item7}
        </Link>
      </li>
    )}
  </ul>
);

export default Dropdown;
