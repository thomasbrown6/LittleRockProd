import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => (
  <ul className={props.hidden}>
    {props.item1 != null && props.item1.includes("African") && (
      <li>
        <a className="rightmenu-link" href={props.url1} target="blank">
          {props.item1}
        </a>
      </li>
    )}
    {props.item1 != null && !props.item1.includes("African") && (
      <li>
        <Link className="rightmenu-link" to={props.url1}>
          {props.item1}
        </Link>
      </li>
    )}
    {props.item2 != null && props.item2.includes("Watch") && (
      <li>
        <a className="rightmenu-link" href={props.url2} target="blank">
          {props.item2}
        </a>
      </li>
    )}
    {props.item2 != null && !props.item2.includes("Watch") && (
      <li>
        <Link className="rightmenu-link" to={props.url2}>
          {props.item2}
        </Link>
      </li>
    )}
    {props.item3 != null && props.item3.includes("WALKER") && (
      <li>
        <a className="rightmenu-link" href={props.url3} target="blank">
          {props.item3}
        </a>
      </li>
    )}
    {props.item3 != null && !props.item3.includes("WALKER") && (
      <li>
        <Link className="rightmenu-link" to={props.url3}>
          {props.item3}
        </Link>
      </li>
    )}
    {props.item4 != null && props.item4.includes("Livingstone") && (
      <li>
        <a className="rightmenu-link" href={props.url4} target="blank">
          {props.item4}
        </a>
      </li>
    )}
    {props.item4 != null && !props.item4.includes("Livingstone") && (
      <li>
        <Link className="rightmenu-link" to={props.url4}>
          {props.item4}
        </Link>
      </li>
    )}
    {props.item5 != null && props.item5.includes("Livingstone") && (
      <li>
        <Link className="rightmenu-link" to={props.url5}>
          {props.item5}
        </Link>
      </li>
    )}
    {props.item5 != null && !props.item5.includes("Livingstone") && (
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
